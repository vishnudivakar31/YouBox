import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from './user_reducer/UserReducer'
import createSagaMiddleware from 'redux-saga'
import userSaga from '../sagas/user_saga/user_saga'

const sagaMiddleWare = createSagaMiddleware()

const rootReducer = combineReducers({user: userReducer})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(userSaga)

export default store
