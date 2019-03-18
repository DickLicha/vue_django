// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Qs from 'qs'
// import ElementUI from 'element-ui';
import { Button, Select,Row,Input,Col } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import request from '@/common/http_request/request.js'

Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
Vue.use(router)
Vue.prototype.$httpReq = request
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
// Vue.component(Row.name, Row);
Vue.use(Button)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
