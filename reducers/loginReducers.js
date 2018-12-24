import {IS_LOGIN} from '../actions/actionTypes';

const loginReducers = (status = false, action) => {
    switch (action.type) {
        case IS_LOGIN:
            return action.status;
        default:
            return status; //state does not change
    }
}

export default loginReducers;