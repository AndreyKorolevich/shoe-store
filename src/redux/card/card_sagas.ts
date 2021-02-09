import { call, put } from 'redux-saga/effects';
import { CHANGE_LOADING_CARD_DETAILS, SET_CARD_DETAILS } from './card_types';
import Api from '../../API/api';
import { SET_ERROR } from '../error/error_types';

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
