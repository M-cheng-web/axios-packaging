import axios from 'axios';
import { baseURL, timeout, retry, retryDelay, withOut, loading, httpCache, withCredentials } from './http_config'


// --------------------------------- 设置axios默认值 ---------------------------------
axios.defaults.baseURL = baseURL;
axios.defaults.timeout = timeout;
axios.defaults.retry = retry;
axios.defaults.retryDelay = retryDelay;
axios.defaults.withOut = withOut;
axios.defaults.loading = loading;
axios.defaults.httpCache = httpCache;
axios.defaults.withCredentials = withCredentials;


// --------------------------------- 创建axios ---------------------------------
const instanceA = axios.create({
  baseURL: 'http://yapi.smart-xwork.cn/mock/94385/axios/axios1',
  timeout: 5000,
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }
});
const instanceB = axios.create({
  baseURL: 'http://yapi.smart-xwork.cn/mock/94385/axios/axios2',
  timeout: 5000,
  headers: {},
});


export { instanceA, instanceB };