import { CardDetailInterface } from '../../interfaces/interface';
import {
  ActionTypeAddShoesCart,
  ActionTypeCardDetails,
  ActionTypeChangeCount,
  ActionTypeChangeSize,
  ActionTypeLoadingCardDetails,
  ADD_SHOES_CART,
  CHANGE_COUNT,
  CHANGE_LOADING_CARD_DETAILS,
  CHANGE_SIZE,
  SET_CARD_DETAILS,
} from './card_types';

export interface InitialStateInterface {
  openCard: null | CardDetailInterface;
  isLoadingCardDetails: boolean;
  count: number;
  selectedSize: string;
}

const initialState: InitialStateInterface = {
  openCard: null,
  isLoadingCardDetails: false,
  count: 1,
  selectedSize: '',
};

type ActionTypes =
  | ActionTypeCardDetails
  | ActionTypeLoadingCardDetails
  | ActionTypeChangeCount
  | ActionTypeChangeSize
  | ActionTypeAddShoesCart;

export default function cardReducer(state = initialState, action: ActionTypes): InitialStateInterface {
  switch (action.type) {
    case SET_CARD_DETAILS:
      return {
        ...state,
        openCard: action.payload.openCard,
      };
    case CHANGE_LOADING_CARD_DETAILS:
      return {
        ...state,
        isLoadingCardDetails: !state.isLoadingCardDetails,
      };
    case CHANGE_COUNT:
      return {
        ...state,
        count: action.payload.count,
      };
    case CHANGE_SIZE:
      return {
        ...state,
        selectedSize: action.payload.size,
      };
    case ADD_SHOES_CART:
      return {
        ...state,
        openCard: null,
        count: 1,
        selectedSize: '',
      };
    default:
      return state;
  }
}
