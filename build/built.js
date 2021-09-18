/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./apis/home.js":
/*!**********************!*\
  !*** ./apis/home.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  getA: {\r\n    url: '/getA',\r\n    method: 'GET',\r\n    httpCache: false,\r\n    cache: true,\r\n    white: false, // 是否白名单 - 发生错误时不需要错误拦截\r\n    retry: 3,\r\n  },\r\n});\r\n\r\n\r\n\r\n// 示例\r\n// ``` js\r\n// export default {\r\n//   getA: {\r\n//     url: '/axios/getA',\r\n//     method: 'GET',\r\n//     white: false, // 是否白名单 - 发生错误时不需要错误拦截(如果配置了白名单会忽略重连)\r\n//     withOut: false, // 是否要外层数据\r\n//     cancel: true, // 是否在重复请求时取消本次请求\r\n//     cancelTime: 3000, // 指定此接口的延迟时间(指的是延迟多久才能开始下一次相同的请求) 优先级: 这里 > config文件\r\n//     loading: true, // 是否显示loading\r\n//     retry: 2, // 接口错误时重连次数 - 0表示不重连\r\n//     httpCache: true, // get请求是否需要浏览器缓存\r\n//     cache: true, // 是否需要缓存数据\r\n//     cacheExpire: 10000, // 此接口数据的缓存时间\r\n//     paramsSerial: false, // post请求参数序列化\r\n//     withCredentials: true, // 跨域\r\n//   },\r\n//   saveB: {\r\n//     url: '/axios/saveB',\r\n//     method: 'POST',\r\n//   },\r\n// };\r\n// ```\n\n//# sourceURL=webpack://cheng/./apis/home.js?");

/***/ }),

/***/ "./apis/index.js":
/*!***********************!*\
  !*** ./apis/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mergeAll = requireContext => {\r\n  return requireContext.keys().reduce((total, item) => {\r\n    const name = item.slice(2, -3)\r\n    if (name === 'index') return total\r\n    total[name] = { ...requireContext(item).default }\r\n    return total\r\n  }, {})\r\n}\r\n\r\nconst requireContext = __webpack_require__(\"./apis sync \\\\.js$\")\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeAll(requireContext));\n\n//# sourceURL=webpack://cheng/./apis/index.js?");

/***/ }),

/***/ "./apis/login.js":
/*!***********************!*\
  !*** ./apis/login.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  saveB: {\r\n    url: '/saveB',\r\n    method: 'POST',\r\n  },\r\n});\n\n//# sourceURL=webpack://cheng/./apis/login.js?");

/***/ }),

/***/ "./apis sync \\.js$":
/*!***************************************!*\
  !*** ./apis/ sync nonrecursive \.js$ ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./home.js\": \"./apis/home.js\",\n\t\"./index.js\": \"./apis/index.js\",\n\t\"./login.js\": \"./apis/login.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./apis sync \\\\.js$\";\n\n//# sourceURL=webpack://cheng/./apis/_sync_nonrecursive_\\.js$?");

/***/ }),

/***/ "./http/http_axios.js":
/*!****************************!*\
  !*** ./http/http_axios.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"instanceA\": () => (/* binding */ instanceA),\n/* harmony export */   \"instanceB\": () => (/* binding */ instanceB)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.21.4@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _http_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http_config */ \"./http/http_config.js\");\n\r\n\r\n\r\n\r\n// --------------------------------- 设置axios默认值 ---------------------------------\r\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = _http_config__WEBPACK_IMPORTED_MODULE_1__.baseURL;\r\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.timeout) = _http_config__WEBPACK_IMPORTED_MODULE_1__.timeout;\r\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.retry) = _http_config__WEBPACK_IMPORTED_MODULE_1__.retry;\r\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.retryDelay) = _http_config__WEBPACK_IMPORTED_MODULE_1__.retryDelay;\r\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withOut) = _http_config__WEBPACK_IMPORTED_MODULE_1__.withOut;\r\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.loading) = _http_config__WEBPACK_IMPORTED_MODULE_1__.loading;\r\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.httpCache) = _http_config__WEBPACK_IMPORTED_MODULE_1__.httpCache;\r\n(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = _http_config__WEBPACK_IMPORTED_MODULE_1__.withCredentials;\r\n\r\n\r\n// --------------------------------- 创建axios ---------------------------------\r\nconst instanceA = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\r\n  baseURL: 'http://yapi.smart-xwork.cn/mock/94385/axios/axios1',\r\n  timeout: 5000,\r\n  headers: {\r\n    get: {\r\n      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'\r\n    },\r\n    post: {\r\n      'Content-Type': 'application/json;charset=utf-8'\r\n    }\r\n  }\r\n});\r\nconst instanceB = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\r\n  baseURL: 'http://yapi.smart-xwork.cn/mock/94385/axios/axios2',\r\n  timeout: 5000,\r\n  headers: {},\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://cheng/./http/http_axios.js?");

/***/ }),

/***/ "./http/http_cacheRequest.js":
/*!***********************************!*\
  !*** ./http/http_cacheRequest.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CacheRequest)\n/* harmony export */ });\n/* harmony import */ var _http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_utils */ \"./http/http_utils.js\");\n/* harmony import */ var _http_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http_config */ \"./http/http_config.js\");\n\r\n\r\n\r\n\r\nfunction CacheRequest() {\r\n  const _this = this;\r\n  this.CACHES = new Proxy({}, {\r\n    get: function (target, key) {\r\n      let value = target[key];\r\n      console.log(`${key} 被读取`, value);\r\n      if (!value) value = _this.getCacheItem(key);\r\n      return value;\r\n    },\r\n    set: function (target, key, value) {\r\n      console.log(`${key} 被设置为 ${value}`);\r\n      target[key] = value;\r\n      _this.setCacheItem(key, value);\r\n      return true;\r\n    }\r\n  });\r\n  this.initialize()\r\n}\r\n\r\n/**\r\n * 初始化\r\n * 在localStorage中创建存储对象\r\n */\r\nCacheRequest.prototype.initialize = function () {\r\n  const cache = window.localStorage.getItem(_http_config__WEBPACK_IMPORTED_MODULE_1__.cacheStorageKey);\r\n  if (cache) {\r\n    const { storageExpire } = JSON.parse(cache);\r\n    if (storageExpire && (0,_http_utils__WEBPACK_IMPORTED_MODULE_0__.getNowTime)() - storageExpire < _http_config__WEBPACK_IMPORTED_MODULE_1__.cacheStorageExpire) return; // 如果未超时就不做处理\r\n  }\r\n  window.localStorage.setItem(_http_config__WEBPACK_IMPORTED_MODULE_1__.cacheStorageKey, JSON.stringify({ data: {}, storageExpire: (0,_http_utils__WEBPACK_IMPORTED_MODULE_0__.getNowTime)() }));\r\n}\r\n\r\n/**\r\n * 根据请求Key去拿到缓存的数据\r\n * 没有则返回null\r\n */\r\nCacheRequest.prototype.getCacheItem = function (key) {\r\n  const cache = window.localStorage.getItem(_http_config__WEBPACK_IMPORTED_MODULE_1__.cacheStorageKey);\r\n  const { data, expire } = JSON.parse(cache);\r\n  return (data && data[key]) || null;\r\n}\r\n\r\n/**\r\n * 根据请求Key去存储数据\r\n */\r\nCacheRequest.prototype.setCacheItem = function (key, value) {\r\n  const cache = window.localStorage.getItem(_http_config__WEBPACK_IMPORTED_MODULE_1__.cacheStorageKey);\r\n  let { data, expire } = JSON.parse(cache);\r\n  data[key] = value;\r\n  window.localStorage.setItem(_http_config__WEBPACK_IMPORTED_MODULE_1__.cacheStorageKey, JSON.stringify({ data, expire }));\r\n}\r\n\r\n/**\r\n * 缓存 - 请求拦截\r\n */\r\nCacheRequest.prototype.requestInterceptor = function (config, axios) {\r\n  if (config.cache) {\r\n    const data = this.CACHES[`${(0,_http_utils__WEBPACK_IMPORTED_MODULE_0__.generateReqKey)(config)}`];\r\n    // 存储是默认时间还是用户传递过来的时间\r\n    const setExpireTime = config.setExpireTime ? config.setExpireTime : _http_config__WEBPACK_IMPORTED_MODULE_1__.cacheExpire;\r\n    // 判断缓存数据是否存在 存在的话 是否过期 没过期就取消这个请求\r\n    if (data && (0,_http_utils__WEBPACK_IMPORTED_MODULE_0__.getNowTime)() - data.expire < setExpireTime) config.cancelToken = new axios.CancelToken(cancel => cancel(data));\r\n  }\r\n}\r\n\r\n/**\r\n * 缓存 - 响应拦截\r\n */\r\nCacheRequest.prototype.responseInterceptor = function (response) {\r\n  if (response && response.config.cache && response.data.messageCode === 200) {\r\n    this.CACHES[`${(0,_http_utils__WEBPACK_IMPORTED_MODULE_0__.generateReqKey)(response.config)}`] = {\r\n      expire: (0,_http_utils__WEBPACK_IMPORTED_MODULE_0__.getNowTime)(),\r\n      data: response.data.data, // 在这里设置返回内部结果还是外层都要\r\n    };\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://cheng/./http/http_cacheRequest.js?");

