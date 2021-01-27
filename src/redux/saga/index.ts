import {
  take, fork, spawn, debounce,
} from 'redux-saga/effects';
import { filterChangeSearchAction } from '../../utils/filter_change_search_action';
import {
  FETCH_CARD_DETAILS,
  FETCH_CATALOG,
  FETCH_CERTAIN_SHOES,
  FETCH_SALES_HIT,
  LOAD_ELSE,
  SUBMIT_ORDER,
} from '../actions/actions';
import {
  fetchSalesHitSaga,
  fetchCatalogSaga,
  fetchCertainShoesSaga,
  fetchElseShoesSaga,
  fetchSearchShoesSaga,
  fetchCardDetailsSaga,
  sendFormSaga,
} from './saga';
import {
  ActionTypeFetchCardDetails,
  ActionTypeFetchCatalog,
  ActionTypeFetchCertainShoes,
  ActionTypeLoadElse,
  ActionTypeSubmitOrder,
} from '../../interfaces/types';

function* watchGetSalesHitSaga() {
  while (true) {
    yield take(FETCH_SALES_HIT);
    yield fork(fetchSalesHitSaga);
  }
}

function* watchGetCatalogSaga() {
  while (true) {
    const action: ActionTypeFetchCatalog = yield take(FETCH_CATALOG);
    yield fork(fetchCatalogSaga, action.payload);
  }
}

function* watchGetCertainShoesSaga() {
  while (true) {
    const action: ActionTypeFetchCertainShoes = yield take(FETCH_CERTAIN_SHOES);
    yield fork(fetchCertainShoesSaga, action.payload);
  }
}

function* watchLoadElseSaga() {
  while (true) {
    const action: ActionTypeLoadElse = yield take(LOAD_ELSE);
    yield fork(fetchElseShoesSaga, action.payload);
  }
}

function* watchGetCardDetailsSaga() {
  while (true) {
    const action: ActionTypeFetchCardDetails = yield take(FETCH_CARD_DETAILS);
    yield fork(fetchCardDetailsSaga, action.payload);
  }
}

function* watchSubmitFormSaga() {
  while (true) {
    const action: ActionTypeSubmitOrder = yield take(SUBMIT_ORDER);
    yield fork(sendFormSaga, action.payload);
  }
}

function* watchCatalogSearchSaga() {
  yield debounce(300, filterChangeSearchAction, fetchSearchShoesSaga);
}

export default function* saga() {
  yield spawn(watchGetSalesHitSaga);
  yield spawn(watchGetCatalogSaga);
  yield spawn(watchGetCertainShoesSaga);
  yield spawn(watchLoadElseSaga);
  yield spawn(watchCatalogSearchSaga);
  yield spawn(watchGetCardDetailsSaga);
  yield spawn(watchSubmitFormSaga);
}
