import { call, put, select, takeEvery } from 'redux-saga/effects'
import { FETCH_CATEGORIES, SAVE_CATEGORIES, SAVE_VIDEO, FETCH_VIDEO, LIKE_VIDEO, FETCH_FAVOURITES, DELETE_VIDEO } from './action_types'
import { SET_CATEGORIES, ADD_VIDEOS, SET_VIDEOS, SET_COLLECTION_LOADING, SET_FAVOURITE, DUMP_FAVOURITES, REMOVE_VIDEO } from '../../redux/collection_redux/action_types'
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

function* fetchVideos() {
    yield put({ type: SET_COLLECTION_LOADING, payload: true })
    const uid = yield select(getUserId)
    const snapshot = yield call(rsf.firestore.getCollection, 'collections')
    let collections = {}
    snapshot.forEach(collection => {
        let video = collection.data()
        if(video.uid === uid) {
            const category = video.category
            if(collections[category] === undefined) {
                collections[category] = []
            }
            video.id = collection.id
            collections[category].push(video)
        }
    })
    yield put({ type: SET_VIDEOS, payload: { collections: collections } })
    yield put({ type: SET_COLLECTION_LOADING, payload: false })
}

function* likeVideo({ payload }) {
    const id = payload.id
    const category = payload.category
    const status = payload.status
    yield call(rsf.firestore.updateDocument, `collections/${id}`, 'favourite', status)
    yield put({ type: SET_FAVOURITE, payload: {category, id}})
}

function* fetchFavourites({ payload }) {
    yield put({ type: SET_COLLECTION_LOADING, payload: true })
    const uid = yield select(getUserId)
    const snapshot = yield call(rsf.firestore.getCollection, 'collections')
    let favourites = []
    snapshot.forEach(collection => {
        let video = collection.data()
        if(video.uid === uid && video.favourite) {
            video.id = collection.id
            favourites.push(video)
        }
    })
    yield put({ type: DUMP_FAVOURITES, payload: { favourites: favourites } })
    yield put({ type: SET_COLLECTION_LOADING, payload: false })
}

function* deleteVideo({ payload }) {
    const category = payload.category
    const id = payload.id
    yield call(rsf.firestore.deleteDocument, `collections/${id}`)
    yield put({ type: REMOVE_VIDEO, payload: { category, id }})
}

export default function* collectionSaga() {
    yield takeEvery(FETCH_CATEGORIES, fetchCategories)
    yield takeEvery(SAVE_CATEGORIES, saveCategories)
    yield takeEvery(SAVE_VIDEO, saveVideo)
    yield takeEvery(FETCH_VIDEO, fetchVideos)
    yield takeEvery(LIKE_VIDEO, likeVideo)
    yield takeEvery(FETCH_FAVOURITES, fetchFavourites)
    yield takeEvery(DELETE_VIDEO, deleteVideo)
}
