<template>
  <div>
    <div>{{ msg }} {{ $route.query.goodsId }}</div>
    <span>{{ $route.query.goodsId }}</span>
  </div>
</template>

<script>
    //  import Counter from ''
    export default {
        name: 'Cart',
        data() {
            return {
                msg: '这里是购物额车页面'
            }
        },
        components: {},
        methods: {}
    }
</script>

<style>

</style>
