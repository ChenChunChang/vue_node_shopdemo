<template>
  <div>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <p><span>{{num}}</span></p>
  </div>
</template>

<script>
  export default {
    props:['num'],
    data(){
      return{
//        num:0,
//        msg:"hello vue!"
      }
    },
    methods:{
      increase(){
        this.$emit("incre");
      },
      decrease(){
        this.$emit("decre");
      }
    }
  }
</script>

<style>

</style>
