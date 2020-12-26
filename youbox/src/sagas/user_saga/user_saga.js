import { takeEvery, call, put } from 'redux-saga/effects'
import { REGISTER_USER } from './action_type'
import { reduxSagaFirebase } from '../../firebase/Firebase'

function* registerUser(user) {
    const email = user.payload.email
    const password = user.payload.password
    console.log('email', email)
    console.log('password', password)
}

export default function* userSaga() {
    yield takeEvery(REGISTER_USER, registerUser)
}
