import { FETCH_CATEGORIES, SAVE_CATEGORIES } from '../../sagas/collections_saga/action_types'

export function fetchCategories(payload) {
    return { type: FETCH_CATEGORIES, payload }
}

export function saveCategories(payload) {
    return { type: SAVE_CATEGORIES, payload }
}