/***/ }),

/***/ "./http/http_cancelRequest.js":
/*!************************************!*\
  !*** ./http/http_cancelRequest.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CancelRequest)\n/* harmony export */ });\n/* harmony import */ var _http_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_config */ \"./http/http_config.js\");\n\r\n\r\n/**\r\n * 对极短时间内相同的重复请求拦截,阻止请求(防止按钮重复点击, 发出多次相同请求)\r\n * cancelTime 是为了在设定的时间后将请求从列表剔除, 比如说设定10秒,在这10秒内的相同请求都会被拦截\r\n */\r\nfunction CancelRequest(_cancelTime) {\r\n  this.reqList = new Map([]); // 正在进行中的请求列表\r\n  this.cancelTime = _cancelTime || _http_config__WEBPACK_IMPORTED_MODULE_0__.cancelTime // 全局默认的延迟时间\r\n}\r\n\r\n/**\r\n * 阻止重复请求\r\n */\r\nCancelRequest.prototype.stopRepeatRequest = function (config, axios) {\r\n  if (config.cancel && !config.__retrying) {\r\n    let cancel; // 请求中断函数\r\n    const url = config.baseURL + config.url;\r\n    config.cancelToken = new axios.CancelToken((c) => cancel = c);\r\n    this.reqList.get(url) ? cancel(`${url} 请求被中断`) : this.reqList.set(url, true);\r\n  }\r\n}\r\n\r\n/**\r\n * 允许某个请求可以继续进行\r\n * @param {array} reqList 全部请求列表\r\n */\r\nCancelRequest.prototype.allowRequest = function (config) {\r\n  const url = config.url;\r\n  if (config.cancel && this.reqList.get(url)) {\r\n    setTimeout(() => this.reqList.delete(url), config.cancelTime || this.cancelTime)\r\n  }\r\n}\n\n//# sourceURL=webpack://cheng/./http/http_cancelRequest.js?");

/***/ }),

/***/ "./http/http_config.js":
/*!*****************************!*\
  !*** ./http/http_config.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"baseURL\": () => (/* binding */ baseURL),\n/* harmony export */   \"timeout\": () => (/* binding */ timeout),\n/* harmony export */   \"headers\": () => (/* binding */ headers),\n/* harmony export */   \"withOut\": () => (/* binding */ withOut),\n/* harmony export */   \"loading\": () => (/* binding */ loading),\n/* harmony export */   \"httpCache\": () => (/* binding */ httpCache),\n/* harmony export */   \"withCredentials\": () => (/* binding */ withCredentials),\n/* harmony export */   \"retry\": () => (/* binding */ retry),\n/* harmony export */   \"retryDelay\": () => (/* binding */ retryDelay),\n/* harmony export */   \"cacheStorageKey\": () => (/* binding */ cacheStorageKey),\n/* harmony export */   \"cacheStorageExpire\": () => (/* binding */ cacheStorageExpire),\n/* harmony export */   \"cacheExpire\": () => (/* binding */ cacheExpire),\n/* harmony export */   \"cancelTime\": () => (/* binding */ cancelTime)\n/* harmony export */ });\n/**\r\n * 负责控制全局的一些配置\r\n */\r\n\r\nconst baseURL = 'www.baidu.com'\r\n\r\nconst timeout = 5000 // 超时时间\r\n\r\nconst headers = { 'Content-Type': 'application/json' } // 默认headers\r\n\r\nconst withOut = false; // 是否需要外层数据 ps:response.data.data\r\n\r\nconst loading = false; // 是否需要默认开启loading\r\n\r\nconst httpCache = false; // 是否需要默认开启全局的GET请求添加时间戳参数\r\n\r\nconst withCredentials = false; // 跨域请求时是否在请求中携带cookie\r\n\r\nconst retry = 0 // 请求重连 - 重连次数(在这加了就是给全部的接口都加上了, 所以默认不加上,只在需要的接口上加)\r\n\r\nconst retryDelay = 1000 // 请求重连 - 间隔时间(目的是为了让重连的请求在规定时间后再次发起请求)\r\n\r\nconst cacheStorageKey = 'apiCache'; // 请求缓存 - localStorage中的 key名\r\n\r\nconst cacheStorageExpire = 600000; // 请求缓存 - localStorage中的数据存储时间\r\n\r\nconst cacheExpire = 10000; // 请求缓存 - 每个接口数据默认缓存时间\r\n\r\nconst cancelTime = 1000; // 取消请求 - 设定取消的请求在规定时间内不允许再次请求\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// 后面一些要往请求中添加的公共参数也可以在这里定义好暴露出去\r\n\r\n\r\n\r\n\r\n\r\n// 设置POST请求参数序列化\r\n// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';\r\n// axios.defaults.transformRequest = data => qs.stringify(data);\n\n//# sourceURL=webpack://cheng/./http/http_config.js?");

/***/ }),

