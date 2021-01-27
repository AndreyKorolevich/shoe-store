import { StateType } from '../store';

export const getSelectShoes = (state: StateType) => state.cart.selectShoes;
export const getLoadingSendForm = (state: StateType) => state.cart.isLoadingSentForm;
