import axios from 'axios'

// --------------------------------- axios默认值 ---------------------------------
const HTTP_CONFIG = {
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000, // 超时时间
  withOut: false, // 是否需要外层数据 ps:response.data.data
  loading: false, // 是否需要默认开启loading
  httpCache: false, // 是否需要默认开启全局的GET请求添加时间戳参数
  withCredentials: false, // 跨域请求时是否在请求中携带cookie
  retry: 0, // 请求重连 - 重连次数(在这加了就是给全部的接口都加上了, 0代表默认不加请求重连,个别需要的接口可以自己配)
  retryDelay: 1000 // 请求重连 - 间隔时间(目的是为了让重连的请求在规定时间后再次发起请求)
}
// 设置POST请求参数序列化
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.transformRequest = data => qs.stringify(data);

Object.assign(axios.defaults, HTTP_CONFIG)

// --------------------------------- 创建axios实例 ---------------------------------
const instanceA = axios.create({
  timeout: 5000,
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }
})

// example，为了兼容多实例
const instanceB = axios.create({
  baseURL: 'http://yapi.smart-xwork.cn/mock/94385/axios/axios2',
  timeout: 5000,
  headers: {}
})

export { instanceA, instanceB }
