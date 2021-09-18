import axiosCore from './http/index'
import urls from './apis'

axiosCore.init(window, urls)


window.$http.home.getA().then(res => {
  console.log(res);
})


