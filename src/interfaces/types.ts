import { CardDetailInterface, InterfaceCard, InterfaceCategory } from './interface';
import {
  ADD_SHOES_CART,
  CHANGE_CATALOG_SEARCH,
  CHANGE_COUNT,
  CHANGE_LOADING_CARD_DETAILS,
  CHANGE_LOADING_CATALOG,
  CHANGE_LOADING_HIT,
  CHANGE_SIZE,
  CLEANING_CART,
  DELETE_PRODUCT,
  FETCH_CARD_DETAILS,
  FETCH_CATALOG,
  FETCH_CERTAIN_SHOES,
  LOAD_ELSE,
  SET_CARD_DETAILS,
  SET_CATALOG,
  SET_CERTAIN_CATALOG,
  SET_ELSE_SHOES,
  SET_ERROR,
  SET_LAST_SHOES,
  SET_LOADING_ADDITIONAL_SHOES,
  SET_SALES_HIT,
  SET_SELECTED_CATEGORY,
  SUBMIT_ORDER,
} from '../redux/actions/actions';

export type ActionTypeCardDetails = {
  type: typeof SET_CARD_DETAILS
  payload: {
    openCard: CardDetailInterface | null
  }
};
export type ActionTypeLoadingCardDetails = {
  type: typeof CHANGE_LOADING_CARD_DETAILS
  payload: {
    isLoadingCardDetails: boolean
  }
};
export type ActionTypeChangeCount = {
  type: typeof CHANGE_COUNT
  payload: {
    count: number
  }
};
export type ActionTypeChangeSize = {
  type: typeof CHANGE_SIZE
  payload: {
    size: string
  }
};
export type ActionTypeAddShoesCart = {
  type: typeof ADD_SHOES_CART
  payload: {
    id: number
    count: number
  }
};
export type ActionTypeDeleteProduct = {
  type: typeof DELETE_PRODUCT
  payload: {
    id: number
  }
};
export type ActionTypeCleaningCart = {
  type: typeof CLEANING_CART
};
export type ActionTypeHit = {
  type: typeof SET_SALES_HIT
  payload: {
    hit: Array<InterfaceCard> | Array<never>
  }
};
export type ActionTypeSetCatalog = {
  type: typeof SET_CATALOG
  payload: {
    catalog: Array<InterfaceCard>
    categories: Array<InterfaceCategory>
  }
};
export type ActionTypeSetCertainCatalog = {
  type: typeof SET_CERTAIN_CATALOG
  payload: {
    catalog: Array<InterfaceCard>
  }
};
export type ActionTypeSelectCategory = {
  type: typeof SET_SELECTED_CATEGORY
  payload: {
    id: number
  }
};
export type ActionTypeSetElseShoes = {
  type: typeof SET_ELSE_SHOES
  payload: {
    shoes: Array<InterfaceCard>
  }
};
export type ActionTypeSetLastShoes = {
  type: typeof SET_LAST_SHOES
  payload: {
    shoes: Array<InterfaceCard>
  }
};
export type ActionTypeSetLoadingAdditionalShoes = {
  type: typeof SET_LOADING_ADDITIONAL_SHOES
  payload: {
    isLoadingAdditionalShoes: boolean
  }
};
export type ActionTypeSetLoadingHit = {
  type: typeof CHANGE_LOADING_HIT
  payload: {
    isLoadingHit: boolean
  }
};
export type ActionTypeSetLoadingCatalog = {
  type: typeof CHANGE_LOADING_CATALOG
  payload: {
    isLoadingCatalog: boolean
  }
};
export type ActionTypeChangeCatalogSearch = {
  type: typeof CHANGE_CATALOG_SEARCH
  payload: {
    search: string
  }
};
export type ActionTypeSetError = {
  type: typeof SET_ERROR
  payload: {
    error: string
  }
};
export type ActionTypeFetchCatalog = {
  type: typeof FETCH_CATALOG
  payload: {
    selectCategory: number
  }
};
export type ActionTypeFetchCertainShoes = {
  type: typeof FETCH_CERTAIN_SHOES
  payload: {
    id: number
    search: string
  }
};
export type ActionTypeLoadElse = {
  type: typeof LOAD_ELSE
  payload: {
    selectCategory: number
    offset: number
  }
};
export type ActionTypeFetchCardDetails = {
  type: typeof FETCH_CARD_DETAILS
  payload: {
    id: number
  }
};
export type ActionTypeSubmitOrder = {
  type: typeof SUBMIT_ORDER
  payload: {
    id: number
  }
};
