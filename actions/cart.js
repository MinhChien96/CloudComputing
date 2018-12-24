import { CART_FETCH_PRODUCT, CART_SET_PRODUCT, CART_REMOVE_PRODUCT, CART_ORDER } from '../constants/cart';

export const fetchProduct = () => ({
  type: CART_FETCH_PRODUCT,
});

export const setProduct = (product,number) => ({
  type: CART_SET_PRODUCT,
  product,
  number
});

export const removeProduct = (key) => ({
  type: CART_REMOVE_PRODUCT,
  key
});

export const order = () => ({
  type: CART_ORDER,
});

