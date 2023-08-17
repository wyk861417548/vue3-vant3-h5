<template>
  <div v-if="init">
    <slot></slot>
  </div>
</template>

<script setup>
import { nextTick, onActivated, ref } from 'vue';
import { useRoute } from 'vue-router';
let init = ref(false);
const route = useRoute();

onActivated(()=>{
  if(!route.meta.isBack){
    init.value = false;
    nextTick(()=>init.value = true)
  }else if(!init.value){
    init.value = true;
  }
})
</script>
<style lang='less' scoped>
  header{}

  main{}

  footer{}

</style>