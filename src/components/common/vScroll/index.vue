<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model="loading"
      :finished="finished"
      :offset='offset'
      finished-text="没有更多了"
      @load="onLoad"
    >
      <slot></slot>
    </van-list>
  </van-pull-refresh>
</template>

<script>
import { reactive, toRefs,onMounted} from 'vue'
export default {
  props:{
    // 滚动条与底部距离小于 offset 时触发load事件
    offset:{
      type:Number,
      default:50
    },
  },

  emits: ['load'],

  setup(props,context){
    let state = reactive({
      loading: false,
      finished: false,
      refreshing: false,
    })

    // 上拉加载
    function onLoad() {
      context.emit('load')
    }

    // // 下拉刷新
    function onRefresh() {
      // 清空列表数据
      state.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      state.loading = true;
      onLoad();
    }

    return {
      ...toRefs(state),
      onLoad,
      onRefresh
    }
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