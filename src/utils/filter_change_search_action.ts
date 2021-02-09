import { SEARCH_SHOES } from '../redux/catalog/catalog_types';

export const filterChangeSearchAction = action =>
  action.type === SEARCH_SHOES && action.payload.search.trim().toLowerCase() !== '';
