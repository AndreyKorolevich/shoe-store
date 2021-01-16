import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import catalogReducer from "./reducers/catalog_reducer";
import saga from "./saga";

const reducer = combineReducers({
  catalog: catalogReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);
export default store;
