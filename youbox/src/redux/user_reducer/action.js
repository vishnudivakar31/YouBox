import {
    SET_USER, 
    UNSET_USER
} from './action_types'
import {REGISTER_USER} from '../../sagas/user_saga/action_type'

export function setUser(payload) {
    return { type: SET_USER, payload}
}

export function unSetUser() {
    return { type: UNSET_USER}
}

export function registerUser(payload) {
    return { type: REGISTER_USER, payload }
} 
