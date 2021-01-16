import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import catalogReducer from './reducers/catalog_reducer'
import errorReducer from './reducers/error_reducer'

const reducer = combineReducers({
  catalog: catalogReducer,
  error: errorReducer,
})
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)
export default store
