import {
  ActionTypeChangeCatalogSearch,
  ActionTypeFetchCatalog,
  ActionTypeFetchCertainShoes,
  ActionTypeFetchSalesHit,
  ActionTypeLoadElse,
  ActionTypeSearchShoes,
  CHANGE_CATALOG_SEARCH,
  FETCH_CATALOG,
  FETCH_CERTAIN_SHOES,
  FETCH_SALES_HIT,
  LOAD_ELSE,
  SEARCH_SHOES,
} from './catalog_types';

export function changeCatalogShoes(search: string): ActionTypeChangeCatalogSearch {
  return {
    type: CHANGE_CATALOG_SEARCH,
    payload: {
      search,
    },
  };
}

export function fetchCatalog(selectCategory: number): ActionTypeFetchCatalog {
  return {
    type: FETCH_CATALOG,
    payload: {
      selectCategory,
    },
  };
}

export function loadAdditionalShoes(selectCategory: number, offset: number): ActionTypeLoadElse {
  return {
    type: LOAD_ELSE,
    payload: {
      selectCategory,
      offset,
    },
  };
}

export function fetchCertainShoes(id: number, search: string): ActionTypeFetchCertainShoes {
  return {
    type: FETCH_CERTAIN_SHOES,
    payload: {
      id,
      search,
    },
  };
}

export function searchShoes(selectCategory: number, value: string): ActionTypeSearchShoes {
  return {
    type: SEARCH_SHOES,
    payload: {
      search: value,
      selectCategory,
    },
  };
}

export function fetchSalesHit(): ActionTypeFetchSalesHit {
  return {
    type: FETCH_SALES_HIT,
  };
}
