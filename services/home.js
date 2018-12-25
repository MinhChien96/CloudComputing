const axios = require('axios');
import { api } from '../helpers/api';

export function fetchProduct() {
  return api.get('https://dien-toan-dam-may.herokuapp.com/api/product/getAll');
}

export function foo() {}
