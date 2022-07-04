<template>
  <p>nihojjwdamdj</p>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const childValue=ref('我是子组件的的值')
    
    //打印子组件的ref的值
    function childFunction() {
     console.log('我是子组件的方法');
    }

    return {
      childValue,
      childFunction,
    };
  },
};
</script>
<style lang='less' scoped>

</style>