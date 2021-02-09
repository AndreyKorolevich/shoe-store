import {
  ActionTypeDeleteProduct,
  ActionTypeSetCart,
  ActionTypeShowSuccess,
  ActionTypeSubmitOrder,
  DELETE_PRODUCT,
  SET_CART_FROM_LOCALSTORAGE,
  SHOW_SUCCESS_ORDER_SHOES,
  SUBMIT_ORDER,
} from './cart_types';

export function setCartFromLocalstorage(cart: string): ActionTypeSetCart {
  return {
    type: SET_CART_FROM_LOCALSTORAGE,
    payload: {
      cart: JSON.parse(cart),
    },
  };
}

export function deleteProduct(selectProduct: number): ActionTypeDeleteProduct {
  return {
    type: DELETE_PRODUCT,
    payload: {
      id: selectProduct,
    },
  };
}

export function showSuccessOrder(): ActionTypeShowSuccess {
  return {
    type: SHOW_SUCCESS_ORDER_SHOES,
  };
}

export function submitOrder(phone: string, address: string, selectShoes): ActionTypeSubmitOrder {
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
  };
}
