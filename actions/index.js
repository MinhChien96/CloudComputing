import {IS_LOGIN} from './actionTypes';


export const isLogin = (status) => {
    return {
        type: IS_LOGIN,
        status: status
    }
}