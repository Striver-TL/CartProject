<!--
 * @Author: Striver-TL
 * @Date: 2022-04-28 09:15:20
 * @LastEditors: Striver-TL
 * @LastEditTime: 2022-04-29 10:20:21
 * @GitHubAdress: https://github.com/Striver-TL/VueTest
 * @Description: file content
-->

<template>
  <div class="product">
    <a :href="href" class="product-img" :title="desc">
      <ImageItem :imgData="img">
        <template v-slot:unload>
          <div class="product-unload"></div>
        </template>
      </ImageItem>
    </a>
    <span class="product-price">{{ price.toFixed(2) }}</span>
    <a :href="href" class="product-desc" :title="desc">
      <span>{{ desc }}</span>
    </a>
    <span class="product-btn"><button @click="add(productData)">加入购物车</button></span>
  </div>
</template>

<script lang="ts">
import Product from "@/model/Product";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ProductComponent",
  props: {
    productData: {
      type: Product,
      required: true,
    },
  },
  methods: {
    add() {
      this.$emit("addproduct", this.productData);
    }
  },
  data() {
    return {
      ...this.productData,
    };
  },
});
</script>

<style scoped>
.product {
  width: 220px;
  height: 350px;
  background: #fff;
  border: 1px solid #ccc;
  line-height: 1.5;
  padding: 10px;
  transition: all 0.2s ease;
}

.product:hover {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
}

.product a,
.product span {
  display: block;
}

.product-img {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: #efefef;
  transition: all .2s ease;
}

.product-img:hover {
  opacity: .8;
}

.product-unload {
  position: absolute;
  width: 400%;
  height: 400%;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 30%, rgba(255, 255, 255, .4) 40%, rgba(255, 255, 255, .6) 50%, rgba(255, 255, 255, .4) 60%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0) 100%);
  animation: background-repeat 1s ease infinite;
}

@keyframes background-repeat {
  0% {
    top: -300%;
    right: -300%;
  }
  100% {
    top: 0;
    right: 0;
  }
}

.product-price {
  font-size: 20px;
  color: #f33;
}

.product-price::before {
  content: "￥";
  font-size: 16px;
}

.product-desc {
  height: 42px;
  padding: 5px 0;
  overflow: hidden;
  color: #555;
  font-size: 12px;
  word-break: break-all;
}

.product-desc:hover {
  color: #f33;
}


.product-btn button {
  width: 40%;
  height: 30px;
  cursor: pointer;
  background: #f33;
  border: none;
  color: #fff;
  margin: 15px 0;
  opacity: 0.8;
  transition: all 0.2s ease;
}

.product-btn button:hover {
  opacity: 1;
}

</style>

