/*
 * @Author: Striver-TL
 * @Date: 2022-04-28 08:20:05
 * @LastEditors: Striver-TL
 * @LastEditTime: 2022-04-29 09:39:34
 * @GitHubAdress: https://github.com/Striver-TL/VueTest
 * @Description: file content
 */
import { createApp } from 'vue'
import App from './App.vue'
import ImageItem from '@/components/ImageItem.vue';
import store from '@/store/index';
import router from '@/router/index';

createApp(App)
    .use(store)
    .use(router)
    .component("ImageItem", ImageItem)
    .mount('#app')
