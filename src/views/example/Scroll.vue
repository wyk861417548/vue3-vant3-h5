<template>
  <Scroll @scroll="!state.loading && getData" :status="state.scrollState">
    <p class="list" v-for="item in state.list" :key="item" :title="item" @click="$skip" data-url="/BScrollDetail">{{item}}</p>
  </Scroll>
</template>

<script setup>
import { reactive } from "vue";

  const state = reactive({
    list:[],

    count:1,

    //上拉加载默认状态 0：可加载   1：无数据  2：已结束
    scrollState:0,

    loading:false,
  })

  getData();
  

  function getData(){
    state.loading = true;
    setTimeout(()=>{
      state.count++;
      for (let i = 0; i < 10; i++) {
        state.list.push({name:state.count+"---i---"+i,age:i})
      }
      state.loading = false;
      // 如果已经是最后一页了 结束
      if(state.count > 5){
        state.scrollState = 2;
      }
    },2000)
  }

</script>

<style lang='less' scoped>
.list {
  margin-top: 20px;
  height: 100px;
  background: #ddd;
  line-height: 100px;
  text-align: center;
}

</style>