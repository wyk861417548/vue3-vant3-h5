<template>
  <router-view  v-slot="{Component}">
    <keep-alive>
      <component :is="Component" :key="route.path" v-if="route.meta.keepAlive"></component>
    </keep-alive>
    <component :is="Component" :key="route.path" v-if="!route.meta.keepAlive"/>
  </router-view>
</template>

<script setup>
import { useRoute} from 'vue-router'
let route = useRoute();
</script>

<style lang="less">
@import url('~@/assets/css/common.css');
</style>
