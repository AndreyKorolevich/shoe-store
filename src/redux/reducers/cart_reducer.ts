import {ADD_SHOES_CART, CLEANING_CART, DELETE_PRODUCT} from '../actions/actions'
import { SelectCardInterface } from '../interfaces/interface'

export interface InitialStateInterface {
  selectShoes: [] | Array<SelectCardInterface>
  isLoadingSentForm: boolean
}

const initialState: InitialStateInterface = {
  selectShoes: [],
  isLoadingSentForm: false
}

export default function cartReducer(state = initialState, action: any): InitialStateInterface {
  switch (action.type) {
    case ADD_SHOES_CART: {
      const index = state.selectShoes.findIndex(e => e.id === action.payload.id)
      let newSelectShoes
      if (index === -1) {
        newSelectShoes = [...state.selectShoes, action.payload]
        localStorage.setItem('cart', JSON.stringify(newSelectShoes))
      } else {
        newSelectShoes = [...state.selectShoes]
        newSelectShoes[index].count += action.payload.count
        localStorage.setItem('cart', JSON.stringify(newSelectShoes))
      }
      return {
        ...state,
        selectShoes: newSelectShoes,
      }
    }
    case DELETE_PRODUCT: {
      const newSelectShoes = state.selectShoes.filter(e => e.id !== action.payload.id)
      localStorage.setItem('cart', JSON.stringify(newSelectShoes))
      return {
        ...state,
        selectShoes: newSelectShoes,
      }
    }
    case CLEANING_CART:
      localStorage.removeItem('cart' )
      return {
        ...state,
        selectShoes: [],
      }
    default:
      return state
  }
}
