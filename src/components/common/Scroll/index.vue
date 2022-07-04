<template>
  <div class="my-scroll j-full-curbox" ref="REF_SCROLL" id="scroll" @scroll="onScroll">
    <slot></slot>

    <div v-show="props.status==1" class="j-full-curbox">
      <div class="j-full-center" style="top:40%;text-align:center;">
        <img src="@/static/images/nodata.png" alt="图片">
        <div style="color:#5A5B5C;">暂无数据</div>
      </div>
    </div>
    <div v-show="props.status==2"  style="text-align:center;line-height:1;padding:10px;font-size:14px;color:#c5c5c5;">
      已经到底了
    </div>
  </div>
  
</template>

<script>
import { nextTick, onActivated, reactive, ref, toRefs } from 'vue';
export default {
  props:{
    //上拉加载默认状态 0：可加载   1：无数据  2：已结束
    status:{
      type:Number,
      default:0
    }
  },

  emits:['scroll'],

  setup(props,context){
    const REF_SCROLL = ref(null);
  
    let state =reactive({
      position:{
        scrollHeight:"",
        scrollTop:0,
        clientHeight:""
      },
      // 距离底部还有多远触发
      bottom:10,
    })

    onActivated(()=>{
      // 设置离开前的位置距离
      nextTick(()=>{
        REF_SCROLL.value.scrollTop = state.position.scrollTop;
      })

    })

    function onScroll(e){
      console.log('props.status',props.status);
      // 当前滚动盒子
      var aim = e.target;

      state.position ={
        scrollHeight:aim.scrollHeight,
        scrollTop:aim.scrollTop,
        clientHeight:aim.clientHeight
      }
      
      if(props.status !=0)return;
      
      // 如果当前盒子总滚动高度减去距离底部距离 不大于 滚动距离 + 盒子默认占据高度  可以加载数据
      var site = (aim.scrollHeight-state.bottom) <= Math.ceil(aim.scrollTop+aim.clientHeight);

      // 传递给父组件可以加载数据
      if(site){
        context.emit("scroll",{site:site})
      }
    }

    return {
      ...toRefs(state),
      onScroll,
      REF_SCROLL,
      props
    }
  }
  
}
</script>

<style lang="less" scoped>
  .my-scroll{
    width:100%;
    height:100%;
    overflow: auto;
    // -webkit-overflow-scrolling:touch
  }
</style>