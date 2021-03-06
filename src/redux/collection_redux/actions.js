import { 
    FETCH_CATEGORIES, 
    SAVE_CATEGORIES, 
    SAVE_VIDEO, 
    FETCH_VIDEO, 
    LIKE_VIDEO, 
    FETCH_FAVOURITES, 
    DELETE_VIDEO,
    FETCH_RECENTS,
    SEARCH_VIDEOS
} from '../../sagas/collections_saga/action_types'

import { SET_SEARCH_RESULTS } from './action_types'

export function fetchCategories(payload) {
    return { type: FETCH_CATEGORIES, payload }
}

export function saveCategories(payload) {
    return { type: SAVE_CATEGORIES, payload }
}

export function saveVideo(payload) {
    return { type: SAVE_VIDEO, payload }
}

export function fetchVideos() {
    return { type: FETCH_VIDEO }
}

export function likeVideo(payload) {
    return { type: LIKE_VIDEO, payload }
}

export function fetchFavourites() {
    return { type: FETCH_FAVOURITES }
}

export function deleteVideo(payload) {
    return { type: DELETE_VIDEO, payload}
}

export function fetchRecents() {
    return { type: FETCH_RECENTS }
}

export function searchVideos(payload) {
    return { type: SEARCH_VIDEOS, payload}
}

export function setSearchResults(payload) {
    return { type: SET_SEARCH_RESULTS, payload }
}
