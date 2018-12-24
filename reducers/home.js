import { HOME_SET_PRODUCT, HOME_DEFAULT } from '../constants/Home';


const initialState = {
  products: [],
};

const home = (state = initialState, action = {}) => {
  switch (action.type) {
    case HOME_SET_PRODUCT: {
      const result = { ...state };
      result.products = action.products;
      return result;
    }
    case HOME_DEFAULT:
      return state;
    default:
      return state;
  }
};

export default home;
