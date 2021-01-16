import { put, call } from "redux-saga/effects";
import api from "../../API/api";
import { SET_SALES_HIT } from "../actions/actions";

export function* fetchSalesHitSaga() {
  const hit = yield call(api.fetchSalesHitApi);
  yield put({
    type: SET_SALES_HIT,
    payload: {
      hit,
    },
  });
}

export function* fetchCatalogSaga() {
  const hit = yield call(api.fetchCatalogApi);
  yield put({
    type: SET_SALES_HIT,
    payload: {
      hit,
    },
  });
}