/***/ "./http/http_interceptor.js":
/*!**********************************!*\
  !*** ./http/http_interceptor.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"instanceA\": () => (/* reexport safe */ _http_axios__WEBPACK_IMPORTED_MODULE_1__.instanceA),\n/* harmony export */   \"instanceB\": () => (/* reexport safe */ _http_axios__WEBPACK_IMPORTED_MODULE_1__.instanceB)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.21.4@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _http_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http_axios */ \"./http/http_axios.js\");\n/* harmony import */ var _http_cancelRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http_cancelRequest */ \"./http/http_cancelRequest.js\");\n/* harmony import */ var _http_cacheRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http_cacheRequest */ \"./http/http_cacheRequest.js\");\n/* harmony import */ var _http_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http_utils */ \"./http/http_utils.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// ------------------------------- 创建取消请求实例 -------------------------------\r\nconst cancelRequest = new _http_cancelRequest__WEBPACK_IMPORTED_MODULE_2__.default();\r\n\r\n// ------------------------------- 创建缓存请求实例 -------------------------------\r\nconst cacheRequest = new _http_cacheRequest__WEBPACK_IMPORTED_MODULE_3__.default();\r\n\r\n\r\n// ------------------------------- 请求拦截 -------------------------------\r\nconst requestInterceptors = [\r\n  {\r\n    resolve(config) {\r\n      const { url, data, params, headers, method } = config;\r\n\r\n      cancelRequest.stopRepeatRequest(config, (axios__WEBPACK_IMPORTED_MODULE_0___default())); // 取消请求\r\n\r\n      headers.token = sessionStorage.getItem('token') || ''; // 请求头添加参数\r\n\r\n      if (method === 'post' && config.paramsSerial) { // post请求参数序列化\r\n        headers['Content-Type'] = 'application/x-www-form-urlencoded';\r\n        config.transformRequest = [(data) => (0,_http_utils__WEBPACK_IMPORTED_MODULE_4__.paramsDataStringify)(data)]\r\n      }\r\n\r\n      (0,_http_utils__WEBPACK_IMPORTED_MODULE_4__.setPublicParams)(config); // 添加公共参数\r\n\r\n      if (method === 'get' && !config.httpCache) params._ = Date.now() // get请求添加时间戳\r\n\r\n      cacheRequest.requestInterceptor(config, (axios__WEBPACK_IMPORTED_MODULE_0___default())) // 请求缓存\r\n\r\n      if (config.loading) (0,_http_utils__WEBPACK_IMPORTED_MODULE_4__.actionLoading)(-1); // 全局loading\r\n\r\n      return config;\r\n    },\r\n    reject(err) {\r\n      return Promise.reject(err)\r\n    },\r\n  },\r\n];\r\n\r\n\r\n// ------------------------------- 响应拦截 -------------------------------\r\nconst responseInterceptors = [\r\n  {\r\n    resolve(response) {\r\n      const { data, status, request, config } = response;\r\n      const { messageCode, message } = data || {};\r\n\r\n      cancelRequest.allowRequest(config); // 请求取消\r\n\r\n      cacheRequest.responseInterceptor(response) // 请求缓存\r\n\r\n      if (config.loading) (0,_http_utils__WEBPACK_IMPORTED_MODULE_4__.actionLoading)(-1); // 全局loading\r\n\r\n      return messageCode === 200\r\n        ? Promise.resolve(config.withOut ? data : data.data) // 控制返回外层数据还是内层\r\n        : Promise.reject(data);\r\n    },\r\n    reject(error) {\r\n      const { config, status } = error;\r\n\r\n      // 请求被取消的情况(分两种: 1.被缓存取消  2.被重复请求取消)\r\n      if (axios__WEBPACK_IMPORTED_MODULE_0___default().isCancel(error)) {\r\n        const { message } = error;\r\n        return message.expire ? Promise.resolve(message.data) : console.log(message);\r\n      }\r\n\r\n      cancelRequest.allowRequest(config); // 请求取消\r\n\r\n      if (config.loading) (0,_http_utils__WEBPACK_IMPORTED_MODULE_4__.actionLoading)(-1); // 全局loading\r\n\r\n      if (config.white) return Promise.resolve('白名单'); // 白名单\r\n\r\n      (0,_http_utils__WEBPACK_IMPORTED_MODULE_4__.axiosRetryInterceptor)(error, _http_axios__WEBPACK_IMPORTED_MODULE_1__.instanceA) // 请求错误重连\r\n\r\n      return Promise.reject(error);\r\n    },\r\n  },\r\n];\r\n\r\n\r\n// --------------------------------- 给axios添加请求,响应拦截 ---------------------------------\r\nrequestInterceptors.forEach(({ resolve, reject }) => {\r\n  _http_axios__WEBPACK_IMPORTED_MODULE_1__.instanceA.interceptors.request.use(resolve, reject);\r\n  _http_axios__WEBPACK_IMPORTED_MODULE_1__.instanceB.interceptors.request.use(resolve, reject);\r\n});\r\nresponseInterceptors.forEach(({ resolve, reject }) => {\r\n  _http_axios__WEBPACK_IMPORTED_MODULE_1__.instanceA.interceptors.response.use(resolve, reject);\r\n  _http_axios__WEBPACK_IMPORTED_MODULE_1__.instanceB.interceptors.response.use(resolve, reject);\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ instanceA: _http_axios__WEBPACK_IMPORTED_MODULE_1__.instanceA, instanceB: _http_axios__WEBPACK_IMPORTED_MODULE_1__.instanceB });\r\n\r\n\r\n\n\n//# sourceURL=webpack://cheng/./http/http_interceptor.js?");

/***/ }),

/***/ "./http/http_utils.js":
/*!****************************!*\
  !*** ./http/http_utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"actionLoading\": () => (/* binding */ actionLoading),\n/* harmony export */   \"axiosRetryInterceptor\": () => (/* binding */ axiosRetryInterceptor),\n/* harmony export */   \"setPublicParams\": () => (/* binding */ setPublicParams),\n/* harmony export */   \"isJsonStr\": () => (/* binding */ isJsonStr),\n/* harmony export */   \"paramsDataStringify\": () => (/* binding */ paramsDataStringify),\n/* harmony export */   \"getNowTime\": () => (/* binding */ getNowTime),\n/* harmony export */   \"generateReqKey\": () => (/* binding */ generateReqKey)\n/* harmony export */ });\n\r\n\r\n\r\n/**\r\n * 控制全局loading\r\n * type: -1 / 1 表示加一或者减一\r\n */\r\nconst actionLoading = function (type) {\r\n  window.app.$store.commit('LOADING_COUNT', type);\r\n  if (window.app.$store.state.user.loadingCount === 0) window.app.$vux.loading.hide(); // 隐藏loading\r\n}\r\n\r\n\r\n/**\r\n * 重连\r\n * 接口报错时会在此判断是否需要重连\r\n */\r\nconst axiosRetryInterceptor = function (err, axios) {\r\n  const config = err.config;\r\n\r\n  if (!config || !config.retry) return;\r\n\r\n  config.__retryCount = config.__retryCount || 0;\r\n\r\n  if (config.__retryCount >= config.retry) {\r\n    config.__retrying = false; // 表示不在重连中\r\n    return;\r\n  }\r\n\r\n  config.__retrying = true; // 表示正在重连中,暂时屏蔽掉重复请求剔除的操作\r\n  config.__retryCount += 1;\r\n\r\n  const backoff = new Promise((resolve) => setTimeout(() => resolve(), config.retryDelay || 1000));\r\n\r\n  return backoff.then(() => axios(config));\r\n}\r\n\r\n/**\r\n * 添加公共参数\r\n * 需要根据实际使用情况自定义\r\n */\r\nconst setPublicParams = function (config) {\r\n  const { url, data, params, headers, method } = config;\r\n\r\n  // 为某些接口添加公共的参数 - 带有common的路径添加公共参数\r\n  const arr = url.split('/');\r\n  if (arr && arr[1] === 'common') {\r\n    const stamp = Date.now();\r\n    headers.timestamp = stamp;\r\n    headers.signatureKey = window.app.$jsrsa.signature(stamp.toString());\r\n  }\r\n\r\n  // 为某些接口添加公共的参数 - 带有acceptance的路径添加公共参数\r\n  if (arr && arr[1] === 'acceptance') {\r\n    const id = window.app.$options.store.state.organizeRegister.preAcptId || 123;\r\n    if (method === 'get') {\r\n      params = { ...params, preAcptId: id };\r\n    } else if (method === 'post') {\r\n      data = { ...data, preAcptId: id };\r\n    }\r\n  }\r\n}\r\n\r\n\r\n/**\r\n * 判断一个字符串是否为JSON字符串\r\n */\r\nconst isJsonStr = function () {\r\n  if (typeof str == 'string') {\r\n    try {\r\n      var obj = JSON.parse(str);\r\n      if (typeof obj == 'object' && obj) {\r\n        return true;\r\n      } else {\r\n        return false;\r\n      }\r\n    } catch (e) {\r\n      console.log('error：' + str + '!!!' + e);\r\n      return false;\r\n    }\r\n  }\r\n};\r\n\r\n\r\n/**\r\n * 格式化参数\r\n * *** 默认会屏蔽时间戳 ***\r\n */\r\nconst paramsDataStringify = function (params) {\r\n  if (params && typeof params === 'object') {\r\n    const obj = Object.keys(params)\r\n    return obj.reduce((sum, key, index) => {\r\n      if (key === '_') return sum;\r\n      sum += `${key}=${params[key]}${obj.length - 1 === index ? '' : '&'}`;\r\n      return sum;\r\n    }, '');\r\n  }\r\n  return null;\r\n}\r\n\r\n\r\n/**\r\n * 获取当前时间戳\r\n */\r\nconst getNowTime = function () {\r\n  return new Date().getTime();\r\n}\r\n\r\n/**\r\n * 生成唯一Key\r\n */\r\nconst generateReqKey = function (config) {\r\n  // 响应的时候，response.config 中的data 是一个JSON字符串，所以需要转换一下\r\n  if (config && config.data && isJsonStr(config.data)) {\r\n    config.data = JSON.parse(config.data);\r\n  }\r\n  const { method, baseURL, url, params, data } = config; // 请求方式，参数，请求地址，\r\n  return [method, baseURL, url, paramsDataStringify(params), paramsDataStringify(data)].join('&'); // 拼接\r\n}\r\n\n\n//# sourceURL=webpack://cheng/./http/http_utils.js?");

/***/ }),

