import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  mode:'history',//去除#
  // mode:'hash',//需要#
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/',
      name: 'GoodsList',
      // component:GoodsList,
      components: {
        default:GoodsList,
        title:Title,
        img:Image
      }
      /*children:[
        {
          path: 'title',
          name: 'title',
          component: Title
        },
        {
          path: 'image',
          name: 'image',
          component: Image
        }
      ]*/
    },
    {
      path: '/cart/:cartId',
      name: 'cart',
      component: Cart
    }
  ]
})
