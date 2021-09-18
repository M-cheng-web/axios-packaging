export default {
  getA: {
    url: '/getA',
    method: 'GET',
    httpCache: false,
    cache: true,
    white: false, // 是否白名单 - 发生错误时不需要错误拦截
    retry: 3,
  },
};



// 示例
// ``` js
// export default {
//   getA: {
//     url: '/axios/getA',
//     method: 'GET',
//     white: false, // 是否白名单 - 发生错误时不需要错误拦截(如果配置了白名单会忽略重连)
//     withOut: false, // 是否要外层数据
//     cancel: true, // 是否在重复请求时取消本次请求
//     cancelTime: 3000, // 指定此接口的延迟时间(指的是延迟多久才能开始下一次相同的请求) 优先级: 这里 > config文件
//     loading: true, // 是否显示loading
//     retry: 2, // 接口错误时重连次数 - 0表示不重连
//     httpCache: true, // get请求是否需要浏览器缓存
//     cache: true, // 是否需要缓存数据
//     cacheExpire: 10000, // 此接口数据的缓存时间
//     paramsSerial: false, // post请求参数序列化
//     withCredentials: true, // 跨域
//   },
//   saveB: {
//     url: '/axios/saveB',
//     method: 'POST',
//   },
// };
// ```