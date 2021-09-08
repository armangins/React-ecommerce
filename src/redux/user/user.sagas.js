import { takeLatest, put,all,call  } from 'redux-saga/effects';
import userActionTypes from './user.type';
import { googleProvider, auth, createUserDoc } from '../../firebase/firebaseConfig'
import { googleSignInFailed, googleSignInSuccess } from './user-action';
 




export function* signInWithGoogle(){
 

    try{
        const {user} = yield auth.signInWithPopup(googleProvider)
        const userReff = yield call(createUserDoc, user);
        const userSnapShot = yield userReff.get();
        yield put(googleSignInSuccess({id:userSnapShot.id,...userSnapShot.data()}))
    }catch(error){
        yield put(googleSignInFailed(error))
    }
}

export function* userSagas(){
    yield all([call(googleSignInStart)])
}

export function* googleSignInStart(){

    yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START,signInWithGoogle)
}
