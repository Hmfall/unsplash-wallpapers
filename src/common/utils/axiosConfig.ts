import axios from 'axios';
import { BASE_URL } from '../constants';

const $mockApiHost = axios.create({
   baseURL: BASE_URL,
});

export { $mockApiHost };