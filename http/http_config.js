/**
 * 负责控制全局的一些配置
 */

export const baseURL = 'www.baidu.com'

export const timeout = 5000 // 超时时间

export const headers = { 'Content-Type': 'application/json' } // 默认headers

export const withOut = false; // 是否需要外层数据 ps:response.data.data

export const loading = false; // 是否需要默认开启loading

export const httpCache = false; // 是否需要默认开启全局的GET请求添加时间戳参数

export const withCredentials = false; // 跨域请求时是否在请求中携带cookie

export const retry = 0 // 请求重连 - 重连次数(在这加了就是给全部的接口都加上了, 所以默认不加上,只在需要的接口上加)

export const retryDelay = 1000 // 请求重连 - 间隔时间(目的是为了让重连的请求在规定时间后再次发起请求)

export const cacheStorageKey = 'apiCache'; // 请求缓存 - localStorage中的 key名

export const cacheStorageExpire = 600000; // 请求缓存 - localStorage中的数据存储时间

export const cacheExpire = 10000; // 请求缓存 - 每个接口数据默认缓存时间

export const cancelTime = 1000; // 取消请求 - 设定取消的请求在规定时间内不允许再次请求







// 后面一些要往请求中添加的公共参数也可以在这里定义好暴露出去





// 设置POST请求参数序列化
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.transformRequest = data => qs.stringify(data);