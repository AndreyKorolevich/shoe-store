import { StateType } from '../store';

export function getLoadingHit(state: StateType) {
  return state.catalog.isLoadingHit;
}
export function getSalesHit(state: StateType) {
  return state.catalog.salesHit;
}
export function getLoadingCatalog(state: StateType) {
  return state.catalog.isLoadingCatalog;
}
export function getCatalog(state: StateType) {
  return state.catalog.catalog;
}
export function getCategories(state: StateType) {
  return state.catalog.categories;
}
export function getSelectedCategory(state: StateType) {
  return state.catalog.selectCategory;
}
export function getOffset(state: StateType) {
  return state.catalog.offset;
}
export function getShowLoadElse(state: StateType) {
  return state.catalog.showLoadElse;
}
export function getLoadingAdditionalShoes(state: StateType) {
  return state.catalog.isLoadingAdditionalShoes;
}
export function getSearch(state: StateType) {
  return state.catalog.search;
}
