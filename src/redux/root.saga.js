import { all,call } from 'redux-saga/effects';
import { startFetchCollection  } from '../redux/shop/shop.sagas'

export function* rootSaga(){
    yield all([call(startFetchCollection)])
}