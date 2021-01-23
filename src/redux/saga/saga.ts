import { put, call } from 'redux-saga/effects'
import api from '../../API/api'
import {
  SET_SALES_HIT,
  SET_CATALOG,
  SET_ERROR,
  SET_CERTAIN_CATALOG,
  SET_SELECTED_CATEGORY,
  SET_ELSE_SHOES,
  SET_LAST_SHOES,
  SET_LOADING_ADDITIONAL_SHOES,
  CHANGE_LOADING_CATALOG,
  CHANGE_LOADING_HIT, CHANGE_LOADING_CARD_DETAILS, SET_CARD_DETAILS,
} from '../actions/actions'

export function* fetchSalesHitSaga() {
  try {
    yield put({
      type: CHANGE_LOADING_HIT,
    })
    const hit = yield call(api.fetchSalesHitApi)
    yield put({
      type: SET_SALES_HIT,
      payload: {
        hit,
      },
    })
    yield put({
      type: CHANGE_LOADING_HIT,
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
    yield put({
      type: CHANGE_LOADING_CATALOG,
    })
    const catalog = yield call(api.fetchCatalogApi)
    const categories = yield call(api.fetchCategoriesApi)
    yield put({
      type: SET_CATALOG,
      payload: {
        catalog,
        categories,
      },
    })
    yield put({
      type: CHANGE_LOADING_CATALOG,
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
    const shoes = yield call(api.fetchCertainShoesApi, action.payload.id, action.payload.search)
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

export function* fetchSearchShoesSaga(action) {
  try {
    yield put({
      type: CHANGE_LOADING_CATALOG,
    })
    const data = yield call(
      api.searchSkillsApi,
      action.payload.search,
      action.payload.selectCategory
    )
    yield put({
      type: SET_CERTAIN_CATALOG,
      payload: {
        catalog: data,
      },
    })
    yield put({
      type: CHANGE_LOADING_CATALOG,
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

export function* fetchCardDetailsSaga(action) {
  try {
    yield put({
      type: CHANGE_LOADING_CARD_DETAILS,
    })
    const data = yield call(
      api.fetchCardDetailsApi,
      action.payload.id,
    )
    yield put({
      type: SET_CARD_DETAILS,
      payload: {
        openCard: data,
      },
    })
    yield put({
      type: CHANGE_LOADING_CARD_DETAILS,
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
