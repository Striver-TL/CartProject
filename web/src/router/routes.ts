/*
 * @Author: Striver-TL
 * @Date: 2022-04-29 08:18:23
 * @LastEditors: Striver-TL
 * @LastEditTime: 2022-04-29 08:22:13
 * @GitHubAdress: https://github.com/Striver-TL/VueTest
 * @Description: file content
 */
import { RouteRecordRaw } from 'vue-router';
import Index from '@/pages/Index.vue';
import Cart from '@/pages/Cart.vue';

const routes: Array<RouteRecordRaw> = [{
    path: "/",
    redirect: "/index",
}, {
    path: "/index",
    name: "index",
    component: Index,
}, {
    path: "/cart",
    name: "cart",
    component: Cart
}]

export default routes;
