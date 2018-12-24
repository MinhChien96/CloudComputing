import {
  CART_SET_PRODUCT,
  CART_DEFAULT,
  CART_REMOVE_PRODUCT,
  CART_ORDER
} from '../constants/cart';

const initialState = [];

const home = (state = initialState, action = {}) => {
  switch (action.type) {
    case CART_SET_PRODUCT: {
      const result = [...state];
      let check = 0;
      result.map((item, index) => {
        if (item.product.key == action.product.key) {
          item.number += action.number;
          if (item.number < 1) item.number = 1;
          check = 1;
        }
      });
      if (check == 0) {
        result.push({
          product: action.product,
          number: action.number,
        });
      }
      return result;
    }
    case CART_REMOVE_PRODUCT: {
      let result = state.filter((item) => {
        return item.product.key != action.key;
      });
      return result;
    }
    case CART_ORDER: {
      return [];
    }
    case CART_DEFAULT:
      return state;
    default:
      return state;
  }
};

export default home;
