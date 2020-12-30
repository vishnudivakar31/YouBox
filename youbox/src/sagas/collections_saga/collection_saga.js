import { call, put, select, takeEvery } from 'redux-saga/effects'
import { FETCH_CATEGORIES, SAVE_CATEGORIES } from './action_types'
import { SET_CATEGORIES } from '../../redux/collection_redux/action_types'
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
            categories.push(category)
            yield put({ type: SET_CATEGORIES, payload: {categories} })
        }
    }
}

export default function* collectionSaga() {
    yield takeEvery(FETCH_CATEGORIES, fetchCategories)
    yield takeEvery(SAVE_CATEGORIES, saveCategories)
}
