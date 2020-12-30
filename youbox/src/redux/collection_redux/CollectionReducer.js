import { SET_CATEGORIES } from './action_types'

const initialState = {
    categories: [],
    my_collections: []
}

export default function collectionReducer(state = initialState, action) {
    if(action.type === SET_CATEGORIES) {
        return Object.assign({}, state, { categories: action.payload.categories })
    }
    return state
}
