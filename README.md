
# axios二次封装
## 介绍
基于axios的二次封装,能适应大部分项目的请求需要(最起码我是这样想的,啊哈哈)<br>
本人会基于项目的实际需要来再次更新此封装,或是因为在使用中发现封装方式影响到效率和扩展也会再次更新封装

## 使用
此封装只用到了axios,不需要其他插件
直接将此项目clone至本地,根据需要可以将项目内http文件夹移入你的项目
使用方式:
  1. 通过Vue实例方式全局使用
  2. 直接在页面引入`http_interceptor.js`内的目标axios实例以及`api.js`使用
  3. 如果不引入项目只是想看一下功能,可以直接`npm i`+`webpack`命令,然后打开`build/index.html`就能看到效果

**注意**
1. 通过Vue实例使用时可以通过调用时传入的config参数来覆盖其他已定义的功能
2. 通过Vue实例使用时 http -> index.js文件内是只考虑到get和post请求
3. 此封装默认接口返回的格式是 { data: { info: '我是信息', errorInfo: '我是错误信息', success: true }, message: '成功', messageCode: 200 }
4. 在使用此封装之前要先和后端确定好接口返回格式

## 目录
+ --> http - 核心封装文件夹,可以直接把这个文件夹挪至你的本地项目
  + --> http_axios.js - 负责创建axios默认配置和axios对象
  + --> http_cacheRequest.js - 负责请求数据缓存,可根据自己需要改为缓存在vuex内(目前缓存在localStorage)
  + --> http_cancelRequest.js - 负责请求取消
  + --> http_interceptor.js - 负责请求拦截,将其他功能一并引入此文件并放入拦截器内
  + --> http_config.js - 负责配置全局参数
  + --> http_utils.js - 负责创建其他文件需要用到的工具函数
  + --> index.js - 负责创建封装好的axios函数并放入Vue原型链中
+ --> index.js - 使用示例
+ --> api.js - api示例

## 功能
| 参数            | 说明                                           | 类型    | 可选值       | 默认值 |
| --------------- | ---------------------------------------------- | ------- | ------------ | ------ |
| url             | 请求地址                                       | string  | —            | —      |
| method          | 请求方式                                       | string  | GET / POST   | GET    |
| white           | 是否白名单(设置白名单的接口失败时不做任何处理) | boolean | true / false | false  |
| withOut         | 是否需要接口的config数据                       | boolean | true / false | false  |
| cancel          | 是否需要请求重复取消                           | boolean | true / false | false  |
| cancelTime      | 设定一定时间内发生相同请求会被取消             | number  | —            | 1000   |
| loading         | 是否显示loading                                | boolean | true / false | false  |
| httpCache       | get请求是否需要浏览器缓存                      | boolean | true / false | false  |
| cache           | 是否需要缓存接口返回的数据                     | boolean | true / false | false  |
| cacheExpire     | 此接口数据的缓存时间(过期后会重新请求)         | number  | —            | 10000  |
| retry           | 接口错误时重连次数 - 0表示不重连               | number  | —            | 0      |
| paramsSerial    | 是否post请求参数序列化                         | boolean | true / false | false  |
| withCredentials | 跨域请求时是否在请求中携带cookie               | boolean | true / false | false  |


**注意**
1. 设置请求缓存时,如果是get请求且设置了参数自动添加时间戳,会在存取请求缓存数据的时候忽略时间戳参数(因为它们的时间戳是不一样的会导致拿不到值),这一点在你需要自定义请求缓存是需要了解的,不会导致时间戳参数失效,平时使用是无感的
2. 使用前尽量了解`http_config.js`文件内的参数意义,避免重复定义以及未知问题(例如时间设置太少可能会引起冲突)
3. loading功能需要根据你项目使用UI来自定义,我这里是假的


## 建议&联系方式
微信号: cxh2604856589<br>
可以的话希望你能给我提更多建议(任何方向都行),本人杭州一枚小前端,渴望成长!渴望变强!!!