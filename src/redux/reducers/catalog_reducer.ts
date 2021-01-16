import {
  SET_CATALOG,
  SET_SALES_HIT,
  SET_CERTAIN_CATALOG,
  SET_SELECTED_CATEGORY,
  SET_ELSE_SHOES,
  SET_LAST_SHOES, SET_LOADING_ADDITIONAL_SHOES,
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
}

const initialState: InitialStateInterface = {
  isLoadingHit: true,
  isLoadingCatalog: true,
  catalog: [],
  salesHit: [],
  categories: [],
  selectCategory: 0,
  offset,
  showLoadElse: true,
  isLoadingAdditionalShoes: false,
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
        isLoadingHit: false,
      }
    case SET_CATALOG:
      return {
        ...state,
        catalog: action.payload.catalog,
        categories: action.payload.categories,
        isLoadingCatalog: false,
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
        isLoadingAdditionalShoes: !state.isLoadingAdditionalShoes
      }
    default:
      return state
  }
}
