import axios from 'axios'
import {getToken} from './auth'
// 定义一个插件对象
const http = axios.create({
  baseURL: 'http://localhost:8888/api/private/v1/'
})

http.interceptors.request.use(function (config) {
  // 如果本次请求的不是/login 接口，则我们就加入请求头
  if (config.url !== '/login') {
    config.headers['Authorization'] = getToken()
  }
  // return config 就好比 next() 允许通过
  // 通过之后才要真正的发起请求
  return config
}, function (error) {
  return Promise.reject(error)
})

// 建议通过定义插件的配置来扩展 vue 本身 定义一个插件
const httpPlugin = {}

// 2为插件对象添加一个成员
httpPlugin.install = function (Vue, options) {
// 3添加实例方法
  Vue.prototype.$http = http
}

// 4 导出插件对象
export default httpPlugin
