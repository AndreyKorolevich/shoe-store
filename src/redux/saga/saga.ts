import { put, call } from 'redux-saga/effects'
import api from '../../API/api'
import {
  SET_SALES_HIT,
  SET_CATALOG,
  SET_ERROR,
  SET_CERTAIN_CATALOG,
  SET_SELECTED_CATEGORY,
  SET_ELSE_SHOES,
  SET_LAST_SHOES, SET_LOADING_ADDITIONAL_SHOES,
} from '../actions/actions'

export function* fetchSalesHitSaga() {
  try {
    const hit = yield call(api.fetchSalesHitApi)
    yield put({
      type: SET_SALES_HIT,
      payload: {
        hit,
      },
    })
  } catch (e) {
    yield put({
      type: SET_ERROR,
      payload: {
        error: e.toString(),
      },
    })
  }
}

export function* fetchCatalogSaga() {
  try {
    const catalog = yield call(api.fetchCatalogApi)
    const categories = yield call(api.fetchCategoriesApi)
    yield put({
      type: SET_CATALOG,
      payload: {
        catalog,
        categories,
      },
    })
  } catch (e) {
    yield put({
      type: SET_ERROR,
      payload: {
        error: e.toString(),
      },
    })
  }
}

export function* fetchCertainShoesSaga(action) {
  try {
    yield put({
      type: SET_SELECTED_CATEGORY,
      payload: {
        id: action.payload.id,
      },
    })
    const shoes = yield call(api.fetchCertainShoesApi, action.payload.id)
    yield put({
      type: SET_CERTAIN_CATALOG,
      payload: {
        catalog: shoes,
      },
    })
  } catch (e) {
    yield put({
      type: SET_ERROR,
      payload: {
        error: e.toString(),
      },
    })
  }
}

export function* fetchElseShoesSaga(action) {
  try {
    yield put({
      type: SET_LOADING_ADDITIONAL_SHOES,
    })
    const shoes = yield call(
      api.fetchElseShoesApi,
      action.payload.selectCategory,
      action.payload.offset
    )
    if (shoes.length < 6) {
      yield put({
        type: SET_LAST_SHOES,
        payload: {
          shoes,
        },
      })
    } else {
      yield put({
        type: SET_ELSE_SHOES,
        payload: {
          shoes,
        },
      })
    }
    yield put({
      type: SET_LOADING_ADDITIONAL_SHOES,
    })
  } catch (e) {
    yield put({
      type: SET_ERROR,
      payload: {
        error: e.toString(),
      },
    })
  }
}
