/*
 * @Author: Striver-TL
 * @Date: 2022-04-29 08:18:29
 * @LastEditors: Striver-TL
 * @LastEditTime: 2022-04-29 08:21:44
 * @GitHubAdress: https://github.com/Striver-TL/VueTest
 * @Description: file content
 */

import {createRouter, createWebHistory} from 'vue-router';
import routes from './routes';

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;
