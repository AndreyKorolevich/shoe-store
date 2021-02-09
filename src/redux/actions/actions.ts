import {
    ActionTypeAddShoesCart, ActionTypeChangeCatalogSearch,
    ActionTypeChangeCount,
    ActionTypeChangeSize, ActionTypeCloseError,
    ActionTypeDeleteProduct,
    ActionTypeFetchCardDetails,
    ActionTypeFetchCatalog,
    ActionTypeFetchCertainShoes, ActionTypeFetchSalesHit,
    ActionTypeLoadElse, ActionTypeSearchShoes,
    ActionTypeSetCart,
    ActionTypeShowSuccess,
    ActionTypeSubmitOrder
} from "../../interfaces/types";
import {CardDetailInterface} from "../../interfaces/interface";

export const ADD_SHOES_CART = 'ADD_SHOES_CART';
export const CHANGE_CATALOG_SEARCH = 'CHANGE_CATALOG_SEARCH';
export const CHANGE_COUNT = 'CHANGE_COUNT';
export const CHANGE_LOADING_CARD_DETAILS = 'CHANGE_LOADING_CARD_DETAILS';
export const CHANGE_LOADING_CATALOG = 'CHANGE_LOADING_CATALOG';
export const CHANGE_LOADING_HIT = 'CHANGE_LOADING_HIT';
export const CHANGE_SIZE = 'CHANGE_SIZE';
export const CLEANING_CART = 'CLEANING_CART';
export const CLOSE_ERROR = 'CLOSE_ERROR';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const FETCH_CARD_DETAILS = 'FETCH_CARD_DETAILS';
export const FETCH_CATALOG = 'FETCH_CATALOG';
export const FETCH_CERTAIN_SHOES = 'FETCH_CERTAIN_SHOES';
export const FETCH_SALES_HIT = 'FETCH_SALES_HIT';
export const LOADING_CART_SUBMIT = 'LOADING_CART_SUBMIT';
export const LOAD_ELSE = 'LOAD_ELSE';
export const SEARCH_SHOES = 'SEARCH_SHOES';
export const SET_CARD_DETAILS = 'SET_CARD_DETAILS';
export const SET_CART_FROM_LOCALSTORAGE = 'SET_CART_FROM_LOCALSTORAGE';
export const SET_CATALOG = 'SET_CATALOG';
export const SET_CERTAIN_CATALOG = 'SET_CERTAIN_CATALOG';
export const SET_ELSE_SHOES = 'SET_ELSE_SHOES';
export const SET_ERROR = 'SET_ERROR';
export const SET_LAST_SHOES = 'SET_LAST_SHOES';
export const SET_LOADING_ADDITIONAL_SHOES = 'SET_LOADING_ADDITIONAL_SHOES';
export const SET_SALES_HIT = 'SET_SALES_HIT';
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';
export const SUBMIT_ORDER = 'SUBMIT_ORDER';
export const SHOW_SUCCESS_ORDER_SHOES = 'SHOW_SUCCESS_ORDER_SHOES';

export function setCartFromLocalstorage(cart: string): ActionTypeSetCart {
    return {
        type: SET_CART_FROM_LOCALSTORAGE,
        payload: {
            cart: JSON.parse(cart),
        },
    }
}
export function deleteProduct(selectProduct: number): ActionTypeDeleteProduct {
    return {
        type: DELETE_PRODUCT,
        payload: {
            id: selectProduct,
        },
    }
}
export function submitOrder(phone: string, address:string, selectShoes): ActionTypeSubmitOrder {
    return {
        type: SUBMIT_ORDER,
        payload: {
            owner: {
                phone,
                address,
            },
            items: selectShoes.map(elem => ({
                id: elem.id,
                price: elem.price,
                count: elem.count,
            })),
        },
    }
}
export function showSuccessOrder(): ActionTypeShowSuccess {
    return {
        type: SHOW_SUCCESS_ORDER_SHOES,
    }
}
export function fetchCardDetails(id: number): ActionTypeFetchCardDetails {
    return {
        type: FETCH_CARD_DETAILS,
        payload: {
            id,
        },
    }
}
export function addShoesCart(openCard:CardDetailInterface, count: number, selectedSize: string): ActionTypeAddShoesCart {
    return {
        type: ADD_SHOES_CART,
        payload: {
            ...openCard,
            count,
            selectedSize,
        },
    }
}
export function changeCount( count: number): ActionTypeChangeCount {
    return {
        type: CHANGE_COUNT,
        payload: {
            count
        },
    }
}
export function changeSize( size: string): ActionTypeChangeSize {
    return {
        type: CHANGE_SIZE,
        payload: {
            size
        },
    }
}
export function fetchCatalog( selectCategory: number): ActionTypeFetchCatalog {
    return {
        type: FETCH_CATALOG,
        payload: {
            selectCategory
        },
    }
}
export function loadAdditionalShoes( selectCategory: number, offset:number): ActionTypeLoadElse {
    return {
        type: LOAD_ELSE,
        payload: {
            selectCategory,
            offset,
        },
    }
}
export function fetchCertainShoes( id: number, search:string): ActionTypeFetchCertainShoes {
    return {
        type: FETCH_CERTAIN_SHOES,
        payload: {
            id,
            search,
        },
    }
}
export function searchShoes( selectCategory: number, value:string): ActionTypeSearchShoes {
    return {
        type: SEARCH_SHOES,
        payload: {
            search: value,
            selectCategory,
        },
    }
}
export function changeCatalogShoes( search:string): ActionTypeChangeCatalogSearch {
    return {
        type: CHANGE_CATALOG_SEARCH,
        payload: {
            search
        },
    }
}
export function closeError(): ActionTypeCloseError {
    return {
        type: CLOSE_ERROR,
    }
}
export function fetchSalesHit(): ActionTypeFetchSalesHit {
    return {
        type: FETCH_SALES_HIT,
    }
}
