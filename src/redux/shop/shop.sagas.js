import { call, put, takeLatest } from "@redux-saga/core/effects";
import ShopActionsTypes from "../shop/shop.type";
import { firestore, convertToObj } from "../../firebase/firebaseConfig";
import { fetchSuccess, fetchFailed } from "../shop/shop.action";

export function* fetchCollectionsAysnc() {
  try {
    const collectionRef = firestore.collection("collections");

    const snapShot = yield collectionRef.get();

    const collectionToObject = yield call(convertToObj, snapShot);

    yield put(fetchSuccess(collectionToObject));
  } catch (error) {
    yield put(fetchFailed(error.message));
  }
}
export function* startFetchCollection() {
  yield takeLatest(ShopActionsTypes.FETCH_START, fetchCollectionsAysnc);
}
