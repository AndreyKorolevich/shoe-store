import { SET_ERROR } from '../actions/actions'

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
