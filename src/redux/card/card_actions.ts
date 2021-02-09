import { CardDetailInterface } from '../../interfaces/interface';
import {
  ActionTypeAddShoesCart,
  ActionTypeChangeCount,
  ActionTypeChangeSize,
  ActionTypeFetchCardDetails,
  ADD_SHOES_CART,
  CHANGE_COUNT,
  CHANGE_SIZE,
  FETCH_CARD_DETAILS,
} from './card_types';

export function addShoesCart(
  openCard: CardDetailInterface,
  count: number,
  selectedSize: string
): ActionTypeAddShoesCart {
  return {
    type: ADD_SHOES_CART,
    payload: {
      ...openCard,
      count,
      selectedSize,
    },
  };
}

export function changeCount(count: number): ActionTypeChangeCount {
  return {
    type: CHANGE_COUNT,
    payload: {
      count,
    },
  };
}

export function changeSize(size: string): ActionTypeChangeSize {
  return {
    type: CHANGE_SIZE,
    payload: {
      size,
    },
  };
}

export function fetchCardDetails(id: number): ActionTypeFetchCardDetails {
  return {
    type: FETCH_CARD_DETAILS,
    payload: {
      id,
    },
  };
}
