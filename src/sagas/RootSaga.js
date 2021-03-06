import userSaga from './user_saga/user_saga'
import searchSaga from './search_saga/search_saga'
import collectionSaga from './collections_saga/collection_saga'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        userSaga(),
        searchSaga(),
        collectionSaga()
    ])
}
