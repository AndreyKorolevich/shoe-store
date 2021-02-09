import { CardDetailInterface } from '../../interfaces/interface';

export const ADD_SHOES_CART = 'ADD_SHOES_CART';
export const CHANGE_COUNT = 'CHANGE_COUNT';
export const CHANGE_LOADING_CARD_DETAILS = 'CHANGE_LOADING_CARD_DETAILS';
export const CHANGE_SIZE = 'CHANGE_SIZE';
export const FETCH_CARD_DETAILS = 'FETCH_CARD_DETAILS';
export const SET_CARD_DETAILS = 'SET_CARD_DETAILS';
export type ActionTypeAddShoesCart = {
  type: typeof ADD_SHOES_CART;
  payload: {
    id: number;
    count: number;
    selectedSize: string;
  };
};
export type ActionTypeChangeCount = {
  type: typeof CHANGE_COUNT;
  payload: {
    count: number;
  };
};
export type ActionTypeCardDetails = {
  type: typeof SET_CARD_DETAILS;
  payload: {
    openCard: CardDetailInterface | null;
  };
};
export type ActionTypeLoadingCardDetails = {
  type: typeof CHANGE_LOADING_CARD_DETAILS;
  payload: {
    isLoadingCardDetails: boolean;
  };
};
export type ActionTypeChangeSize = {
  type: typeof CHANGE_SIZE;
  payload: {
    size: string;
  };
};
export type ActionTypeFetchCardDetails = {
  type: typeof FETCH_CARD_DETAILS;
  payload: {
    id: number;
  };
};
