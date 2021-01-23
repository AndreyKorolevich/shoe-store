import { take, fork, spawn, debounce, put } from 'redux-saga/effects'
import { filterChangeSearchAction } from '../../utils/filter_change_search_action'
import {
  FETCH_CARD_DETAILS,
  FETCH_CATALOG,
  FETCH_CERTAIN_SHOES,
  FETCH_SALES_HIT,
  LOAD_ELSE,
  SEARCH_SHOES,
} from '../actions/actions'
import {
  fetchSalesHitSaga,
  fetchCatalogSaga,
  fetchCertainShoesSaga,
  fetchElseShoesSaga,
  fetchSearchShoesSaga, fetchCardDetailsSaga,
} from './saga'

function* watchGetSalesHitSaga() {
  while (true) {
    yield take(FETCH_SALES_HIT)
    yield fork(fetchSalesHitSaga)
  }
}

function* watchGetCatalogSaga() {
  while (true) {
    yield take(FETCH_CATALOG)
    yield fork(fetchCatalogSaga)
  }
}

function* watchGetCertainShoesSaga() {
  while (true) {
    const action = yield take(FETCH_CERTAIN_SHOES)
    yield fork(fetchCertainShoesSaga, action)
  }
}

function* watchLoadElseSaga() {
  while (true) {
    const action = yield take(LOAD_ELSE)
    yield fork(fetchElseShoesSaga, action)
  }
}

function* watchGetCardDetailsSaga() {
  while (true) {
    const action = yield take(FETCH_CARD_DETAILS)
    yield fork(fetchCardDetailsSaga, action)
  }
}

function* watchCatalogSearchSaga() {
  yield debounce(300, filterChangeSearchAction, fetchSearchShoesSaga)
}

export default function* saga() {
  yield spawn(watchGetSalesHitSaga)
  yield spawn(watchGetCatalogSaga)
  yield spawn(watchGetCertainShoesSaga)
  yield spawn(watchLoadElseSaga)
  yield spawn(watchCatalogSearchSaga)
  yield spawn(watchGetCardDetailsSaga)
}
