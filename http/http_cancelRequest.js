import { cancelTime } from './http_config'

/**
 * 对极短时间内相同的重复请求拦截,阻止请求(防止按钮重复点击, 发出多次相同请求)
 * cancelTime 是为了在设定的时间后将请求从列表剔除, 比如说设定10秒,在这10秒内的相同请求都会被拦截
 */
export default function CancelRequest(_cancelTime) {
  this.reqList = new Map([]); // 正在进行中的请求列表
  this.cancelTime = _cancelTime || cancelTime // 全局默认的延迟时间
}

/**
 * 阻止重复请求
 */
CancelRequest.prototype.stopRepeatRequest = function (config, axios) {
  if (config.cancel && !config.__retrying) {
    let cancel; // 请求中断函数
    const url = config.baseURL + config.url;
    config.cancelToken = new axios.CancelToken((c) => cancel = c);
    this.reqList.get(url) ? cancel(`${url} 请求被中断`) : this.reqList.set(url, true);
  }
}

/**
 * 允许某个请求可以继续进行
 * @param {array} reqList 全部请求列表
 */
CancelRequest.prototype.allowRequest = function (config) {
  const url = config.url;
  if (config.cancel && this.reqList.get(url)) {
    setTimeout(() => this.reqList.delete(url), config.cancelTime || this.cancelTime)
  }
}