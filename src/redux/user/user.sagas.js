import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionTypes from "./user.type";
import {
  googleProvider,
  auth,
  createUserDoc,
  getCurrentUser,
} from "../../firebase/firebaseConfig";
import {
  signInSuccess,
  signInFailed,
  signoutSuccess,
  signoutFailure,
  signUpStart,
  signUpSucess,
  signUpFailed,
} from "./user-action";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userReff = yield call(createUserDoc, user);
    const userSnapShot = yield userReff.get();
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userReff = yield call(createUserDoc, user);
    const userSnapShot = yield userReff.get();

    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isAuth() {
  try {
    const userAuth = yield getCurrentUser();

    if (!userAuth) return;

    const userReff = yield call(createUserDoc, userAuth);
    const userSnapShot = yield userReff.get();
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {}
}

export function* googleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUser() {
  yield takeLatest(userActionTypes.CHECK_USER, isAuth);
}

export function* signout() {
  try {
    yield auth.signOut();
    yield put(signoutSuccess());
  } catch (error) {
    yield put(signoutFailure(error));
  }
}

export function* onSignOut() {
  yield takeLatest(userActionTypes.SIGN_OUT_START, signout);
}

export function* signInAfterSignUp({ payload: { user, data } }) {



  try {
    // auth.signInWithEmailAndPassword(email,password);
    const userReff = yield call(createUserDoc, user, data);
    const userSnapShot = yield userReff.get();
    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onSignUpSucess() {
  yield takeLatest(userActionTypes.SIGN_UP_SUCESS, signInAfterSignUp);
}

export function* signUp({ payload: { password, email, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSucess({ user, data: { displayName } }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
  yield all([
    call(onSignUpSucess),
    call(onSignUpStart),
    call(googleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUser),
    call(onSignOut),
  ]);
}
