import {SET_USER, UNSET_USER} from './action_types'

const initialState = {
    userId: '',
    name: ''
}

function userReducer(state = initialState, action) {
    if (action.type === SET_USER) {
        return Object.assign({}, state, { userId: action.payload.userId, name: action.payload.name })
    } else if (action.type === UNSET_USER) {
        return Object.assign({}, state, { userId: '', name: '' })
    }
    return state
}

export default userReducer
