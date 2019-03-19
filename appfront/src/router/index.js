import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
Router.prototype.goBack = function () {
  this.isBack = true
  history.back(-1)
}
Vue.use(Router)

const regign = resolve => require(['@/components/person_center/resign'], resolve)
const index = resolve => require(['@/components/tabbar/index'], resolve)
const qoutes = resolve => require(['@/components/tabbar/qoutes'], resolve)
const assets = resolve => require(['@/components/tabbar/assets'], resolve)
const mine = resolve => require(['@/components/tabbar/mine'], resolve)
const versionloginout = resolve => require(['@/components/person_center/versionloginout'], resolve)
const login = resolve => require(['@/components/person_center/login'], resolve)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{isKeepAlive: true, tabbar: true, index: 0 }
    },
    {
      path: '/resign',
      name: 'resign',
      component: regign,
    },
    {
      path: '/qoutes',
      name: 'qoutes',
      component: qoutes,
      meta:{isKeepAlive: true, tabbar: true, index: 1 }
    },
    {
      path: '/assets',
      name: 'assets',
      component: assets,
      meta:{isKeepAlive: true, tabbar: true, index: 2 }
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta:{isKeepAlive: true, tabbar: true, index: 3 }
    },
    {
      path: '/versionloginout',
      name: 'versionloginout',
      component: versionloginout,
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
})