/***/ "./http/index.js":
/*!***********************!*\
  !*** ./http/index.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_interceptor */ \"./http/http_interceptor.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  createApis(urls, httpType) {\r\n    return Object.keys(urls).reduce((sumApi, key) => {\r\n      const orginalOption = urls[key];\r\n      if (!orginalOption.url) {\r\n        sumApi[key] = this.createApis(orginalOption, httpType);\r\n      } else {\r\n        sumApi[key] = (data, options) => { // 注意:  这里也可以在调用的时候配置,可以直接覆盖默认的 !!!!!!!!!!!!!\r\n          const method = (orginalOption.method || 'GET').toUpperCase();\r\n          options = { ...orginalOption, ...options };\r\n          switch (method) {\r\n            case 'POST':\r\n              options.data = data;\r\n              break;\r\n            case 'GET':\r\n              options.params = data || {};\r\n              break;\r\n          }\r\n          return httpType.request(options);\r\n        };\r\n      }\r\n      return sumApi;\r\n    }, {});\r\n  },\r\n\r\n  init(Vue, urls) {\r\n    Vue.$http = this.createApis(urls, _http_interceptor__WEBPACK_IMPORTED_MODULE_0__.instanceA);\r\n    Vue.$httpOrg = this.createApis(urls, _http_interceptor__WEBPACK_IMPORTED_MODULE_0__.instanceB);\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://cheng/./http/index.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _http_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http/index */ \"./http/index.js\");\n/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apis */ \"./apis/index.js\");\n\r\n\r\n\r\n_http_index__WEBPACK_IMPORTED_MODULE_0__.default.init(window, _apis__WEBPACK_IMPORTED_MODULE_1__.default)\r\n\r\n\r\nwindow.$http.home.getA().then(res => {\r\n  console.log(res);\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://cheng/./index.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/index.js":
