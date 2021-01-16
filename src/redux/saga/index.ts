import { take, fork, spawn } from "redux-saga/effects";
import { FETCH_SALES_HIT } from "../actions/actions";
import { fetchSalesHitSaga } from "./saga";

function* watchcGetSalesHitSaga() {
  while (true) {
    yield take(FETCH_SALES_HIT);
    yield fork(fetchSalesHitSaga);
  }
}

export default function* saga() {
  yield spawn(watchcGetSalesHitSaga);
}
