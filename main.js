import Vue from 'vue'
import App from './App'

import Cabloy from './js_sdk/cabloy-sdk/main.js'

// 初始化cabloy
const cabloyOptions = {
  base: {
	scene: 'default',
	locale: 'en-us',
  },
  api: {
	baseURL: 'https://yourdomain.com',
  },
}

Vue.prototype.$cabloy = Cabloy(Vue, cabloyOptions)

// 登录
Vue.prototype.$cabloy.util.login().then(res => {
  // 由于 login 是网络请求，可能会在 Page.onLoad 之后才返回
  // 所以此处加入 callback 以防止这种情况
  if (Vue.prototype.$cabloy.__loginReadyCallback) {
    Vue.prototype.$cabloy.__loginReadyCallback(res);
  }
}).catch(err => {
  console.log(err)
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
