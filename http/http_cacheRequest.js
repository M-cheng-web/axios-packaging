import { getNowTime, generateReqKey } from './http_utils'
import { CODE_KEY, SUCCESS_CODE, DATA_KEY } from './http_config'

const cacheStorageKey = 'apiCache' // 请求缓存 - localStorage中的 key名
const cacheStorageExpire = 600000 // 请求缓存 - localStorage中的数据存储时间
const cacheExpire = 10000 // 请求缓存 - 每个接口数据默认缓存时间

export default function CacheRequest() {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const _this = this
  this.CACHES = new Proxy(
    {},
    {
      get: function (target, key) {
        let value = target[key]
        console.log(`${key} 被读取`, value)
        if (!value) value = _this.getCacheItem(key)
        return value
      },
      set: function (target, key, value) {
        console.log(`${key} 被设置为 ${value}`)
        target[key] = value
        _this.setCacheItem(key, value)
        return true
      }
    }
  )
  this.initialize()
}

/**
 * 初始化
 * 在localStorage中创建存储对象
 * 谨慎使用，如果使用过多应该考虑完善清除方案
 */
CacheRequest.prototype.initialize = function () {
  const cache = window.localStorage.getItem(cacheStorageKey)
  if (cache) {
    const { expire } = JSON.parse(cache)
    // 如果未超时就不做处理
    if (expire && getNowTime() - expire < cacheStorageExpire) return
  }
  window.localStorage.setItem(
    cacheStorageKey,
    JSON.stringify({ data: {}, expire: getNowTime() })
  )
}

/**
 * 根据请求Key去拿到缓存的数据
 * 没有则返回null
 */
CacheRequest.prototype.getCacheItem = function (key) {
  const cache = window.localStorage.getItem(cacheStorageKey)
  const { data } = JSON.parse(cache)
  return (data && data[key]) || null
}

/**
 * 根据请求Key去存储数据
 */
CacheRequest.prototype.setCacheItem = function (key, value) {
  const cache = window.localStorage.getItem(cacheStorageKey)
  let { data, expire } = JSON.parse(cache)
  data[key] = value
  window.localStorage.setItem(cacheStorageKey, JSON.stringify({ data, expire }))
}

/**
 * 缓存 - 请求拦截
 */
CacheRequest.prototype.requestInterceptor = function (config, axios) {
  if (config.cache) {
    const data = this.CACHES[`${generateReqKey(config)}`]
    // 存储是默认时间还是用户传递过来的时间
    const setExpireTime = config.setExpireTime || cacheExpire
    // 判断缓存数据是否存在 存在的话 是否过期 没过期就取消这个请求
    if (data && getNowTime() - data.expire < setExpireTime)
      config.cancelToken = new axios.CancelToken(cancel => cancel(data))
  }
}

/**
 * 缓存 - 响应拦截
 */
CacheRequest.prototype.responseInterceptor = function (response) {
  if (
    response &&
    response.config.cache &&
    response.data[CODE_KEY] === SUCCESS_CODE
  ) {
    this.CACHES[`${generateReqKey(response.config)}`] = {
      data: response.data.data, // 在这里设置返回内部结果还是外层都要
      expire: getNowTime()
    }
  }
}
