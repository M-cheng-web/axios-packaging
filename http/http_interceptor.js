import axios from 'axios'
import { instanceA, instanceB } from './http_axios'
import CancelRequest from './http_cancelRequest'
import CacheRequest from './http_cacheRequest'
import { CODE_KEY, SUCCESS_CODE, DATA_KEY } from './http_config'
import {
  axiosRetryInterceptor,
  paramsDataStringify,
  actionLoading,
  setPublicParams
} from './http_utils'

// ------------------------------- 创建取消请求实例 -------------------------------
const cancelRequest = new CancelRequest()

// ------------------------------- 创建缓存请求实例 -------------------------------
const cacheRequest = new CacheRequest()

// ------------------------------- 请求拦截 -------------------------------
const requestInterceptors = [
  {
    resolve(config) {
      const { url, data, params, headers, method } = config

      cancelRequest.stopRepeatRequest(config, axios) // 取消请求

      if (method === 'post' && config.paramsSerial) {
        // post请求参数序列化
        headers['Content-Type'] = 'application/x-www-form-urlencoded'
        config.transformRequest = [data => paramsDataStringify(data)]
      }

      setPublicParams(config) // 添加公共参数

      cacheRequest.requestInterceptor(config, axios) // 请求缓存

      if (config.loading) actionLoading(1) // 全局loading

      return config
    },
    reject(err) {
      return Promise.reject(err)
    }
  }
]

// ------------------------------- 响应拦截 -------------------------------
const responseInterceptors = [
  {
    resolve(response) {
      const { data, status, request, config } = response

      cancelRequest.allowRequest(config) // 请求取消

      cacheRequest.responseInterceptor(response) // 请求缓存

      if (config.loading) actionLoading(-1) // 全局loading

      // todo: 针对多种 code 来进行不同的处理

      return data[CODE_KEY] === SUCCESS_CODE || config.white
        ? Promise.resolve(config.withOut ? data : data[DATA_KEY]) // 控制返回外层数据还是内层
        : Promise.reject(data)
    },
    reject(error) {
      const { config, status } = error

      if (axios.isCancel(error)) {
        // 请求被取消的情况(分两种: 1.被缓存取消  2.被重复请求取消)
        const { message } = error
        return message.expire
          ? Promise.resolve(message.data)
          : console.log(message)
      }

      cancelRequest.allowRequest(config) // 请求取消

      if (config.loading) actionLoading(-1) // 全局loading

      if (config.white) return Promise.resolve('白名单') // 白名单

      axiosRetryInterceptor(error, instanceA) // 请求错误重连

      return Promise.reject(error)
    }
  }
]

// --------------------------------- 给axios添加请求,响应拦截 ---------------------------------
// 用数组的方式易扩展，多重拦截，分段处理
requestInterceptors.forEach(({ resolve, reject }) => {
  instanceA.interceptors.request.use(resolve, reject)
  instanceB.interceptors.request.use(resolve, reject)
})
responseInterceptors.forEach(({ resolve, reject }) => {
  instanceA.interceptors.response.use(resolve, reject)
  instanceB.interceptors.response.use(resolve, reject)
})

export default { instanceA, instanceB }
export { instanceA, instanceB }
