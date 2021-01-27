import { SET_ERROR } from '../actions/actions';
import { ActionTypeSetError } from '../../interfaces/types';

export interface InitialStateInterface {
  error: null | string
}

const initialState: InitialStateInterface = {
  error: null,
};

export default function errorReducer(
  state = initialState,
  action: ActionTypeSetError,
): InitialStateInterface {
  switch (action.type) {
    case SET_ERROR:
      return {
        error: action.payload.error,
      };
    default:
      return state;
  }
}
