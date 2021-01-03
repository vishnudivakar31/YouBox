import { SEARCH_VIDEO } from '../../sagas/search_saga/action_types'
import { SET_SEARCH_ERROR } from './action_types'

export function searchVideo(payload) {
    return { type: SEARCH_VIDEO, payload }
}

export function setSearchError(payload) {
    return { type: SET_SEARCH_ERROR, payload }
}
