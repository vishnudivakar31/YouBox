import axios from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'
import { SEARCH_VIDEO } from './action_types'
import {
    SET_LOADING,
    SET_SEARCH_RESULT,
    UNSET_SEARCH_RESULT,
    SET_SEARCH_ERROR
} from '../../redux/search_redux/action_types'

function* searchVideo({ payload }) {
    const youtube_url = payload.url
    const url = `https://www.youtube.com/oembed?url=${youtube_url}`
    yield put({ type: SET_LOADING, payload: { loading: true }})
    const data = yield call(axios.get, url)
}

export default function* searchSaga() {
    yield takeEvery(SEARCH_VIDEO, searchVideo)
}
