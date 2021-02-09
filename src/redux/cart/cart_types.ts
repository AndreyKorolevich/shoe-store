import { InterfaceOrder, SelectCardInterface } from '../../interfaces/interface';

export const CLEANING_CART = 'CLEANING_CART';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const SET_CART_FROM_LOCALSTORAGE = 'SET_CART_FROM_LOCALSTORAGE';
export const SHOW_SUCCESS_ORDER_SHOES = 'SHOW_SUCCESS_ORDER_SHOES';
export const SUBMIT_ORDER = 'SUBMIT_ORDER';

export type ActionTypeDeleteProduct = {
  type: typeof DELETE_PRODUCT;
  payload: {
    id: number;
  };
};
export type ActionTypeCleaningCart = {
  type: typeof CLEANING_CART;
};
export type ActionTypeShowSuccess = {
  type: typeof SHOW_SUCCESS_ORDER_SHOES;
};
export type ActionTypeSetCart = {
  type: typeof SET_CART_FROM_LOCALSTORAGE;
  payload: {
    cart: Array<SelectCardInterface>;
  };
};
export type ActionTypeSubmitOrder = {
  type: typeof SUBMIT_ORDER;
  payload: {
    owner: {
      phone: string;
      address: string;
    };
    items: Array<InterfaceOrder>;
  };
};
export const LOADING_CART_SUBMIT = 'LOADING_CART_SUBMIT';
