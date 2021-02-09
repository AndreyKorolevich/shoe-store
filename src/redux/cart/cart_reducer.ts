import { ActionTypeAddShoesCart, ADD_SHOES_CART } from '../card/card_types';
import { SelectCardInterface } from '../../interfaces/interface';
import {
  ActionTypeCleaningCart,
  ActionTypeDeleteProduct,
  ActionTypeSetCart,
  ActionTypeShowSuccess,
  CLEANING_CART,
  DELETE_PRODUCT,
  SET_CART_FROM_LOCALSTORAGE,
  SHOW_SUCCESS_ORDER_SHOES,
} from './cart_types';

export interface InitialStateInterface {
  selectShoes: [] | Array<SelectCardInterface>;
  isLoadingSentForm: boolean;
  isShowSuccessOrderShoes: boolean;
}

const initialState: InitialStateInterface = {
  selectShoes: [],
  isLoadingSentForm: false,
  isShowSuccessOrderShoes: false,
};

type ActionTypes =
  | ActionTypeAddShoesCart
  | ActionTypeDeleteProduct
  | ActionTypeCleaningCart
  | ActionTypeSetCart
  | ActionTypeShowSuccess;

export default function cartReducer(state = initialState, action: ActionTypes): InitialStateInterface {
  switch (action.type) {
    case ADD_SHOES_CART: {
      const index = state.selectShoes.findIndex(e => e.id === action.payload.id);
      let newSelectShoes;
      if (index === -1) {
        newSelectShoes = [...state.selectShoes, action.payload];
        localStorage.setItem('cart', JSON.stringify(newSelectShoes));
      } else {
        newSelectShoes = [...state.selectShoes];
        newSelectShoes[index].count += action.payload.count;
        localStorage.setItem('cart', JSON.stringify(newSelectShoes));
      }
      return {
        ...state,
        selectShoes: newSelectShoes,
      };
    }
    case DELETE_PRODUCT: {
      const newSelectShoes = state.selectShoes.filter(e => e.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(newSelectShoes));
      return {
        ...state,
        selectShoes: newSelectShoes,
      };
    }
    case CLEANING_CART:
      localStorage.removeItem('cart');
      return {
        ...state,
        selectShoes: [],
      };
    case SET_CART_FROM_LOCALSTORAGE:
      return {
        ...state,
        selectShoes: action.payload.cart,
      };
    case SHOW_SUCCESS_ORDER_SHOES:
      return {
        ...state,
        isShowSuccessOrderShoes: !state.isShowSuccessOrderShoes,
      };
    default:
      return state;
  }
}
