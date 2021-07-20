import { ActionTypeCloseError, CLOSE_ERROR } from './error_types';

export function closeError(): ActionTypeCloseError {
  return {
    type: CLOSE_ERROR,
  };
}
