import { SET_CATEGORIES, ADD_VIDEOS } from './action_types'

const initialState = {
    categories: [],
    my_collections: {}
}

export default function collectionReducer(state = initialState, action) {
    if(action.type === SET_CATEGORIES) {
        return Object.assign({}, state, { categories: [...action.payload.categories] })
    } else if (action.type === ADD_VIDEOS) {
        let collection = state.my_collections
        if(collection[action.payload.video_details.category] === undefined) {
            collection[action.payload.video_details.category] = []
        }
        collection[action.payload.video_details.category].push(action.payload.video_details)
        return Object.assign({}, state, { my_collections: {...collection} })
    }
    return state
}
