import { instanceA, instanceB } from './http_interceptor'

const createApis = function (urls, axiosInstance) {
  return Object.keys(urls).reduce((sumApi, key) => {
    const orginalOption = urls[key]
    if (!orginalOption.url) {
      sumApi[key] = createApis(orginalOption, axiosInstance)
    } else {
      sumApi[key] = (data, options) => {
        // 注意: 如有需要这里也可以在调用的时候配置,可以直接覆盖默认的 !!!!!!!!!!!!!
        const method = (orginalOption.method || 'GET').toUpperCase()
        options = { ...orginalOption, ...options }
        switch (method) {
          case 'POST':
            options.data = data
            break
          case 'GET':
            options.params = data || {}
            break
        }
        return axiosInstance.request(options)
      }
    }
    return sumApi
  }, {})
}

// vue2 init
const httpInitVue2 = function (Vue, urls) {
  Vue.$http = createApis(urls, instanceA)
  Vue.$httpOrg = createApis(urls, instanceB)
}

// vue3 init
const httpInitVue3 = function (urls) {
  return app => {
    // 针对于vue3 的选择的是  全局 provide + 子页面的 inject
    app.provide('$apis', createApis(urls, instanceA))
  }
}

// 默认为 vue3
export { httpInitVue2, httpInitVue3 as default }
