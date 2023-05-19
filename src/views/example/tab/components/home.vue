<template>
  <section class="custom-box">
    <h2 class="box-title">测试上传图片压缩（基于vant组件）</h2>
    <upload v-model="state.pic" path='path'></upload>
  </section>

  <section class="custom-box">
    <h2 class="box-title">测试不是详情返回缓存页面，是否刷新</h2>
    
    <router-link to="/example/Scroll">
      <button class="el-button el-button-primary">scroll-单一</button>
    </router-link>
    
  </section>

  <section class="custom-box">
    <h2 class="box-title">测试不是详情返回缓存页面，是否刷新</h2>
    <router-link to="/example/list">
      <button class="el-button el-button-primary">scroll-切换</button>
    </router-link>
  </section>

  <section class="custom-box">
    <h2 class="box-title">图片懒加载</h2>
    <router-link to="/example/v-lazy">
      <button class="el-button el-button-primary">图片懒加载</button>
    </router-link>
  </section>

  <section class="custom-box">
    <h2 class="box-title">二维码组件</h2>
    <Qrcode class="qrcode" style="width:100px;height:100px" text='我是二维码组件' color="#108ee9"></Qrcode>
  </section>

  <section class="custom-box">
    <button class="el-button el-button-primary" @click="showPick(1)">显示日期</button>
    <DatetimePicker type='year-month' ref="datePicker" format="yyyy-MM" @change="changeDatetimePicker"></DatetimePicker>
  </section>

  <section class="custom-box">
    <button class="el-button el-button-primary" @click="showPick">Picker</button>
    <Picker ref="picker"></Picker>
  </section>

</template>

<script setup>
  import { ref,reactive,getCurrentInstance, watch, onMounted} from 'vue';
  // 获取全局
  const {proxy}  = getCurrentInstance();

  const datePicker = ref(null)
  const picker = ref(null)

  const state = reactive({
    pic:'https://img01.yzcdn.cn/vant/leaf.jpg',

    // pic:[{url:'https://img01.yzcdn.cn/vant/leaf.jpg'}]
  })

  // 重新加载页面
  function reload(){
    window.location.reload();
  }

  function showPick(type){
    if(type == 1)datePicker.value.show = true
    else picker.value.show = true
  }

  // 上传回调
  function changeUpload(){}
  function changeDatetimePicker(date){}
</script>
<style lang='less' scoped>
</style>