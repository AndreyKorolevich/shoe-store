import { SET_CATALOG, SET_ERROR, SET_SALES_HIT } from '../actions/actions'
import { InterfaceCard, InterfaceCategory } from '../interfaces/interface'

export interface InitialStateInterface {
  error: null | string
}

const initialState: InitialStateInterface = {
  error: null,
}

// export interface CatalogActionInterface {
//     type: typeof SET_SALES_HIT;
//     payload: Record<string, Array<InterfaceCard>>;
// }

export default function errorReducer(state = initialState, action: any): InitialStateInterface {
  switch (action.type) {
    case SET_ERROR:
      return {
        error: action.payload.error,
      }
    default:
      return state
  }
}
