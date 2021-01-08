import { SET_CATEGORIES, ADD_VIDEOS, SET_VIDEOS, SET_COLLECTION_LOADING, SET_FAVOURITE, DUMP_FAVOURITES, REMOVE_VIDEO, SET_RECENTS, SET_SEARCH_RESULTS } from './action_types'

const initialState = {
    categories: [],
    my_collections: {},
    collection_loading: false,
    favourites: [],
    recents: {},
    searchStatus: false,
    searchResults: []
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
    } else if (action.type === REMOVE_VIDEO) {
        let collection = state.my_collections
        const category = action.payload.category
        const id = action.payload.id
        const favourites = state.favourites
        let collections = collection[category]
        
        let index = collections.map(x => x.id).indexOf(id)
        if(index > -1) collections.splice(index, 1)
        if(collections.length > 0) {
            collection[category] = collections
        } else {
            delete collection[category]
        }        
        index = favourites.map(x => x.id).indexOf(id)
        if(index > -1) favourites.splice(index, 1)
        
        return Object.assign({}, state, { my_collections: {...collection}, favourites: [...favourites] })
    } else if (action.type === SET_RECENTS) {
        return Object.assign({}, state, { recents: {...action.payload.recents} })
    } else if (action.type === SET_SEARCH_RESULTS) {
        return Object.assign({}, state, { searchStatus: action.payload.searchStatus, searchResults: [...action.payload.searchResults] })
    }
    return state
}
