export const CLOSE_ERROR = 'CLOSE_ERROR';
export const SET_ERROR = 'SET_ERROR';

export type ActionTypeSetError = {
  type: typeof SET_ERROR;
  payload: {
    error: string;
  };
};
export type ActionTypeCloseError = {
  type: typeof CLOSE_ERROR;
};
