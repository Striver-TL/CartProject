<!--
 * @Author: Striver-TL
 * @Date: 2022-04-28 09:18:41
 * @LastEditors: Striver-TL
 * @LastEditTime: 2022-04-29 10:02:34
 * @GitHubAdress: https://github.com/Striver-TL/VueTest
 * @Description: file content
-->

<template>
    <div class="image">
        <div class="load" v-if="isLoad">
            <img :src="src" :alt="alt">
        </div>
        <div class="unload" v-else>
            <slot name="unload"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import Picture from '@/model/Picture'
export default defineComponent({
    name: "ImageItem",
    props: {
        imgData: {
            type: Picture,
            required: true,
        }
    },
    setup(prop) {
        const isLoad: Ref<boolean> = ref(false);
        const src: Ref<string> = ref(prop.imgData.src);
        const alt: Ref<string> = ref(prop.imgData.alt || "");
        const img = new Image();
        img.src = src.value;
        img.onload = () => {
            isLoad.value = true;
        }

        img.onerror = () => {
            isLoad.value = false;
        }

        return {
            isLoad,
            src,
            alt
        }
    }
})
</script>

<style scoped>
img {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
