import Vue from 'vue'
import VueRouter from 'vue-router'

// init
Vue.use( VueRouter );

// root page
import App from './App.vue';
// page

import CtoF from './pages/CtoF.vue';

const router = new VueRouter({

  mode: 'history',
  base: __dirname,
  // routre 表
  routes: [

    {
      path: '/c2f',
      name: 'c2f',
      component: CtoF
    },
    // 當 url path 不符合 router 表的時候，預設轉址到
    // 順序一定要最後面
    { path: '/*', redirect: '/c2f' }
  ]
});


new Vue({
  el: '#app',
  // router 掛載設定
  router,
  // app.vue 掛載並 replace index.html 原始掛載點： <div id="app"></div>
  render: h => h( App )
});
