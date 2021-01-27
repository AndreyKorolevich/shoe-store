import { StateType } from '../store';

export const getError = (state: StateType) => state.error.error;
