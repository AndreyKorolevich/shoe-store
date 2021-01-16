import { take, fork, spawn, put } from 'redux-saga/effects'
import { FETCH_CATALOG, FETCH_CERTAIN_SHOES, FETCH_SALES_HIT, LOAD_ELSE } from '../actions/actions'
import {
  fetchSalesHitSaga,
  fetchCatalogSaga,
  fetchCertainShoesSaga,
  fetchElseShoesSaga,
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

export default function* saga() {
  yield spawn(watchGetSalesHitSaga)
  yield spawn(watchGetCatalogSaga)
  yield spawn(watchGetCertainShoesSaga)
  yield spawn(watchLoadElseSaga)
}
