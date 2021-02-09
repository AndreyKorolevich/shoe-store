import { call, put } from 'redux-saga/effects';
import Api from '../../API/api';
import { CLEANING_CART, LOADING_CART_SUBMIT, SHOW_SUCCESS_ORDER_SHOES } from './cart_types';
import { SET_ERROR } from '../error/error_types';

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
    yield put({
      type: SHOW_SUCCESS_ORDER_SHOES,
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
