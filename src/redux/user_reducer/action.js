import {
    SET_USER, 
    UNSET_USER
} from './action_types'
import {
    REGISTER_USER,
    LOGIN,
    FORGOT_PASSWORD
} from '../../sagas/user_saga/action_type'

export function setUser(payload) {
    return { type: SET_USER, payload}
}

export function unSetUser() {
    return { type: UNSET_USER}
}

export function registerUser(payload) {
    return { type: REGISTER_USER, payload }
} 

export function loginUser(payload) {
    return { type: LOGIN, payload }
}

export function forgotPassword(payload) {
    return { type: FORGOT_PASSWORD, payload }
}
