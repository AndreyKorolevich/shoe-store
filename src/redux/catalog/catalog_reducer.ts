import { InterfaceCard, InterfaceCategory } from '../../interfaces/interface';
import { offset } from '../../constants/constants';
import {
  ActionTypeChangeCatalogSearch,
  ActionTypeHit,
  ActionTypeSelectCategory,
  ActionTypeSetCatalog,
  ActionTypeSetCertainCatalog,
  ActionTypeSetElseShoes,
  ActionTypeSetLastShoes,
  ActionTypeSetLoadingAdditionalShoes,
  ActionTypeSetLoadingCatalog,
  ActionTypeSetLoadingHit,
  CHANGE_CATALOG_SEARCH,
  CHANGE_LOADING_CATALOG,
  CHANGE_LOADING_HIT,
  SET_CATALOG,
  SET_CERTAIN_CATALOG,
  SET_ELSE_SHOES,
  SET_LAST_SHOES,
  SET_LOADING_ADDITIONAL_SHOES,
  SET_SALES_HIT,
  SET_SELECTED_CATEGORY,
} from './catalog_types';

export interface InitialStateInterface {
  isLoadingHit: boolean;
  isLoadingCatalog: boolean;
  catalog: Array<InterfaceCard> | Array<never>;
  salesHit: Array<InterfaceCard> | Array<never>;
  categories: Array<InterfaceCategory> | Array<never>;
  selectCategory: number;
  offset: number;
  showLoadElse: boolean;
  isLoadingAdditionalShoes: boolean;
  search: string;
}

const initialState: InitialStateInterface = {
  isLoadingHit: false,
  isLoadingCatalog: false,
  catalog: [],
  salesHit: [],
  categories: [],
  selectCategory: 0,
  offset,
  showLoadElse: true,
  isLoadingAdditionalShoes: false,
  search: '',
};

type ActionTypes =
  | ActionTypeHit
  | ActionTypeSetCatalog
  | ActionTypeSetCertainCatalog
  | ActionTypeSelectCategory
  | ActionTypeSetElseShoes
  | ActionTypeSetLastShoes
  | ActionTypeSetLoadingAdditionalShoes
  | ActionTypeSetLoadingCatalog
  | ActionTypeChangeCatalogSearch
  | ActionTypeSetLoadingHit;

export default function catalogReduser(state = initialState, action: ActionTypes): InitialStateInterface {
  switch (action.type) {
    case SET_SALES_HIT:
      return {
        ...state,
        salesHit: action.payload.hit,
      };
    case SET_CATALOG:
      return {
        ...state,
        categories: action.payload.categories,
      };
    case SET_CERTAIN_CATALOG:
      return {
        ...state,
        catalog: action.payload.catalog,
      };
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectCategory: action.payload.id,
        showLoadElse: true,
      };
    case SET_ELSE_SHOES:
      return {
        ...state,
        catalog: [...state.catalog, ...action.payload.shoes],
        offset: state.offset + offset,
      };
    case SET_LAST_SHOES:
      return {
        ...state,
        catalog: [...state.catalog, ...action.payload.shoes],
        offset,
        showLoadElse: false,
      };
    case SET_LOADING_ADDITIONAL_SHOES:
      return {
        ...state,
        isLoadingAdditionalShoes: !state.isLoadingAdditionalShoes,
      };
    case CHANGE_LOADING_HIT:
      return {
        ...state,
        isLoadingHit: !state.isLoadingHit,
      };
    case CHANGE_LOADING_CATALOG:
      return {
        ...state,
        isLoadingCatalog: !state.isLoadingCatalog,
      };
    case CHANGE_CATALOG_SEARCH:
      return {
        ...state,
        search: action.payload.search,
      };
    default:
      return state;
  }
}
