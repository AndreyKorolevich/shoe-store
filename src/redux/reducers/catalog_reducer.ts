import {SET_CATALOG, SET_SALES_HIT} from "../actions/actions";
import { InterfaceCard } from "../interfaces/interface";

export interface InitialStateInterface {
  isLoadingHit: boolean;
  isLoadingCatalog: boolean;
  catalog: Array<InterfaceCard> | Array<never>;
  salesHit: Array<InterfaceCard> | Array<never>;
}

const initialState: InitialStateInterface = {
  isLoadingHit: true,
  isLoadingCatalog: true,
  catalog: [],
  salesHit: [],
};

export interface CatalogActionInterface {
  type: typeof SET_SALES_HIT;
  payload: Record<string, Array<InterfaceCard>>;
}

export default function catalogReduser(
  state = initialState,
  action: CatalogActionInterface
): InitialStateInterface {
  switch (action.type) {
    case SET_SALES_HIT:
      return {
        ...state,
        salesHit: action.payload.hit,
        isLoadingHit: false,
      };
      case SET_CATALOG:
      return {
        ...state,
        catalog: action.payload.catalog,
        isLoadingHit: false,
      };
    default:
      return state;
  }
}
