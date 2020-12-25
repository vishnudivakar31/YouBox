import {SET_USER, UNSET_USER} from './action_types'

export function setUser(payload) {
    return { type: SET_USER, payload}
}

export function unSetUser() {
    return { type: UNSET_USER}
}
