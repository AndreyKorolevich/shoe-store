import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
import catalogReducer from './reducers/catalog_reducer'
import errorReducer from './reducers/error_reducer'
import cardReducer from './reducers/card_reducer'
import cartReducer from './reducers/cart_reducer'

const reducer = combineReducers({
  catalog: catalogReducer,
  error: errorReducer,
  card: cardReducer,
  cart: cartReducer,
})
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)
export default store
