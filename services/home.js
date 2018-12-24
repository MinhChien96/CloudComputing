const axios = require('axios');
import { api } from '../helpers/api';

export function fetchProduct() {
  return api.get('http://localhost:3000/api/product/getAll');
}

export function foo() {}
