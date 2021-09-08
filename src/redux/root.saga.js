import { all,call } from 'redux-saga/effects';
import { startFetchCollection  } from '../redux/shop/shop.sagas'
import { userSagas  } from './user/user.sagas'

export function* rootSaga(){
    yield all([call(startFetchCollection),call(userSagas)])
}