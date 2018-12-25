import {
  takeLatest,
  call,
  put,
  fork,
} from 'redux-saga/effects';
import * as services from '../services/home';
import { setProduct } from '../actions/home';
import { HOME_FETCH_PRODUCT, HOME_FIND_PRODUCT } from '../constants/Home';
import products from '../data/index';

export function* fetchProduct(action) {
  try {
    const result = yield call(services.fetchProduct);
    console.log(result.data.data);
    yield put(setProduct(result.data.data));
  } catch (err) {
    console.log(err);
  }
}

export function* watchFetchProduct() {
  yield takeLatest(HOME_FETCH_PRODUCT, fetchProduct);
}

export function* findProduct(action) {
  try {
    let result = [];
    products.map((item,index)=>{
      if(item.name.indexOf(action.search)!=-1){
        result.push(item);
      }
    })
    yield put(setProduct(result));
  } catch (err) {
    console.log(err);
  }
}

export function* watchFindProduct() {
  yield takeLatest(HOME_FIND_PRODUCT, findProduct);
}

export default function* home() {
  yield fork(watchFetchProduct);
  yield fork(watchFindProduct);
}
