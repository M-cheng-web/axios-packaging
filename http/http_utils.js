import md5 from '@/utils/md5/index'

/**
 * 控制全局loading
 * type: -1 / 1 表示加一或者减一
 */
export const actionLoading = function (type) {
  window.app.$store.commit('LOADING_COUNT', type)
  if (window.app.$store.state.user.loadingCount === 0)
    window.app.$vux.loading.hide() // 隐藏loading
}

/**
 * 重连
 * 接口报错时会在此判断是否需要重连
 */
export const axiosRetryInterceptor = function (err, axios) {
  const config = err.config

  if (!config || !config.retry) return

  config.__retryCount = config.__retryCount || 0

  if (config.__retryCount >= config.retry) {
    config.__retrying = false // 表示不在重连中
    return
  }

  config.__retrying = true // 表示正在重连中,暂时屏蔽掉重复请求剔除的操作
  config.__retryCount += 1

  const backoff = new Promise(resolve =>
    setTimeout(() => resolve(), config.retryDelay || 1000)
  )

  return backoff.then(() => axios(config))
}

/**
 * 添加公共参数
 * 需要根据实际使用情况自定义
 */
export const setPublicParams = function (config) {
  const { url, data, params, headers, method, httpCache } = config

  headers.token = sessionStorage.getItem('token') || '' // 请求头添加参数

  // get请求添加时间戳
  if (method === 'get' && httpCache) {
    params._ = Date.now()
  }

  // 例如: 为某些接口添加公共的参数 - 带有common的路径添加公共参数
  const arr = url.split('/')
  if (arr && arr[1] === 'common') {
    headers.timestamp = Date.now()
  }

  // 例如: 为某些接口添加公共的参数 - 带有acceptance的路径添加公共参数
  if (arr && arr[1] === 'acceptance') {
    const id = 123
    if (method === 'get') {
      Object.assign(params, { preAcptId: id })
    } else if (method === 'post') {
      Object.assign(data, { preAcptId: id })
    }
  }
}

/**
 * 判断一个字符串是否为JSON字符串对象
 */
export const isJsonStr = function (strObj) {
  if (typeof strObj === 'string') {
    try {
      const obj = JSON.parse(strObj)
      return typeof obj === 'object' && obj
    } catch (e) {
      console.log('error：' + strObj + '!!!' + e)
      return false
    }
  }
}

/**
 * 格式化参数
 * *** 默认会屏蔽时间戳 ***
 */
export const paramsDataStringify = function (params) {
  if (params && typeof params === 'object') {
    const obj = Object.keys(params)
    return obj.reduce((sum, key, index) => {
      if (key === '_') return sum
      sum += `${key}=${params[key]}${obj.length - 1 === index ? '' : '&'}`
      return sum
    }, '')
  }
  return null
}

/**
 * 获取当前时间戳
 */
export const getNowTime = function () {
  return new Date().getTime()
}

/**
 * 生成唯一Key
 */
export const generateReqKey = function (config) {
  // 响应的时候，response.config 中的data 是一个JSON字符串，所以需要转换一下
  if (config && config.data && isJsonStr(config.data)) {
    config.data = JSON.parse(config.data)
  }
  const { method, baseURL, url, params, data } = config // 请求方式，参数，请求地址，
  const key = md5(
    url,
    method,
    baseURL,
    url,
    paramsDataStringify(params),
    paramsDataStringify(data)
  )
  return key
}
