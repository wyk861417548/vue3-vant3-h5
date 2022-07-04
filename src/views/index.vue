<template>
  <div >
    <section class="box">
      <h2 class="box-title">测试上传图片压缩</h2>
      <upload path='fullUrl' :max='3' @change="changeUpload"></upload>
    </section>

    <section class="box">
      <h2 class="box-title">测试支付宝或浙里办扫一扫</h2>
      <van-button type="primary" class="el-button el-button-primary" @click="handleClick">扫一扫</van-button>
    </section>

    <section class="box">
      <h2 class="box-title">测试不是详情返回缓存页面，是否刷新</h2>
      <van-button type="primary" class="el-button el-button-primary" @click="$skip" data-url='/Scroll'>Scroll</van-button>
    </section>


    <!-- <section class="box">
      <h2 class="box-title">测试刷新页面vuex数据是否还是存在</h2>
      <p class="mb-5">vuex:{{$store.state.token}}</p>
      <button class="el-button el-button-primary" @click="reload">reload</button>
    </section> -->

    <section class="box">
      <van-button type="primary">主要按钮</van-button>
    </section>
  </div>

</template>

<script setup>
  import {getCurrentInstance} from "vue";
  let {$api,$config}  = getCurrentInstance().appContext.config.globalProperties;
  

  function handleClick(){
    $config.scan().then(res=>{
      console.log('scan',res);
    })
  }

  function changeUpload(){

  }

  function reload(){
    window.location.reload();
  }
</script>
<style lang='less' scoped>
</style>