import {
  SET_CATALOG,
  SET_SALES_HIT,
  SET_CERTAIN_CATALOG,
  SET_SELECTED_CATEGORY,
  SET_ELSE_SHOES,
  SET_LAST_SHOES,
  SET_LOADING_ADDITIONAL_SHOES,
  CHANGE_LOADING_HIT,
  CHANGE_LOADING_CATALOG,
  CHANGE_CATALOG_SEARCH,
} from '../actions/actions'
import { InterfaceCard, InterfaceCategory } from '../interfaces/interface'
import { offset } from '../../constants/constants'

export interface InitialStateInterface {
  isLoadingHit: boolean
  isLoadingCatalog: boolean
  catalog: Array<InterfaceCard> | Array<never>
  salesHit: Array<InterfaceCard> | Array<never>
  categories: Array<InterfaceCategory> | Array<never>
  selectCategory: number
  offset: number
  showLoadElse: boolean
  isLoadingAdditionalShoes: boolean
  search: string
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
}

export interface CatalogActionInterface {
  type: typeof SET_SALES_HIT
  payload: Record<string, Array<InterfaceCard>>
}

export default function catalogReduser(state = initialState, action: any): InitialStateInterface {
  switch (action.type) {
    case SET_SALES_HIT:
      return {
        ...state,
        salesHit: action.payload.hit,
      }
    case SET_CATALOG:
      return {
        ...state,
        catalog: action.payload.catalog,
        categories: action.payload.categories,
      }
    case SET_CERTAIN_CATALOG:
      return {
        ...state,
        catalog: action.payload.catalog,
      }
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectCategory: action.payload.id,
        showLoadElse: true,
      }
    case SET_ELSE_SHOES:
      return {
        ...state,
        catalog: [...state.catalog, ...action.payload.shoes],
        offset: state.offset + offset,
      }
    case SET_LAST_SHOES:
      return {
        ...state,
        catalog: [...state.catalog, ...action.payload.shoes],
        offset,
        showLoadElse: false,
      }
    case SET_LOADING_ADDITIONAL_SHOES:
      return {
        ...state,
        isLoadingAdditionalShoes: !state.isLoadingAdditionalShoes,
      }
    case CHANGE_LOADING_HIT:
      return {
        ...state,
        isLoadingHit: !state.isLoadingHit,
      }
    case CHANGE_LOADING_CATALOG:
      return {
        ...state,
        isLoadingCatalog: !state.isLoadingCatalog,
      }
    case CHANGE_CATALOG_SEARCH:
      return {
        ...state,
        search: action.payload.search,
      }
    default:
      return state
  }
}
