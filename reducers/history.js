import {
  HISTORY_SET_PRODUCT
} from '../constants/history';

const initialState = [];

const home = (state = initialState, action = {}) => {
  switch (action.type) {
    case HISTORY_SET_PRODUCT: {
      return action.bill;
    }
    default:
      return state;
  }
};

export default home;
