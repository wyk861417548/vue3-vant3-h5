<template>
  <!-- j-full-curbox 当前元素占满全屏  j-flex-col flex垂直布局 -->
  <div class="j-full-curbox">
    <Scroll ref="REF_SCROLL" @load="onLoad">
      <p class="list" v-for="item in state.list" :key="item" :title="item" @click="$skip" data-url="/BScrollDetail">{{item}}</p>
    </Scroll>
  </div>

</template>

<script setup>
import { reactive,onActivated,ref } from "vue";
import { useRoute } from "vue-router";

let REF_SCROLL = ref(null);
let $route = useRoute();

let state = reactive({
  list: [],
  age:18
})

onActivated(()=>{
  console.log('xxxxxxxx');
  console.log('scroll',REF_SCROLL.value,REF_SCROLL.value.refreshing);
  if(!$route.meta.isBack){
    // 加载状态结束
    REF_SCROLL.value.refreshing= true;
    REF_SCROLL.value.onRefresh();
  }

  $route.meta.isBack = false;
})

function getData(){
  setTimeout(() => {
    for (let i = 0; i < 20; i++) {
      state.list.push(state.list.length + 1);
    }

    isScroll(state.list,80);
  }, 1000)
}

 
function onLoad(){
  // 下拉刷新
  if (REF_SCROLL.value.refreshing) {
    state.list = [];
    REF_SCROLL.value.refreshing = false;
  }

  getData();
}

function isScroll(list,total){
  // 加载状态结束
  REF_SCROLL.value.loading = false;

  // 数据全部加载完成
  if (list.length >= total) {
    REF_SCROLL.value.finished = true;
  }
}

</script>

<style lang='less' scoped>
  .list {
    margin-top: 20px;
    height: 50px;
    background: #ddd;
    line-height: 50px;
    text-align: center;
    padding: 0;
  }
</style>