/*!***************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./lib/axios */ \"./node_modules/_axios@0.21.4@axios/lib/axios.js\");\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/index.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/adapters/xhr.js":
/*!**************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/adapters/xhr.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/_axios@0.21.4@axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"./node_modules/_axios@0.21.4@axios/lib/core/settle.js\");\nvar cookies = __webpack_require__(/*! ./../helpers/cookies */ \"./node_modules/_axios@0.21.4@axios/lib/helpers/cookies.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"./node_modules/_axios@0.21.4@axios/lib/helpers/buildURL.js\");\nvar buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ \"./node_modules/_axios@0.21.4@axios/lib/core/buildFullPath.js\");\nvar parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ \"./node_modules/_axios@0.21.4@axios/lib/helpers/parseHeaders.js\");\nvar isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ \"./node_modules/_axios@0.21.4@axios/lib/helpers/isURLSameOrigin.js\");\nvar createError = __webpack_require__(/*! ../core/createError */ \"./node_modules/_axios@0.21.4@axios/lib/core/createError.js\");\n\nmodule.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    var requestData = config.data;\n    var requestHeaders = config.headers;\n    var responseType = config.responseType;\n\n    if (utils.isFormData(requestData)) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    var request = new XMLHttpRequest();\n\n    // HTTP basic authentication\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\n    }\n\n    var fullPath = buildFullPath(config.baseURL, config.url);\n    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);\n\n    // Set the request timeout in MS\n    request.timeout = config.timeout;\n\n    function onloadend() {\n      if (!request) {\n        return;\n      }\n      // Prepare the response\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\n      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?\n        request.responseText : request.response;\n      var response = {\n        data: responseData,\n        status: request.status,\n        statusText: request.statusText,\n        headers: responseHeaders,\n        config: config,\n        request: request\n      };\n\n      settle(resolve, reject, response);\n\n      // Clean up request\n      request = null;\n    }\n\n    if ('onloadend' in request) {\n      // Use onloadend if available\n      request.onloadend = onloadend;\n    } else {\n      // Listen for ready state to emulate onloadend\n      request.onreadystatechange = function handleLoad() {\n        if (!request || request.readyState !== 4) {\n          return;\n        }\n\n        // The request errored out and we didn't get a response, this will be\n        // handled by onerror instead\n        // With one exception: request that using file: protocol, most browsers\n        // will return status as 0 even though it's a successful request\n        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\n          return;\n        }\n        // readystate handler is calling before onerror or ontimeout handlers,\n        // so we should call onloadend on the next 'tick'\n        setTimeout(onloadend);\n      };\n    }\n\n    // Handle browser request cancellation (as opposed to a manual cancellation)\n    request.onabort = function handleAbort() {\n      if (!request) {\n        return;\n      }\n\n      reject(createError('Request aborted', config, 'ECONNABORTED', request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it's a network error\n      reject(createError('Network Error', config, null, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';\n      if (config.timeoutErrorMessage) {\n        timeoutErrorMessage = config.timeoutErrorMessage;\n      }\n      reject(createError(\n        timeoutErrorMessage,\n        config,\n        config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',\n        request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Add xsrf header\n    // This is only done if running in a standard browser environment.\n    // Specifically not if we're in a web worker, or react-native.\n    if (utils.isStandardBrowserEnv()) {\n      // Add xsrf header\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?\n        cookies.read(config.xsrfCookieName) :\n        undefined;\n\n      if (xsrfValue) {\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\n      }\n    }\n\n    // Add headers to the request\n    if ('setRequestHeader' in request) {\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\n          // Remove Content-Type if data is undefined\n          delete requestHeaders[key];\n        } else {\n          // Otherwise add header to the request\n          request.setRequestHeader(key, val);\n        }\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (!utils.isUndefined(config.withCredentials)) {\n      request.withCredentials = !!config.withCredentials;\n    }\n\n    // Add responseType to request if needed\n    if (responseType && responseType !== 'json') {\n      request.responseType = config.responseType;\n    }\n\n    // Handle progress if needed\n    if (typeof config.onDownloadProgress === 'function') {\n      request.addEventListener('progress', config.onDownloadProgress);\n    }\n\n    // Not all browsers support upload events\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\n      request.upload.addEventListener('progress', config.onUploadProgress);\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (!request) {\n          return;\n        }\n\n        request.abort();\n        reject(cancel);\n        // Clean up request\n        request = null;\n      });\n    }\n\n    if (!requestData) {\n      requestData = null;\n    }\n\n    // Send the request\n    request.send(requestData);\n  });\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/adapters/xhr.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/axios.js":
/*!*******************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/axios.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/_axios@0.21.4@axios/lib/utils.js\");\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/_axios@0.21.4@axios/lib/helpers/bind.js\");\nvar Axios = __webpack_require__(/*! ./core/Axios */ \"./node_modules/_axios@0.21.4@axios/lib/core/Axios.js\");\nvar mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ \"./node_modules/_axios@0.21.4@axios/lib/core/mergeConfig.js\");\nvar defaults = __webpack_require__(/*! ./defaults */ \"./node_modules/_axios@0.21.4@axios/lib/defaults.js\");\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n * @return {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  var context = new Axios(defaultConfig);\n  var instance = bind(Axios.prototype.request, context);\n\n  // Copy axios.prototype to instance\n  utils.extend(instance, Axios.prototype, context);\n\n  // Copy context to instance\n  utils.extend(instance, context);\n\n  return instance;\n}\n\n// Create the default instance to be exported\nvar axios = createInstance(defaults);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = Axios;\n\n// Factory for creating new instances\naxios.create = function create(instanceConfig) {\n  return createInstance(mergeConfig(axios.defaults, instanceConfig));\n};\n\n// Expose Cancel & CancelToken\naxios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ \"./node_modules/_axios@0.21.4@axios/lib/cancel/Cancel.js\");\naxios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ \"./node_modules/_axios@0.21.4@axios/lib/cancel/CancelToken.js\");\naxios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ \"./node_modules/_axios@0.21.4@axios/lib/cancel/isCancel.js\");\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\naxios.spread = __webpack_require__(/*! ./helpers/spread */ \"./node_modules/_axios@0.21.4@axios/lib/helpers/spread.js\");\n\n// Expose isAxiosError\naxios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ \"./node_modules/_axios@0.21.4@axios/lib/helpers/isAxiosError.js\");\n\nmodule.exports = axios;\n\n// Allow use of default import syntax in TypeScript\nmodule.exports.default = axios;\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/axios.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/cancel/Cancel.js":
/*!***************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/cancel/Cancel.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * A `Cancel` is an object that is thrown when an operation is canceled.\n *\n * @class\n * @param {string=} message The message.\n */\nfunction Cancel(message) {\n  this.message = message;\n}\n\nCancel.prototype.toString = function toString() {\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\n};\n\nCancel.prototype.__CANCEL__ = true;\n\nmodule.exports = Cancel;\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/cancel/Cancel.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/cancel/CancelToken.js":
/*!********************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/cancel/CancelToken.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar Cancel = __webpack_require__(/*! ./Cancel */ \"./node_modules/_axios@0.21.4@axios/lib/cancel/Cancel.js\");\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @class\n * @param {Function} executor The executor function.\n */\nfunction CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n\n  var resolvePromise;\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n\n  var token = this;\n  executor(function cancel(message) {\n    if (token.reason) {\n      // Cancellation has already been requested\n      return;\n    }\n\n    token.reason = new Cancel(message);\n    resolvePromise(token.reason);\n  });\n}\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\n  if (this.reason) {\n    throw this.reason;\n  }\n};\n\n/**\n * Returns an object that contains a new `CancelToken` and a function that, when called,\n * cancels the `CancelToken`.\n */\nCancelToken.source = function source() {\n  var cancel;\n  var token = new CancelToken(function executor(c) {\n    cancel = c;\n  });\n  return {\n    token: token,\n    cancel: cancel\n  };\n};\n\nmodule.exports = CancelToken;\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/cancel/CancelToken.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/cancel/isCancel.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/cancel/isCancel.js ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/cancel/isCancel.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/core/Axios.js":
/*!************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/core/Axios.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/_axios@0.21.4@axios/lib/utils.js\");\nvar buildURL = __webpack_require__(/*! ../helpers/buildURL */ \"./node_modules/_axios@0.21.4@axios/lib/helpers/buildURL.js\");\nvar InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ \"./node_modules/_axios@0.21.4@axios/lib/core/InterceptorManager.js\");\nvar dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ \"./node_modules/_axios@0.21.4@axios/lib/core/dispatchRequest.js\");\nvar mergeConfig = __webpack_require__(/*! ./mergeConfig */ \"./node_modules/_axios@0.21.4@axios/lib/core/mergeConfig.js\");\nvar validator = __webpack_require__(/*! ../helpers/validator */ \"./node_modules/_axios@0.21.4@axios/lib/helpers/validator.js\");\n\nvar validators = validator.validators;\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n */\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager()\n  };\n}\n\n/**\n * Dispatch a request\n *\n * @param {Object} config The config specific for this request (merged with this.defaults)\n */\nAxios.prototype.request = function request(config) {\n  /*eslint no-param-reassign:0*/\n  // Allow for axios('example/url'[, config]) a la fetch API\n  if (typeof config === 'string') {\n    config = arguments[1] || {};\n    config.url = arguments[0];\n  } else {\n    config = config || {};\n  }\n\n  config = mergeConfig(this.defaults, config);\n\n  // Set config.method\n  if (config.method) {\n    config.method = config.method.toLowerCase();\n  } else if (this.defaults.method) {\n    config.method = this.defaults.method.toLowerCase();\n  } else {\n    config.method = 'get';\n  }\n\n  var transitional = config.transitional;\n\n  if (transitional !== undefined) {\n    validator.assertOptions(transitional, {\n      silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),\n      forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),\n      clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')\n    }, false);\n  }\n\n  // filter out skipped interceptors\n  var requestInterceptorChain = [];\n  var synchronousRequestInterceptors = true;\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {\n      return;\n    }\n\n    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;\n\n    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  var responseInterceptorChain = [];\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  var promise;\n\n  if (!synchronousRequestInterceptors) {\n    var chain = [dispatchRequest, undefined];\n\n    Array.prototype.unshift.apply(chain, requestInterceptorChain);\n    chain = chain.concat(responseInterceptorChain);\n\n    promise = Promise.resolve(config);\n    while (chain.length) {\n      promise = promise.then(chain.shift(), chain.shift());\n    }\n\n    return promise;\n  }\n\n\n  var newConfig = config;\n  while (requestInterceptorChain.length) {\n    var onFulfilled = requestInterceptorChain.shift();\n    var onRejected = requestInterceptorChain.shift();\n    try {\n      newConfig = onFulfilled(newConfig);\n    } catch (error) {\n      onRejected(error);\n      break;\n    }\n  }\n\n  try {\n    promise = dispatchRequest(newConfig);\n  } catch (error) {\n    return Promise.reject(error);\n  }\n\n  while (responseInterceptorChain.length) {\n    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());\n  }\n\n  return promise;\n};\n\nAxios.prototype.getUri = function getUri(config) {\n  config = mergeConfig(this.defaults, config);\n  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\\?/, '');\n};\n\n// Provide aliases for supported request methods\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, config) {\n    return this.request(mergeConfig(config || {}, {\n      method: method,\n      url: url,\n      data: (config || {}).data\n    }));\n  };\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, data, config) {\n    return this.request(mergeConfig(config || {}, {\n      method: method,\n      url: url,\n      data: data\n    }));\n  };\n});\n\nmodule.exports = Axios;\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/core/Axios.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/core/InterceptorManager.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/core/InterceptorManager.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/_axios@0.21.4@axios/lib/utils.js\");\n\nfunction InterceptorManager() {\n  this.handlers = [];\n}\n\n/**\n * Add a new interceptor to the stack\n *\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\n * @param {Function} rejected The function to handle `reject` for a `Promise`\n *\n * @return {Number} An ID used to remove interceptor later\n */\nInterceptorManager.prototype.use = function use(fulfilled, rejected, options) {\n  this.handlers.push({\n    fulfilled: fulfilled,\n    rejected: rejected,\n    synchronous: options ? options.synchronous : false,\n    runWhen: options ? options.runWhen : null\n  });\n  return this.handlers.length - 1;\n};\n\n/**\n * Remove an interceptor from the stack\n *\n * @param {Number} id The ID that was returned by `use`\n */\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id]) {\n    this.handlers[id] = null;\n  }\n};\n\n/**\n * Iterate over all the registered interceptors\n *\n * This method is particularly useful for skipping over any\n * interceptors that may have become `null` calling `eject`.\n *\n * @param {Function} fn The function to call for each interceptor\n */\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, function forEachHandler(h) {\n    if (h !== null) {\n      fn(h);\n    }\n  });\n};\n\nmodule.exports = InterceptorManager;\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/core/InterceptorManager.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/core/buildFullPath.js":
/*!********************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/core/buildFullPath.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ \"./node_modules/_axios@0.21.4@axios/lib/helpers/isAbsoluteURL.js\");\nvar combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ \"./node_modules/_axios@0.21.4@axios/lib/helpers/combineURLs.js\");\n\n/**\n * Creates a new URL by combining the baseURL with the requestedURL,\n * only when the requestedURL is not already an absolute URL.\n * If the requestURL is absolute, this function returns the requestedURL untouched.\n *\n * @param {string} baseURL The base URL\n * @param {string} requestedURL Absolute or relative URL to combine\n * @returns {string} The combined full path\n */\nmodule.exports = function buildFullPath(baseURL, requestedURL) {\n  if (baseURL && !isAbsoluteURL(requestedURL)) {\n    return combineURLs(baseURL, requestedURL);\n  }\n  return requestedURL;\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/core/buildFullPath.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/core/createError.js":
/*!******************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/core/createError.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar enhanceError = __webpack_require__(/*! ./enhanceError */ \"./node_modules/_axios@0.21.4@axios/lib/core/enhanceError.js\");\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The created error.\n */\nmodule.exports = function createError(message, config, code, request, response) {\n  var error = new Error(message);\n  return enhanceError(error, config, code, request, response);\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/core/createError.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/core/dispatchRequest.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/core/dispatchRequest.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/_axios@0.21.4@axios/lib/utils.js\");\nvar transformData = __webpack_require__(/*! ./transformData */ \"./node_modules/_axios@0.21.4@axios/lib/core/transformData.js\");\nvar isCancel = __webpack_require__(/*! ../cancel/isCancel */ \"./node_modules/_axios@0.21.4@axios/lib/cancel/isCancel.js\");\nvar defaults = __webpack_require__(/*! ../defaults */ \"./node_modules/_axios@0.21.4@axios/lib/defaults.js\");\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n * @returns {Promise} The Promise to be fulfilled\n */\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  // Ensure headers exist\n  config.headers = config.headers || {};\n\n  // Transform request data\n  config.data = transformData.call(\n    config,\n    config.data,\n    config.headers,\n    config.transformRequest\n  );\n\n  // Flatten headers\n  config.headers = utils.merge(\n    config.headers.common || {},\n    config.headers[config.method] || {},\n    config.headers\n  );\n\n  utils.forEach(\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\n    function cleanHeaderConfig(method) {\n      delete config.headers[method];\n    }\n  );\n\n  var adapter = config.adapter || defaults.adapter;\n\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = transformData.call(\n      config,\n      response.data,\n      response.headers,\n      config.transformResponse\n    );\n\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!isCancel(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = transformData.call(\n          config,\n          reason.response.data,\n          reason.response.headers,\n          config.transformResponse\n        );\n      }\n    }\n\n    return Promise.reject(reason);\n  });\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/core/dispatchRequest.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/core/enhanceError.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/core/enhanceError.js ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Update an Error with the specified config, error code, and response.\n *\n * @param {Error} error The error to update.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The error.\n */\nmodule.exports = function enhanceError(error, config, code, request, response) {\n  error.config = config;\n  if (code) {\n    error.code = code;\n  }\n\n  error.request = request;\n  error.response = response;\n  error.isAxiosError = true;\n\n  error.toJSON = function toJSON() {\n    return {\n      // Standard\n      message: this.message,\n      name: this.name,\n      // Microsoft\n      description: this.description,\n      number: this.number,\n      // Mozilla\n      fileName: this.fileName,\n      lineNumber: this.lineNumber,\n      columnNumber: this.columnNumber,\n      stack: this.stack,\n      // Axios\n      config: this.config,\n      code: this.code\n    };\n  };\n  return error;\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/core/enhanceError.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/core/mergeConfig.js":
/*!******************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/core/mergeConfig.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/_axios@0.21.4@axios/lib/utils.js\");\n\n/**\n * Config-specific merge-function which creates a new config-object\n * by merging two configuration objects together.\n *\n * @param {Object} config1\n * @param {Object} config2\n * @returns {Object} New object resulting from merging config2 to config1\n */\nmodule.exports = function mergeConfig(config1, config2) {\n  // eslint-disable-next-line no-param-reassign\n  config2 = config2 || {};\n  var config = {};\n\n  var valueFromConfig2Keys = ['url', 'method', 'data'];\n  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];\n  var defaultToConfig2Keys = [\n    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',\n    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',\n    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',\n    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',\n    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'\n  ];\n  var directMergeKeys = ['validateStatus'];\n\n  function getMergedValue(target, source) {\n    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {\n      return utils.merge(target, source);\n    } else if (utils.isPlainObject(source)) {\n      return utils.merge({}, source);\n    } else if (utils.isArray(source)) {\n      return source.slice();\n    }\n    return source;\n  }\n\n  function mergeDeepProperties(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(config1[prop], config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  }\n\n  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(undefined, config2[prop]);\n    }\n  });\n\n  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);\n\n  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(undefined, config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  });\n\n  utils.forEach(directMergeKeys, function merge(prop) {\n    if (prop in config2) {\n      config[prop] = getMergedValue(config1[prop], config2[prop]);\n    } else if (prop in config1) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  });\n\n  var axiosKeys = valueFromConfig2Keys\n    .concat(mergeDeepPropertiesKeys)\n    .concat(defaultToConfig2Keys)\n    .concat(directMergeKeys);\n\n  var otherKeys = Object\n    .keys(config1)\n    .concat(Object.keys(config2))\n    .filter(function filterAxiosKeys(key) {\n      return axiosKeys.indexOf(key) === -1;\n    });\n\n  utils.forEach(otherKeys, mergeDeepProperties);\n\n  return config;\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/core/mergeConfig.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/core/settle.js":
/*!*************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/core/settle.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar createError = __webpack_require__(/*! ./createError */ \"./node_modules/_axios@0.21.4@axios/lib/core/createError.js\");\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n */\nmodule.exports = function settle(resolve, reject, response) {\n  var validateStatus = response.config.validateStatus;\n  if (!response.status || !validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(createError(\n      'Request failed with status code ' + response.status,\n      response.config,\n      null,\n      response.request,\n      response\n    ));\n  }\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/core/settle.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/core/transformData.js":
/*!********************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/core/transformData.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/_axios@0.21.4@axios/lib/utils.js\");\nvar defaults = __webpack_require__(/*! ./../defaults */ \"./node_modules/_axios@0.21.4@axios/lib/defaults.js\");\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Object|String} data The data to be transformed\n * @param {Array} headers The headers for the request or response\n * @param {Array|Function} fns A single function or Array of functions\n * @returns {*} The resulting transformed data\n */\nmodule.exports = function transformData(data, headers, fns) {\n  var context = this || defaults;\n  /*eslint no-param-reassign:0*/\n  utils.forEach(fns, function transform(fn) {\n    data = fn.call(context, data, headers);\n  });\n\n  return data;\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/core/transformData.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/defaults.js":
/*!**********************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/defaults.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/_axios@0.21.4@axios/lib/utils.js\");\nvar normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ \"./node_modules/_axios@0.21.4@axios/lib/helpers/normalizeHeaderName.js\");\nvar enhanceError = __webpack_require__(/*! ./core/enhanceError */ \"./node_modules/_axios@0.21.4@axios/lib/core/enhanceError.js\");\n\nvar DEFAULT_CONTENT_TYPE = {\n  'Content-Type': 'application/x-www-form-urlencoded'\n};\n\nfunction setContentTypeIfUnset(headers, value) {\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\n    headers['Content-Type'] = value;\n  }\n}\n\nfunction getDefaultAdapter() {\n  var adapter;\n  if (typeof XMLHttpRequest !== 'undefined') {\n    // For browsers use XHR adapter\n    adapter = __webpack_require__(/*! ./adapters/xhr */ \"./node_modules/_axios@0.21.4@axios/lib/adapters/xhr.js\");\n  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {\n    // For node use HTTP adapter\n    adapter = __webpack_require__(/*! ./adapters/http */ \"./node_modules/_axios@0.21.4@axios/lib/adapters/xhr.js\");\n  }\n  return adapter;\n}\n\nfunction stringifySafely(rawValue, parser, encoder) {\n  if (utils.isString(rawValue)) {\n    try {\n      (parser || JSON.parse)(rawValue);\n      return utils.trim(rawValue);\n    } catch (e) {\n      if (e.name !== 'SyntaxError') {\n        throw e;\n      }\n    }\n  }\n\n  return (encoder || JSON.stringify)(rawValue);\n}\n\nvar defaults = {\n\n  transitional: {\n    silentJSONParsing: true,\n    forcedJSONParsing: true,\n    clarifyTimeoutError: false\n  },\n\n  adapter: getDefaultAdapter(),\n\n  transformRequest: [function transformRequest(data, headers) {\n    normalizeHeaderName(headers, 'Accept');\n    normalizeHeaderName(headers, 'Content-Type');\n\n    if (utils.isFormData(data) ||\n      utils.isArrayBuffer(data) ||\n      utils.isBuffer(data) ||\n      utils.isStream(data) ||\n      utils.isFile(data) ||\n      utils.isBlob(data)\n    ) {\n      return data;\n    }\n    if (utils.isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (utils.isURLSearchParams(data)) {\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\n      return data.toString();\n    }\n    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {\n      setContentTypeIfUnset(headers, 'application/json');\n      return stringifySafely(data);\n    }\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    var transitional = this.transitional;\n    var silentJSONParsing = transitional && transitional.silentJSONParsing;\n    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;\n    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';\n\n    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {\n      try {\n        return JSON.parse(data);\n      } catch (e) {\n        if (strictJSONParsing) {\n          if (e.name === 'SyntaxError') {\n            throw enhanceError(e, this, 'E_JSON_PARSE');\n          }\n          throw e;\n        }\n      }\n    }\n\n    return data;\n  }],\n\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n\n  xsrfCookieName: 'XSRF-TOKEN',\n  xsrfHeaderName: 'X-XSRF-TOKEN',\n\n  maxContentLength: -1,\n  maxBodyLength: -1,\n\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  }\n};\n\ndefaults.headers = {\n  common: {\n    'Accept': 'application/json, text/plain, */*'\n  }\n};\n\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\n  defaults.headers[method] = {};\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n});\n\nmodule.exports = defaults;\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/defaults.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/helpers/bind.js":
/*!**************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/helpers/bind.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function bind(fn, thisArg) {\n  return function wrap() {\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n    return fn.apply(thisArg, args);\n  };\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/helpers/bind.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/helpers/buildURL.js":
/*!******************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/helpers/buildURL.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/_axios@0.21.4@axios/lib/utils.js\");\n\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @returns {string} The formatted url\n */\nmodule.exports = function buildURL(url, params, paramsSerializer) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n\n  var serializedParams;\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params);\n  } else if (utils.isURLSearchParams(params)) {\n    serializedParams = params.toString();\n  } else {\n    var parts = [];\n\n    utils.forEach(params, function serialize(val, key) {\n      if (val === null || typeof val === 'undefined') {\n        return;\n      }\n\n      if (utils.isArray(val)) {\n        key = key + '[]';\n      } else {\n        val = [val];\n      }\n\n      utils.forEach(val, function parseValue(v) {\n        if (utils.isDate(v)) {\n          v = v.toISOString();\n        } else if (utils.isObject(v)) {\n          v = JSON.stringify(v);\n        }\n        parts.push(encode(key) + '=' + encode(v));\n      });\n    });\n\n    serializedParams = parts.join('&');\n  }\n\n  if (serializedParams) {\n    var hashmarkIndex = url.indexOf('#');\n    if (hashmarkIndex !== -1) {\n      url = url.slice(0, hashmarkIndex);\n    }\n\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/helpers/buildURL.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/helpers/combineURLs.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/helpers/combineURLs.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n * @returns {string} The combined URL\n */\nmodule.exports = function combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/helpers/combineURLs.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/helpers/cookies.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/helpers/cookies.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/_axios@0.21.4@axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs support document.cookie\n    (function standardBrowserEnv() {\n      return {\n        write: function write(name, value, expires, path, domain, secure) {\n          var cookie = [];\n          cookie.push(name + '=' + encodeURIComponent(value));\n\n          if (utils.isNumber(expires)) {\n            cookie.push('expires=' + new Date(expires).toGMTString());\n          }\n\n          if (utils.isString(path)) {\n            cookie.push('path=' + path);\n          }\n\n          if (utils.isString(domain)) {\n            cookie.push('domain=' + domain);\n          }\n\n          if (secure === true) {\n            cookie.push('secure');\n          }\n\n          document.cookie = cookie.join('; ');\n        },\n\n        read: function read(name) {\n          var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n          return (match ? decodeURIComponent(match[3]) : null);\n        },\n\n        remove: function remove(name) {\n          this.write(name, '', Date.now() - 86400000);\n        }\n      };\n    })() :\n\n  // Non standard browser env (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return {\n        write: function write() {},\n        read: function read() { return null; },\n        remove: function remove() {}\n      };\n    })()\n);\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/helpers/cookies.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/helpers/isAbsoluteURL.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/helpers/isAbsoluteURL.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nmodule.exports = function isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with \"<scheme>://\" or \"//\" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url);\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/helpers/isAbsoluteURL.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/helpers/isAxiosError.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/helpers/isAxiosError.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Determines whether the payload is an error thrown by Axios\n *\n * @param {*} payload The value to test\n * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false\n */\nmodule.exports = function isAxiosError(payload) {\n  return (typeof payload === 'object') && (payload.isAxiosError === true);\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/helpers/isAxiosError.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/helpers/isURLSameOrigin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/helpers/isURLSameOrigin.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/_axios@0.21.4@axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs have full support of the APIs needed to test\n  // whether the request URL is of the same origin as current location.\n    (function standardBrowserEnv() {\n      var msie = /(msie|trident)/i.test(navigator.userAgent);\n      var urlParsingNode = document.createElement('a');\n      var originURL;\n\n      /**\n    * Parse a URL to discover it's components\n    *\n    * @param {String} url The URL to be parsed\n    * @returns {Object}\n    */\n      function resolveURL(url) {\n        var href = url;\n\n        if (msie) {\n        // IE needs attribute set twice to normalize properties\n          urlParsingNode.setAttribute('href', href);\n          href = urlParsingNode.href;\n        }\n\n        urlParsingNode.setAttribute('href', href);\n\n        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n        return {\n          href: urlParsingNode.href,\n          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n          host: urlParsingNode.host,\n          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n          hostname: urlParsingNode.hostname,\n          port: urlParsingNode.port,\n          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\n            urlParsingNode.pathname :\n            '/' + urlParsingNode.pathname\n        };\n      }\n\n      originURL = resolveURL(window.location.href);\n\n      /**\n    * Determine if a URL shares the same origin as the current location\n    *\n    * @param {String} requestURL The URL to test\n    * @returns {boolean} True if URL shares the same origin, otherwise false\n    */\n      return function isURLSameOrigin(requestURL) {\n        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n        return (parsed.protocol === originURL.protocol &&\n            parsed.host === originURL.host);\n      };\n    })() :\n\n  // Non standard browser envs (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return function isURLSameOrigin() {\n        return true;\n      };\n    })()\n);\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/helpers/isURLSameOrigin.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/helpers/normalizeHeaderName.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/helpers/normalizeHeaderName.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/_axios@0.21.4@axios/lib/utils.js\");\n\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\n  utils.forEach(headers, function processHeader(value, name) {\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\n      headers[normalizedName] = value;\n      delete headers[name];\n    }\n  });\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/helpers/normalizeHeaderName.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/helpers/parseHeaders.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/helpers/parseHeaders.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/_axios@0.21.4@axios/lib/utils.js\");\n\n// Headers whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nvar ignoreDuplicateOf = [\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n];\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} headers Headers needing to be parsed\n * @returns {Object} Headers parsed into an object\n */\nmodule.exports = function parseHeaders(headers) {\n  var parsed = {};\n  var key;\n  var val;\n  var i;\n\n  if (!headers) { return parsed; }\n\n  utils.forEach(headers.split('\\n'), function parser(line) {\n    i = line.indexOf(':');\n    key = utils.trim(line.substr(0, i)).toLowerCase();\n    val = utils.trim(line.substr(i + 1));\n\n    if (key) {\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\n        return;\n      }\n      if (key === 'set-cookie') {\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\n      } else {\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n      }\n    }\n  });\n\n  return parsed;\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/helpers/parseHeaders.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/helpers/spread.js":
/*!****************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/helpers/spread.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n * @returns {Function}\n */\nmodule.exports = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/helpers/spread.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/helpers/validator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/helpers/validator.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar pkg = __webpack_require__(/*! ./../../package.json */ \"./node_modules/_axios@0.21.4@axios/package.json\");\n\nvar validators = {};\n\n// eslint-disable-next-line func-names\n['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {\n  validators[type] = function validator(thing) {\n    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;\n  };\n});\n\nvar deprecatedWarnings = {};\nvar currentVerArr = pkg.version.split('.');\n\n/**\n * Compare package versions\n * @param {string} version\n * @param {string?} thanVersion\n * @returns {boolean}\n */\nfunction isOlderVersion(version, thanVersion) {\n  var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;\n  var destVer = version.split('.');\n  for (var i = 0; i < 3; i++) {\n    if (pkgVersionArr[i] > destVer[i]) {\n      return true;\n    } else if (pkgVersionArr[i] < destVer[i]) {\n      return false;\n    }\n  }\n  return false;\n}\n\n/**\n * Transitional option validator\n * @param {function|boolean?} validator\n * @param {string?} version\n * @param {string} message\n * @returns {function}\n */\nvalidators.transitional = function transitional(validator, version, message) {\n  var isDeprecated = version && isOlderVersion(version);\n\n  function formatMessage(opt, desc) {\n    return '[Axios v' + pkg.version + '] Transitional option \\'' + opt + '\\'' + desc + (message ? '. ' + message : '');\n  }\n\n  // eslint-disable-next-line func-names\n  return function(value, opt, opts) {\n    if (validator === false) {\n      throw new Error(formatMessage(opt, ' has been removed in ' + version));\n    }\n\n    if (isDeprecated && !deprecatedWarnings[opt]) {\n      deprecatedWarnings[opt] = true;\n      // eslint-disable-next-line no-console\n      console.warn(\n        formatMessage(\n          opt,\n          ' has been deprecated since v' + version + ' and will be removed in the near future'\n        )\n      );\n    }\n\n    return validator ? validator(value, opt, opts) : true;\n  };\n};\n\n/**\n * Assert object's properties type\n * @param {object} options\n * @param {object} schema\n * @param {boolean?} allowUnknown\n */\n\nfunction assertOptions(options, schema, allowUnknown) {\n  if (typeof options !== 'object') {\n    throw new TypeError('options must be an object');\n  }\n  var keys = Object.keys(options);\n  var i = keys.length;\n  while (i-- > 0) {\n    var opt = keys[i];\n    var validator = schema[opt];\n    if (validator) {\n      var value = options[opt];\n      var result = value === undefined || validator(value, opt, options);\n      if (result !== true) {\n        throw new TypeError('option ' + opt + ' must be ' + result);\n      }\n      continue;\n    }\n    if (allowUnknown !== true) {\n      throw Error('Unknown option ' + opt);\n    }\n  }\n}\n\nmodule.exports = {\n  isOlderVersion: isOlderVersion,\n  assertOptions: assertOptions,\n  validators: validators\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/helpers/validator.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/lib/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/lib/utils.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/_axios@0.21.4@axios/lib/helpers/bind.js\");\n\n// utils is a library of generic helper functions non-specific to axios\n\nvar toString = Object.prototype.toString;\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Array, otherwise false\n */\nfunction isArray(val) {\n  return toString.call(val) === '[object Array]';\n}\n\n/**\n * Determine if a value is undefined\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nfunction isUndefined(val) {\n  return typeof val === 'undefined';\n}\n\n/**\n * Determine if a value is a Buffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Buffer, otherwise false\n */\nfunction isBuffer(val) {\n  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)\n    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nfunction isArrayBuffer(val) {\n  return toString.call(val) === '[object ArrayBuffer]';\n}\n\n/**\n * Determine if a value is a FormData\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nfunction isFormData(val) {\n  return (typeof FormData !== 'undefined') && (val instanceof FormData);\n}\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  var result;\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a String, otherwise false\n */\nfunction isString(val) {\n  return typeof val === 'string';\n}\n\n/**\n * Determine if a value is a Number\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Number, otherwise false\n */\nfunction isNumber(val) {\n  return typeof val === 'number';\n}\n\n/**\n * Determine if a value is an Object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Object, otherwise false\n */\nfunction isObject(val) {\n  return val !== null && typeof val === 'object';\n}\n\n/**\n * Determine if a value is a plain Object\n *\n * @param {Object} val The value to test\n * @return {boolean} True if value is a plain Object, otherwise false\n */\nfunction isPlainObject(val) {\n  if (toString.call(val) !== '[object Object]') {\n    return false;\n  }\n\n  var prototype = Object.getPrototypeOf(val);\n  return prototype === null || prototype === Object.prototype;\n}\n\n/**\n * Determine if a value is a Date\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Date, otherwise false\n */\nfunction isDate(val) {\n  return toString.call(val) === '[object Date]';\n}\n\n/**\n * Determine if a value is a File\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a File, otherwise false\n */\nfunction isFile(val) {\n  return toString.call(val) === '[object File]';\n}\n\n/**\n * Determine if a value is a Blob\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nfunction isBlob(val) {\n  return toString.call(val) === '[object Blob]';\n}\n\n/**\n * Determine if a value is a Function\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nfunction isFunction(val) {\n  return toString.call(val) === '[object Function]';\n}\n\n/**\n * Determine if a value is a Stream\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nfunction isStream(val) {\n  return isObject(val) && isFunction(val.pipe);\n}\n\n/**\n * Determine if a value is a URLSearchParams object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nfunction isURLSearchParams(val) {\n  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;\n}\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n * @returns {String} The String freed of excess whitespace\n */\nfunction trim(str) {\n  return str.trim ? str.trim() : str.replace(/^\\s+|\\s+$/g, '');\n}\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n * nativescript\n *  navigator.product -> 'NativeScript' or 'NS'\n */\nfunction isStandardBrowserEnv() {\n  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||\n                                           navigator.product === 'NativeScript' ||\n                                           navigator.product === 'NS')) {\n    return false;\n  }\n  return (\n    typeof window !== 'undefined' &&\n    typeof document !== 'undefined'\n  );\n}\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n */\nfunction forEach(obj, fn) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction merge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (isPlainObject(result[key]) && isPlainObject(val)) {\n      result[key] = merge(result[key], val);\n    } else if (isPlainObject(val)) {\n      result[key] = merge({}, val);\n    } else if (isArray(val)) {\n      result[key] = val.slice();\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n * @return {Object} The resulting value of object a\n */\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === 'function') {\n      a[key] = bind(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\n/**\n * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)\n *\n * @param {string} content with BOM\n * @return {string} content value without BOM\n */\nfunction stripBOM(content) {\n  if (content.charCodeAt(0) === 0xFEFF) {\n    content = content.slice(1);\n  }\n  return content;\n}\n\nmodule.exports = {\n  isArray: isArray,\n  isArrayBuffer: isArrayBuffer,\n  isBuffer: isBuffer,\n  isFormData: isFormData,\n  isArrayBufferView: isArrayBufferView,\n  isString: isString,\n  isNumber: isNumber,\n  isObject: isObject,\n  isPlainObject: isPlainObject,\n  isUndefined: isUndefined,\n  isDate: isDate,\n  isFile: isFile,\n  isBlob: isBlob,\n  isFunction: isFunction,\n  isStream: isStream,\n  isURLSearchParams: isURLSearchParams,\n  isStandardBrowserEnv: isStandardBrowserEnv,\n  forEach: forEach,\n  merge: merge,\n  extend: extend,\n  trim: trim,\n  stripBOM: stripBOM\n};\n\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/lib/utils.js?");

/***/ }),

