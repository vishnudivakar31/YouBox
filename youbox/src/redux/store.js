import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist' 
import sessionStorage from 'redux-persist/es/storage/session'
import userReducer from './user_reducer/UserReducer'
import searchReducer from './search_redux/SearchReducer'
import createSagaMiddleware from 'redux-saga'
import userSaga from '../sagas/user_saga/user_saga'

const sagaMiddleWare = createSagaMiddleware()

const rootReducer = combineReducers({user: userReducer, search: searchReducer})

const persistConfig = {
    key: 'root',
    storage: sessionStorage,
    blacklist: ['search']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleWare))
const persistor = persistStore(store)

sagaMiddleWare.run(userSaga)

export {store, persistor}
