import sha256 from 'crypto-js/sha256'
import { takeEvery, call, put } from 'redux-saga/effects'
import { REGISTER_USER } from './action_type'
import { REGISTER_SUCCESS, REGISTER_ERROR, SET_USER } from '../../redux/user_reducer/action_types'
import { reduxSagaFirebase } from '../../firebase/Firebase'

function* registerUser({ payload }) {
    const email = payload.email
    const password = payload.password
    const digestPassword = sha256(password)
    try {
        const userResponse = yield call(reduxSagaFirebase.auth.createUserWithEmailAndPassword, email, digestPassword.toString())
        yield call(reduxSagaFirebase.firestore.addDocument, 'users', {
            uid: userResponse.user.uid,
            created_at: new Date(),
            name: payload.name
        })
        yield call(reduxSagaFirebase.auth.sendEmailVerification)
        yield put({ type: SET_USER, payload: { userId: userResponse.user.uid, name: payload.name }})
        yield put({ type: REGISTER_SUCCESS, payload: { message: 'Account created successful. Verification email is send, please follow it.' }})
    } catch (error) {
        yield put({ type: REGISTER_ERROR, payload: { message: error.message }})
    }
}

export default function* userSaga() {
    yield takeEvery(REGISTER_USER, registerUser)
}
