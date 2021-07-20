import { StateType } from '../store';

export const getCardDetails = (state: StateType) => state.card.openCard;
export const getLoadingCardDetails = (state: StateType) => state.card.isLoadingCardDetails;
export const getCount = (state: StateType) => state.card.count;
export const getSelectedSize = (state: StateType) => state.card.selectedSize;
