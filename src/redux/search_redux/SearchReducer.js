import {
    SET_LOADING,
    SET_SEARCH_RESULT,
    UNSET_SEARCH_RESULT,
    SET_SEARCH_ERROR
} from './action_types'

const initialState = {
    loading: false,
    search_result: {
        title: '',
        author_name: '',
        thumbnail_url: '',
        url: ''
    },
    search_status: false,
    search_error: {
        error: false,
        msg: ''
    }
}

export default function searchReducer(state = initialState, action) {
    if(action.type === SET_LOADING) {
        return Object.assign({}, state, { loading: action.payload.loading })
    } else if (action.type === SET_SEARCH_RESULT) {
        return Object.assign({}, state, { loading: false, search_result: action.payload.search_result, search_status: true, search_error: { error: false, msg: '' } })
    } else if (action.type === UNSET_SEARCH_RESULT) {
        return Object.assign({}, state, { loading: false, search_result: { title: '', author_name: '', thumbnail_url: '' }, search_status: false, search_error: { error: false, msg: '' } })
    } else if (action.type === SET_SEARCH_ERROR) {
        return Object.assign({}, state, { 
            loading: false, 
            search_result: { title: '', author_name: '', thumbnail_url: '' }, 
            search_status: false,
            search_error: {
                error: action.payload.error_status,
                msg: action.payload.error_msg
            }
        })
    }
    return state
}
