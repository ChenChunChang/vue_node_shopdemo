<template>
  <div class="main_warp">
    <h1>{{ msg }}  {{ $route.params.goodsId }}</h1>
    <span>{{ $route.params.goodsId }}</span>
    <span>{{ $route.params.name }}</span>
    <router-link to="title">显示商品标题</router-link>
    <router-link to="image">显示商品图片</router-link>
    <div class="children_div">
      <router-view/>
    </div>
    <router-link to="/cart">跳转到购物车页面</router-link>
    <button @click="jump">跳转到购物车页面</button>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  data () {
    return {
      msg: "我这里是商品列表页面"
    }
  },
  methods:{
    jump(){
      this.$router.push({path: "/cart?goodsId=123"});
    }
  }
}
</script>

<style>

</style>
