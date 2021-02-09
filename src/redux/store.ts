import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
import catalogReducer from './catalog/catalog_reducer';
import errorReducer from './error/error_reducer';
import cardReducer from './card/card_reducer';
import cartReducer from './cart/cart_reducer';

const reducer = combineReducers({
  catalog: catalogReducer,
  error: errorReducer,
  card: cardReducer,
  cart: cartReducer,
});

type ReducerType = typeof reducer;
export type StateType = ReturnType<ReducerType>;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);
export default store;
