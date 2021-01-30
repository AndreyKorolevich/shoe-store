import { CLOSE_ERROR, SET_ERROR } from '../actions/actions';
import { ActionTypeCloseError, ActionTypeSetError } from '../../interfaces/types';

export interface InitialStateInterface {
  error: boolean;
}

const initialState: InitialStateInterface = {
  error: false,
};

type ActionType = ActionTypeSetError | ActionTypeCloseError;

export default function errorReducer(state = initialState, action: ActionType): InitialStateInterface {
  switch (action.type) {
    case SET_ERROR:
      return {
        error: true,
      };
    case CLOSE_ERROR:
      return {
        error: false,
      };
    default:
      return state;
  }
}
