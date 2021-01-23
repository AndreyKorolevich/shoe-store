import {CHANGE_LOADING_CARD_DETAILS, SET_CARD_DETAILS} from "../actions/actions";
import {CardDetailInterface} from "../interfaces/interface";

export interface InitialStateInterface {
  openCard: null | CardDetailInterface
  isLoadingCardDetails: boolean
}

const initialState: InitialStateInterface = {
  openCard: null,
  isLoadingCardDetails: false
}

export default function cardReducer(state = initialState, action: any): InitialStateInterface {
  switch (action.type) {
    case SET_CARD_DETAILS:
      return {
        ...state,
        openCard: action.payload.openCard,
      }
      case CHANGE_LOADING_CARD_DETAILS:
      return {
        ...state,
        isLoadingCardDetails: !state.isLoadingCardDetails,
      }
    default:
      return state
  }
}
