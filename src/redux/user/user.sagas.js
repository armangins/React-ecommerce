import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionTypes from "./user.type";
import {
  googleProvider,
  auth,
  createUserDoc,
  getCurrentUser
} from "../../firebase/firebaseConfig";
import { signInSuccess,signInFailed, checkUser} from "./user-action";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userReff = yield call(createUserDoc, user);
    const userSnapShot = yield userReff.get();
    yield put(
      signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
    );
  } catch (error) {
    yield put(signInFailed(error));
  }
}


export function* signInWithEmail({payload:{email,password}}){

    try {
      const { user } = yield auth.signInWithEmailAndPassword(email,password);
      const userReff = yield call(createUserDoc,user);
      const userSnapShot = yield userReff.get();

      yield put(signInSuccess({id:userSnapShot.id,...userSnapShot.data()}) );
      
    } catch (error) {
      yield put(signInFailed(error))
    }
}

export function* isAuth (){
 
  try {
    const userAuth =  yield getCurrentUser();
    if(!userAuth) return;
    const userReff = yield call(createUserDoc, userAuth);
    const userSnapShot = yield userReff.get();
    yield put(signInSuccess({id:userSnapShot.id,...userSnapShot.data()}) );
  } catch (error) {
    
  }
}

export function* googleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* onEmailSignInStart(){
    yield takeLatest(userActionTypes.EMAIL_SIGNIN_START,signInWithEmail)
}

export function* onCheckUser(){
  yield takeLatest(userActionTypes.CHECK_USER,isAuth)
}




export function* userSagas() {
    yield all([call(googleSignInStart),call(onEmailSignInStart),call(onCheckUser)]);
  }
