<template>
  <div id="qrCode" ref="qrCodeDiv" @click="proxy.$ImagePreview([img])"></div>
</template>

<script setup>
import QRCode from 'qrcodejs2';
import { ref,reactive,nextTick,onMounted,watch,getCurrentInstance} from 'vue';

const props = defineProps({
  // 二维码内容
  text:{type:String,default:''},
  // 二维码颜色
  color:{type:String,default:'#333'},
  // 是否开启点击二维码预览
  preview:{type:Boolean,default:true}
})

const {proxy} = getCurrentInstance()

let img = ref('')
let qrCodeDiv = ref(null)

onMounted(() => {init()})


function init(){
  new QRCode(qrCodeDiv.value, {
    text: props.text,
    width: 1080, //防止分辨率大的时候模糊
    height: 1080, //防止分辨率大的时候模糊
    colorDark: props.color, //二维码颜色
    colorLight: "#fff", //二维码背景色
    correctLevel: QRCode.CorrectLevel.L//容错率，L/M/H
  })

  setTimeout(()=>{
    img = qrCodeDiv.value.querySelector('img').src;
  },0)
}

function reset() {
  let text = document.getElementById("qrCode");
  text.innerHTML = '';
}

watch(()=>props.text,()=>{
  reset()
  nextTick(()=>{init()})
})

</script>
<style scoped>
/* 注意这里别写lang='less'或者其他  不然>>>不生效 */
#qrCode>>>canvas {
  width: 100% !important;
  height: 100% !important;
}

#qrCode>>>img {
  width: 100% !important;
  height: 100% !important;
}
</style>