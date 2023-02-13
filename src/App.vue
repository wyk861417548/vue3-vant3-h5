<template>
  <router-view  v-slot="{Component}">
    <!-- <keep-alive>
      <component :is="Component" :key="route.name" v-if="route.meta.keepAlive"></component>
    </keep-alive> -->
    <!-- :key="route.name" v-if="!route.meta.keepAlive" -->
    <component :is="Component" ></component>
  </router-view>

  <!-- :key="route.name" -->
</template>

<script setup>
import { useRoute} from 'vue-router'
let route = useRoute();
</script>

<style lang="less">
@import url('~@/assets/css/common.css');
</style>
