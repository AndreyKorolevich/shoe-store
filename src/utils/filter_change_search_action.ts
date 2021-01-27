import { SEARCH_SHOES } from '../redux/actions/actions';

export const filterChangeSearchAction = (action) => action.type === SEARCH_SHOES && action.payload.search.trim().toLowerCase() !== '';
