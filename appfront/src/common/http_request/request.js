import axios from 'axios'
import Qs from 'qs'
var isShowLoading = true;

axios.interceptors.response.use(function (response) {
  // store.commit("setloadingFlag", false);
  isShowLoading = false;
  return response.data;
}, function (error) {
  // store.commit("setloadingFlag", false);
  isShowLoading = false;
  return Promise.reject(error);
});
axios.interceptors.request.use(function (config) {
  if (config.method == 'get') {
    config.data = true
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
export default function (obj) {
  var baseURL = 'http://127.0.0.1:8000'
  var opt = {
    url: obj.url,
    baseURL:baseURL,
    method: obj.method || 'get',
    headers: obj.header ,
    timeout: 30000,
    responseType: obj.dataType || '',
  }
  if (obj.method === 'GET') {//|| (obj.header['Content-Type'] == 'application/x-www-form-urlencoded')
    opt.params = obj.data || {}
  }
  // else if (obj.header['Content-Type'] == 'application/x-www-form-urlencoded'){
  //   // opt.transformRequest=function(data){
  //   //   return Qs.stringify(obj.data)
  //   // }
  //   opt.data = Qs.stringify(obj.data) || {}
  // }
  else {
    opt.data = obj.data || {}
  }

  return axios(opt);
}
