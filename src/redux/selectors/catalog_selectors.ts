export function getLoadingHit(state) {
  return state.catalog.isLoadingHit
}
export function getSalesHit(state) {
  return state.catalog.salesHit
}
export function getLoadingCatalog(state) {
  return state.catalog.isLoadingCatalog
}
export function getCatalog(state) {
  return state.catalog.catalog
}
export function getCategories(state) {
  return state.catalog.categories
}
export function getSelectedCategory(state) {
  return state.catalog.selectCategory
}
export function getOffset(state) {
  return state.catalog.offset
}
export function getShowLoadElse(state) {
  return state.catalog.showLoadElse
}
export function getLoadingAdditionalShoes(state) {
  return state.catalog.isLoadingAdditionalShoes
}
