import { HOME_FETCH_PRODUCT, HOME_SET_PRODUCT,HOME_FIND_PRODUCT } from '../constants/Home';

export const fetchProduct = () => ({
  type: HOME_FETCH_PRODUCT,
});

export const setProduct = (products) => ({
  type: HOME_SET_PRODUCT,
  products,
});

export const findProduct = (search) => ({
  type: HOME_FIND_PRODUCT,
  search,
});
