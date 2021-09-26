import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionTypes from "../user/user.type";
import { clearCart } from "./cart-action";

export function* clearCartAfterSignOut(){
yield put(clearCart())
}

export function* onSignOutSuccess(){
   yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS,clearCartAfterSignOut)
}

export function* cartSagas(){
    yield all([call(onSignOutSuccess)])
}

