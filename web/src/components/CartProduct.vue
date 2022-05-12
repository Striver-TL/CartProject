<!--
 * @Author: Striver-TL
 * @Date: 2022-04-29 10:49:58
 * @LastEditors: Striver-TL
 * @LastEditTime: 2022-04-29 11:39:21
 * @GitHubAdress: https://github.com/Striver-TL/VueTest
 * @Description: file content
-->

<template>
  <div class="cart-product">
    <div class="cart-header cart-box">
      <span class="cart-select">
        <label><input type="checkbox" />全选</label>
      </span>
      <span class="cart-desc">商品</span>
      <span class="cart-price">单价</span>
      <span class="cart-count">数量</span>
      <span class="cart-total">总计</span>
      <span class="cart-operation">操作</span>
    </div>
    <div class="cart-list">
      <div
        class="cart-item cart-box"
        v-for="cartProduct in cartProducts"
        :key="cartProduct"
      >
        <span class="cart-select">
          <label>
            <input type="checkbox" />
            <ImageItem :imgData="cartProduct.product.img" />
          </label>
        </span>
        <span class="cart-desc">{{ cartProduct.product.desc }}</span>
        <span class="cart-price">￥{{ cartProduct.product.price.toFixed(2) }}</span>
        <span class="cart-count">{{ cartProduct.count }}</span>
        <span class="cart-total">￥{{ cartProduct.price.toFixed(2) }}</span>
        <span class="cart-operation">
          <button>删除</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "CartProduct",
  setup() {
    const store = useStore();
    return {
      cartProducts: store.state.cartProducts,
    };
  },
});
</script>

<style scoped>
.cart-box {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  color: #333;
  font-size: 14px;
}

.cart-header {
  background: #efefef;
  margin: 20px 0;
  height: 50px;
  line-height: 50px;
}

.cart-select {
  flex: 0 1 133px;
}

.cart-select input {
  margin: 0 20px;
}

.cart-select .image {
  width: 80px;
  height: 80px;
}

.cart-desc {
  flex: 0 1 300px;
}

.cart-item .cart-price,
.cart-item .cart-total {
    color: #f33;
}

.cart-price,
.cart-total,
.cart-operation,
.cart-count {
  flex: 0 1 100px;
}

.cart-item {
  height: 100px;
  padding: 10px 0;
  line-height: 80px;
}

.cart-item .cart-select label {
  display: flex;
  flex-flow: row nowrap;
  justify-content: left;
  align-items: center;
}

.cart-item .cart-desc {
  line-height: 20px;
}
</style>
