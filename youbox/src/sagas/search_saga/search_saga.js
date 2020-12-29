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
    if(youtube_url === undefined || youtube_url.length === 0) {
        yield put({ type: SET_SEARCH_ERROR, payload: { error_status: true, error_msg: 'url is required to search' }})
    } else {
        const response = yield call(axios.get, url)
        const data = response.data
        if(data === 'Not Found') {
            yield put({ type: SET_SEARCH_ERROR, payload: { error_status: true, error_msg: 'video is not found, provide the entire url' }})
        } else {
            const search_result = {
                title: data.title,
                author_name: data.author_name,
                thumbnail_url: data.thumbnail_url,
                url: youtube_url
            }
            yield put({ type: SET_SEARCH_RESULT, payload: { search_result }})
            yield put({ type: SET_LOADING, payload: { loading: false }})
        }
    } 
}

export default function* searchSaga() {
    yield takeEvery(SEARCH_VIDEO, searchVideo)
}
