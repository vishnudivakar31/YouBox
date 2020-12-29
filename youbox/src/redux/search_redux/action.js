import { SEARCH_VIDEO } from '../../sagas/search_saga/action_types'

export function searchVideo(payload) {
    return { type: SEARCH_VIDEO, payload }
}
