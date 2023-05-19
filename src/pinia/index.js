import { defineStore } from "pinia";

export const cartStore = defineStore('cart',{
  state:()=>{
    return {
      // 购物车商品集合
      good:{},

      // 商品总数
      total:0,  

      // 是否已经下单
      reset:false
    }
  }
})