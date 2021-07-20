import { InterfaceCard, InterfaceCategory } from '../../interfaces/interface';

export const CHANGE_CATALOG_SEARCH = 'CHANGE_CATALOG_SEARCH';
export const CHANGE_LOADING_CATALOG = 'CHANGE_LOADING_CATALOG';
export const CHANGE_LOADING_HIT = 'CHANGE_LOADING_HIT';
export const FETCH_CATALOG = 'FETCH_CATALOG';
export const FETCH_CERTAIN_SHOES = 'FETCH_CERTAIN_SHOES';
export const FETCH_SALES_HIT = 'FETCH_SALES_HIT';
export const LOAD_ELSE = 'LOAD_ELSE';
export const SEARCH_SHOES = 'SEARCH_SHOES';
export const SET_CATALOG = 'SET_CATALOG';
export const SET_CERTAIN_CATALOG = 'SET_CERTAIN_CATALOG';
export const SET_ELSE_SHOES = 'SET_ELSE_SHOES';
export const SET_LAST_SHOES = 'SET_LAST_SHOES';
export const SET_LOADING_ADDITIONAL_SHOES = 'SET_LOADING_ADDITIONAL_SHOES';
export const SET_SALES_HIT = 'SET_SALES_HIT';
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

export type ActionTypeSetCatalog = {
  type: typeof SET_CATALOG;
  payload: {
    categories: Array<InterfaceCategory>;
  };
};
export type ActionTypeSetCertainCatalog = {
  type: typeof SET_CERTAIN_CATALOG;
  payload: {
    catalog: Array<InterfaceCard>;
  };
};
export type ActionTypeSetLoadingAdditionalShoes = {
  type: typeof SET_LOADING_ADDITIONAL_SHOES;
  payload: {
    isLoadingAdditionalShoes: boolean;
  };
};
export type ActionTypeChangeCatalogSearch = {
  type: typeof CHANGE_CATALOG_SEARCH;
  payload: {
    search: string;
  };
};
export type ActionTypeSetLoadingHit = {
  type: typeof CHANGE_LOADING_HIT;
  payload: {
    isLoadingHit: boolean;
  };
};
export type ActionTypeSetLoadingCatalog = {
  type: typeof CHANGE_LOADING_CATALOG;
  payload: {
    isLoadingCatalog: boolean;
  };
};
export type ActionTypeSetElseShoes = {
  type: typeof SET_ELSE_SHOES;
  payload: {
    shoes: Array<InterfaceCard>;
  };
};
export type ActionTypeSetLastShoes = {
  type: typeof SET_LAST_SHOES;
  payload: {
    shoes: Array<InterfaceCard>;
  };
};
export type ActionTypeHit = {
  type: typeof SET_SALES_HIT;
  payload: {
    hit: Array<InterfaceCard> | Array<never>;
  };
};
export type ActionTypeSelectCategory = {
  type: typeof SET_SELECTED_CATEGORY;
  payload: {
    id: number;
  };
};
export type ActionTypeFetchCatalog = {
  type: typeof FETCH_CATALOG;
  payload: {
    selectCategory: number;
  };
};
export type ActionTypeFetchCertainShoes = {
  type: typeof FETCH_CERTAIN_SHOES;
  payload: {
    id: number;
    search: string;
  };
};
export type ActionTypeLoadElse = {
  type: typeof LOAD_ELSE;
  payload: {
    selectCategory: number;
    offset: number;
  };
};
export type ActionTypeFetchSalesHit = {
  type: typeof FETCH_SALES_HIT;
};
export type ActionTypeSearchShoes = {
  type: typeof SEARCH_SHOES;
  payload: {
    search: string;
    selectCategory: number;
  };
};
