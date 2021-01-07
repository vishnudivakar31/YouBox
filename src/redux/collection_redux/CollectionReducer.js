import { SET_CATEGORIES, ADD_VIDEOS, SET_VIDEOS, SET_COLLECTION_LOADING, SET_FAVOURITE, DUMP_FAVOURITES } from './action_types'

const initialState = {
    categories: [],
    my_collections: {},
    collection_loading: false,
    favourites: []
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
    } else if (action.type === SET_VIDEOS) {
        return Object.assign({}, state, { my_collections: {...action.payload.collections} })
    } else if (action.type === SET_COLLECTION_LOADING) {
        return Object.assign({}, state, { collection_loading: action.payload })
    } else if (action.type === SET_FAVOURITE) {
        let collection = state.my_collections
        const category = action.payload.category
        const id = action.payload.id
        const favourites = state.favourites
        for(let item of collection[category]) {
            if(item.id === id) {
                item.favourite = !item.favourite
                if(item.favourite) {
                    favourites.push(item)
                } else {
                    const index = favourites.map(x => x.id).indexOf(item.id)
                    if(index > -1) favourites.splice(index, 1)
                }
            }
        }
        return Object.assign({}, state, { my_collections: {...collection}, favourites: [...favourites] })
    } else if (action.type === DUMP_FAVOURITES) {
        return Object.assign({}, state, { favourites: [...action.payload.favourites] })
    }
    return state
}
