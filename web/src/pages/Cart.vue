<!--
 * @Author: Striver-TL
 * @Date: 2022-04-29 08:17:33
 * @LastEditors: Striver-TL
 * @LastEditTime: 2022-04-29 11:39:10
 * @GitHubAdress: https://github.com/Striver-TL/VueTest
 * @Description: file content
-->

<template>
  <div class="cart">
    <div class="title">
      <div class="container">
        <h3>购物车</h3>
      </div>
    </div>
    <div class="cart-content">
      <div class="container">
        <div class="empty" v-if="!cartProducts.length">
          <span>购物车空空的哦~，去看看心仪的商品吧~</span>
          <router-link to="/index">去首页</router-link>
        </div>
        <CartProduct :productData="cartProducts" v-else/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CartProduct from "@/components/CartProduct.vue";
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "CartComponent",
  setup() {
    const store = useStore();
    return {
      cartProducts: store.state.cartProducts,
    };
  },
  components: {
    CartProduct,
  }
});
</script>

<style scoped>
.title {
  border-bottom: 2px solid #f33;
}

.title h3 {
  padding-top: 20px;
  line-height: 60px;
  font-size: 28px;
  color: #555;
  font-weight: normal;
}


.cart-content {
  margin: 60px 0;
}

.empty {
  height: 80px;
  width: 410px;
  padding: 10px 0 0 100px;
  margin: 50px auto;
  background: url("@/static/cart-empty.png") 0 no-repeat;
  background-size: 80px 80px;
  line-height: 25px;
}

.empty span {
  display: block;
  color: #777;
}

.empty a {
  color: #f33;
  font-size: 14px;
  text-decoration: underline;
}
</style>
