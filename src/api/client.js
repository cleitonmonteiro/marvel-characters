import axios from 'axios';
import md5 from 'blueimp-md5';

import {timestamp} from '../utils/timeUtils';
import {API_PRIVATE_KEY, API_PUBLIC_KEY} from './config';

export const makeDefaultParams = () => {
  const ts = timestamp();

  return {
    ts,
    orderBy: 'name',
    apikey: API_PUBLIC_KEY,
    hash: md5(`${ts}${API_PRIVATE_KEY}${API_PUBLIC_KEY}`),
  };
};

const client = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  timeout: 3000,
});

export default client;
