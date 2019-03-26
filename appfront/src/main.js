// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Qs from 'qs'
import { Button, Select,Row,Input,Col,MessageBox,Message,Carousel, CarouselItem} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible';
import './assets/iconfont/iconfont.css';
import './assets/iconfont'

import request from '@/common/http_request/request.js'

Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
Vue.use(router)
Vue.prototype.$httpReq = request
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
// Vue.component(Row.name, Row);
Vue.use(Button)
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(CarouselItem)
Vue.use(Carousel)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
