import { combineReducers } from 'redux';
import login from './loginReducers';
import home from './home';
import cart from './cart';
import history from './history';

const allReducers = combineReducers({
    login,
    home,
    cart,
    history
    //you can add more reducers here, separated by , !
});
export default allReducers;