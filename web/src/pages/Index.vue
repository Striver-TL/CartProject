<!--
 * @Author: Striver-TL
 * @Date: 2022-04-29 08:15:28
 * @LastEditors: Striver-TL
 * @LastEditTime: 2022-04-29 11:37:02
 * @GitHubAdress: https://github.com/Striver-TL/VueTest
 * @Description: file content
-->

<template>
  <div class="index">
    <div class="topbar">
      <div class="container">
        <div class="search">
          <input type="text" placeholder="请输入要搜索的商品" />
          <button>搜索</button>
        </div>
        <div class="cart">
          <router-link to="/cart">
            <span>我的购物车</span>
            <i class="icon-cart">
              <span class="cart-count">{{ state.cartProducts.length }}</span>
            </i>
          </router-link>
        </div>
      </div>
      <h3 class="title">
        <span>商品列表</span>
      </h3>
    </div>
    <div class="product-show">
      <div class="product-list">
        <div class="container">
          <ProductItem
            v-for="product in productData"
            :productData="product"
            :key="product"
            @addproduct="addProduct"
          ></ProductItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeMount } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import Product from "@/model/Product";
import ProductItem from "@/components/ProductItem.vue";

export default defineComponent({
  name: "IndexComponent",
  setup() {
    const productData = reactive([]);
    const store = useStore();

    const getProducts = async () => {
      await axios({
        url: "http://localhost:8088/getProducts",
        method: "POST",
      })
        .then(({ data }) => {
          productData.push.apply(
            productData,
            data.map((product: any) => {
              return new Product(product);
            })
          );
        })
        .catch((e) => {
          console.log(e);
        });
    };

    onBeforeMount(getProducts);

    const addProduct = (product: Product) => {
      store.commit("addCartProduct", product);
    };
    return {
      productData,
      state: store.state,
      addProduct,
    };
  },
  components: {
    ProductItem,
  },
});
</script>

<style scoped>
.product-list {
  background: #efefef;
}

.product-list .container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 20px 0;
}

.product-list .product {
  flex: 0 1 220px;
  margin: 20px 0;
}

.topbar {
  padding-top: 10px;
}

.topbar .title {
  flex: 1 1 100%;
  border-bottom: 2px solid #f33;
  text-align: center;
}

.topbar .title span {
  color: #333;
  display: inline-block;
  font-weight: normal;
  font-size: 24px;
  line-height: 1.2;
  padding: 0.5em;
}
/****************** */
.topbar .container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 10px 50px;
}

.search {
  flex: 0 1 80%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}

.search input {
  flex: 0 1 80%;
  height: 45px;
  padding: 0 1em;
  outline: none;
  border: 2px solid #f33;
}

.search button {
  height: 45px;
  flex: 0 1 20%;
  border: 2px solid #f33;
  border-left: none;
  background: #f33;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
}

.cart {
  height: 45px;
  flex: 0 1 15%;
  background: #efefef;
  border: 1px solid #ccc;
}

.cart a {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  cursor: pointer;
  background: transparent;
  color: #f33;
  line-height: 45px;
  text-align: center;
}

.icon-cart {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url("@/static/cart.png") 0 no-repeat;
  background-size: cover;
  vertical-align: middle;
  margin: -8px 0 0 5px;
  position: relative;
}

.cart-count {
  position: absolute;
  top: -3px;
  right: -17px;
  width: 16px;
  height: 16px;
  background: #f33;
  border-radius: 50%;
  color: #fff;
  font-style: normal;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
}
</style>