/***/ "./node_modules/_axios@0.21.4@axios/package.json":
/*!*******************************************************!*\
  !*** ./node_modules/_axios@0.21.4@axios/package.json ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"name\":\"axios\",\"version\":\"0.21.4\",\"description\":\"Promise based HTTP client for the browser and node.js\",\"main\":\"index.js\",\"scripts\":{\"test\":\"grunt test\",\"start\":\"node ./sandbox/server.js\",\"build\":\"NODE_ENV=production grunt build\",\"preversion\":\"npm test\",\"version\":\"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json\",\"postversion\":\"git push && git push --tags\",\"examples\":\"node ./examples/server.js\",\"coveralls\":\"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js\",\"fix\":\"eslint --fix lib/**/*.js\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/axios/axios.git\"},\"keywords\":[\"xhr\",\"http\",\"ajax\",\"promise\",\"node\"],\"author\":\"Matt Zabriskie\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/axios/axios/issues\"},\"homepage\":\"https://axios-http.com\",\"devDependencies\":{\"coveralls\":\"^3.0.0\",\"es6-promise\":\"^4.2.4\",\"grunt\":\"^1.3.0\",\"grunt-banner\":\"^0.6.0\",\"grunt-cli\":\"^1.2.0\",\"grunt-contrib-clean\":\"^1.1.0\",\"grunt-contrib-watch\":\"^1.0.0\",\"grunt-eslint\":\"^23.0.0\",\"grunt-karma\":\"^4.0.0\",\"grunt-mocha-test\":\"^0.13.3\",\"grunt-ts\":\"^6.0.0-beta.19\",\"grunt-webpack\":\"^4.0.2\",\"istanbul-instrumenter-loader\":\"^1.0.0\",\"jasmine-core\":\"^2.4.1\",\"karma\":\"^6.3.2\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-firefox-launcher\":\"^2.1.0\",\"karma-jasmine\":\"^1.1.1\",\"karma-jasmine-ajax\":\"^0.1.13\",\"karma-safari-launcher\":\"^1.0.0\",\"karma-sauce-launcher\":\"^4.3.6\",\"karma-sinon\":\"^1.0.5\",\"karma-sourcemap-loader\":\"^0.3.8\",\"karma-webpack\":\"^4.0.2\",\"load-grunt-tasks\":\"^3.5.2\",\"minimist\":\"^1.2.0\",\"mocha\":\"^8.2.1\",\"sinon\":\"^4.5.0\",\"terser-webpack-plugin\":\"^4.2.3\",\"typescript\":\"^4.0.5\",\"url-search-params\":\"^0.10.0\",\"webpack\":\"^4.44.2\",\"webpack-dev-server\":\"^3.11.0\"},\"browser\":{\"./lib/adapters/http.js\":\"./lib/adapters/xhr.js\"},\"jsdelivr\":\"dist/axios.min.js\",\"unpkg\":\"dist/axios.min.js\",\"typings\":\"./index.d.ts\",\"dependencies\":{\"follow-redirects\":\"^1.14.0\"},\"bundlesize\":[{\"path\":\"./dist/axios.min.js\",\"threshold\":\"5kB\"}],\"__npminstall_done\":\"Sat Sep 18 2021 13:42:11 GMT+0800 (GMT+08:00)\",\"_from\":\"axios@0.21.4\",\"_resolved\":\"https://registry.nlark.com/axios/download/axios-0.21.4.tgz?cache=0&sync_timestamp=1630943365409&other_urls=https%3A%2F%2Fregistry.nlark.com%2Faxios%2Fdownload%2Faxios-0.21.4.tgz\"}');\n\n//# sourceURL=webpack://cheng/./node_modules/_axios@0.21.4@axios/package.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;