import { put, call } from 'redux-saga/effects';
import Api from '../../API/api';
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
  CHANGE_LOADING_HIT,
  CHANGE_LOADING_CARD_DETAILS,
  SET_CARD_DETAILS,
  LOADING_CART_SUBMIT,
  CLEANING_CART,
} from '../actions/actions';

export function* fetchSalesHitSaga() {
  try {
    yield put({
      type: CHANGE_LOADING_HIT,
    });
    const hit = yield call(Api.fetchSalesHitApi);
    yield put({
      type: SET_SALES_HIT,
      payload: {
        hit,
      },
    });
    yield put({
      type: CHANGE_LOADING_HIT,
    });
  } catch (e) {
    yield put({
      type: SET_ERROR,
      payload: {
        error: e.toString(),
      },
    });
  }
}

export function* fetchCatalogSaga(payload) {
  try {
    yield put({
      type: CHANGE_LOADING_CATALOG,
    });
    const catalog = yield call(Api.fetchCatalogApi, payload.selectCategory);
    const categories = yield call(Api.fetchCategoriesApi);
    yield put({
      type: SET_CATALOG,
      payload: {
        catalog,
        categories,
      },
    });
    yield put({
      type: CHANGE_LOADING_CATALOG,
    });
  } catch (e) {
    yield put({
      type: SET_ERROR,
      payload: {
        error: e.toString(),
      },
    });
  }
}

export function* fetchCertainShoesSaga(payload) {
  try {
    yield put({
      type: SET_SELECTED_CATEGORY,
      payload: {
        id: payload.id,
      },
    });
    const shoes = yield call(Api.fetchCertainShoesApi, payload.id, payload.search);
    yield put({
      type: SET_CERTAIN_CATALOG,
      payload: {
        catalog: shoes,
      },
    });
  } catch (e) {
    yield put({
      type: SET_ERROR,
      payload: {
        error: e.toString(),
      },
    });
  }
}

export function* fetchElseShoesSaga(payload) {
  try {
    yield put({
      type: SET_LOADING_ADDITIONAL_SHOES,
    });
    const shoes = yield call(Api.fetchElseShoesApi, payload.selectCategory, payload.offset);
    if (shoes.length < 6) {
      yield put({
        type: SET_LAST_SHOES,
        payload: {
          shoes,
        },
      });
    } else {
      yield put({
        type: SET_ELSE_SHOES,
        payload: {
          shoes,
        },
      });
    }
    yield put({
      type: SET_LOADING_ADDITIONAL_SHOES,
    });
  } catch (e) {
    yield put({
      type: SET_ERROR,
      payload: {
        error: e.toString(),
      },
    });
  }
}

export function* fetchSearchShoesSaga(action) {
  try {
    yield put({
      type: CHANGE_LOADING_CATALOG,
    });
    const data = yield call(Api.searchSkillsApi, action.payload.search, action.payload.selectCategory);
    yield put({
      type: SET_CERTAIN_CATALOG,
      payload: {
        catalog: data,
      },
    });
    yield put({
      type: CHANGE_LOADING_CATALOG,
    });
  } catch (e) {
    yield put({
      type: SET_ERROR,
      payload: {
        error: e.toString(),
      },
    });
  }
}

export function* fetchCardDetailsSaga(payload) {
  try {
    yield put({
      type: CHANGE_LOADING_CARD_DETAILS,
    });
    const data = yield call(Api.fetchCardDetailsApi, payload.id);
    yield put({
      type: SET_CARD_DETAILS,
      payload: {
        openCard: data,
      },
    });
    yield put({
      type: CHANGE_LOADING_CARD_DETAILS,
    });
  } catch (e) {
    yield put({
      type: SET_ERROR,
      payload: {
        error: e.toString(),
      },
    });
  }
}

export function* sendFormSaga(payload) {
  try {
    yield put({
      type: LOADING_CART_SUBMIT,
    });
    yield call(Api.sendFormApi, payload);

    yield put({
      type: LOADING_CART_SUBMIT,
    });
    yield put({
      type: CLEANING_CART,
    });
  } catch (e) {
    yield put({
      type: SET_ERROR,
      payload: {
        error: e.toString(),
      },
    });
  }
}
