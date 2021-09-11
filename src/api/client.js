import axios from 'axios';
import md5 from 'blueimp-md5';

import {timestamp} from '../utils/timeUtils';

export const makeDefaultParams = () => {
  const ts = timestamp();
  const privateKey = process.env.API_PRIVATE_KEY;
  const apikey = process.env.API_PUBLIC_KEY;

  return {
    ts,
    apikey,
    hash: md5(`${ts}${privateKey}${apikey}`),
  };
};

const client = axios.create({
  baseURL: process.env.API_URL,
  timeout: 3000,
});

export default client;
