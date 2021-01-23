import { SEARCH_SHOES } from '../redux/actions/actions'

export const filterChangeSearchAction = action => {
  return action.type === SEARCH_SHOES && action.payload.search.trim().toLowerCase() !== ''
}
