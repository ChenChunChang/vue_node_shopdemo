// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
// import {router} from '{router:router}'
import {router} from './router'
// import {sum,minus} from './util'
// import * as util from './util'

Vue.config.productionTip = false

/*console.log(`sum:${sum(1,6)}`);
console.log(`minus:${minus(2,1)}`);*/
// console.log(`sum:${util.sum(1,6)}`);
// console.log(`minus:${util.minus(2,1)}`);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

/*define("util",function () {
  return: {
    sum:function() {

    },
    minus:function(){

    }
  }
})*/
