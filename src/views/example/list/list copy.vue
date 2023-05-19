<template>
  <slot v-if="init"></slot>
</template>

<script setup>
import { ref, onActivated, nextTick } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
let init = ref(false)

onActivated(()=>{
  // 如果不是从详情页返回  整个页面重新加载
  if(!route.meta.isBack){
    init.value = false;
    nextTick(()=>{init.value = true})
  }else if(!init){
    init.value = true
  }
})

</script>
<style lang='less' scoped>
</style>