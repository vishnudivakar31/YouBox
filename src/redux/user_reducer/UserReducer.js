import {
    SET_USER, 
    UNSET_USER,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from './action_types'

const initialState = {
    userId: '',
    name: '',
    register_status: {
        success: false,
        failure: false,
        message: ''
    },
    login_status: {
        success: false,
        failure: false,
        message: ''
    }
}

function userReducer(state = initialState, action) {
    if (action.type === SET_USER) {
        return Object.assign({}, state, { userId: action.payload.userId, name: action.payload.name })
    } else if (action.type === UNSET_USER) {
        return Object.assign({}, state, { userId: '', name: '' })
    } else if (action.type === REGISTER_SUCCESS) {
        return Object.assign({}, state, { register_status: { success: true, failure: false, message: action.payload.message } })
    } else if (action.type === REGISTER_ERROR) {
        return Object.assign({}, state, { register_status: { success: false, failure: true, message: action.payload.message } })
    } else if (action.type === LOGIN_SUCCESS) {
        return Object.assign({}, state, { login_status: { success: true, failure: false, message: action.payload.message } })
    } else if (action.type === LOGIN_ERROR) {
        return Object.assign({}, state, { login_status: { success: false, failure: true, message: action.payload.message } })
    }
    return state
}

export default userReducer
