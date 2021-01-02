import { call, put, select, takeEvery } from 'redux-saga/effects'
import { FETCH_CATEGORIES, SAVE_CATEGORIES, SAVE_VIDEO } from './action_types'
import { SET_CATEGORIES, ADD_VIDEOS } from '../../redux/collection_redux/action_types'
import { reduxSagaFirebase as rsf } from '../../firebase/Firebase'
import capitalize from 'capitalize'

const getUserId = (state) => state.user.userId
const getCategories = state => state.collection.categories

function* fetchCategories() {
    const snapshot = yield call(rsf.firestore.getCollection, 'categories')
    const uid = yield select(getUserId)
    let categories = []
    snapshot.forEach(category => {
        const categoryData = category.data()
        if(categoryData.uid === uid) {
            categories.push(categoryData)
        }
    })
    categories = categories.sort((a, b) => a.category < b.category ? -1 : 1)
    yield put({ type: SET_CATEGORIES, payload: {categories} })
}

function* saveCategories({ payload }) {
    const category = yield call(capitalize.words, payload)
    const uid = yield select(getUserId)
    let categories = yield select(getCategories)
    const filteredCategory = categories.filter(item => item === category)
    if(category && category.length > 0 && filteredCategory.length === 0) {
        const doc = yield call(rsf.firestore.addDocument, 'categories', {
            category,
            uid
        })
        if(doc) {
            categories.push({category})
            categories = categories.sort((a, b) => a.category < b.category ? -1 : 1)
            yield put({ type: SET_CATEGORIES, payload: {categories: categories} })
        }
    }
}

function* saveVideo({ payload }) {
    const uid = yield select(getUserId)
    const search_result = payload.search_result
    const category = payload.category
    let data = {...search_result, category, uid, created_at: new Date(), favourite: false}
    if(uid.length > 0 && category.length > 0 && search_result.url.length > 0) {
        const doc = yield call(rsf.firestore.addDocument, 'collections', data)
        data.id = doc.id
        yield put({ type: ADD_VIDEOS, payload: { video_details: data } })
    }
}

export default function* collectionSaga() {
    yield takeEvery(FETCH_CATEGORIES, fetchCategories)
    yield takeEvery(SAVE_CATEGORIES, saveCategories)
    yield takeEvery(SAVE_VIDEO, saveVideo)
}
