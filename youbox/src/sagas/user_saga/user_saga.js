import { takeEvery, call, put } from 'redux-saga/effects'
import { REGISTER_USER } from './action_type'

function* registerUser(user) {
    console.log('user-details', user)
}

export default function* userSaga() {
    yield takeEvery(REGISTER_USER, registerUser)
}
