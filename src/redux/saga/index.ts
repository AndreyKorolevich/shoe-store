import { take, fork, spawn, debounce } from 'redux-saga/effects';
import { filterChangeSearchAction } from '../../utils/filter_change_search_action';
import { fetchCardDetailsSaga } from '../card/card_sagas';
import {
  fetchCatalogSaga,
  fetchCertainShoesSaga,
  fetchElseShoesSaga,
  fetchSalesHitSaga,
  fetchSearchShoesSaga,
} from '../catalog/catalog_sagas';
import { ActionTypeSubmitOrder, SUBMIT_ORDER } from '../cart/cart_types';
import { sendFormSaga } from '../cart/cart_sagas';
import { ActionTypeFetchCardDetails, FETCH_CARD_DETAILS } from '../card/card_types';
import {
  ActionTypeFetchCatalog,
  ActionTypeFetchCertainShoes,
  ActionTypeLoadElse,
  FETCH_CATALOG,
  FETCH_CERTAIN_SHOES,
  FETCH_SALES_HIT,
  LOAD_ELSE,
} from '../catalog/catalog_types';

function* watchGetSalesHitSaga() {
  while (true) {
    yield take(FETCH_SALES_HIT);
    yield fork(fetchSalesHitSaga);
  }
}

function* watchGetCatalogSaga() {
  while (true) {
    yield take(FETCH_CATALOG);
    yield fork(fetchCatalogSaga);
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
