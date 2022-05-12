<!--
 * @Author: Striver-TL
 * @Date: 2022-04-28 08:20:05
 * @LastEditors: Striver-TL
 * @LastEditTime: 2022-04-29 09:55:30
 * @GitHubAdress: https://github.com/Striver-TL/VueTest
 * @Description: file content
-->
<template>
  <router-view name="default"></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  width: 1190px;
  margin: 0 auto;
}

</style>
