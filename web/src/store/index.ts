/*
 * @Author: Striver-TL
 * @Date: 2022-04-29 08:22:37
 * @LastEditors: Striver-TL
 * @LastEditTime: 2022-04-29 11:30:24
 * @GitHubAdress: https://github.com/Striver-TL/VueTest
 * @Description: file content
 */

import { createStore } from 'vuex';
import Product from '@/model/Product';
import CartProduct from '@/model/CartProduct';

const cartProducts: Array<CartProduct> = [];
const products: Array<Product> = [];
const store = createStore({
    state: {
        cartProducts
    },
    mutations: {
        addCartProduct(state, product: Product): void {
            const cartProducts: Array<CartProduct> = state.cartProducts;
            const index: number = products.indexOf(product);
            console.log(product);
            if (index !== -1) {
                cartProducts[index].addCount();
            } else {
                cartProducts.push(new CartProduct(product));
                products.push(product);
            }
        },
        delCartProduct(state, product: Product): void {
            const index: number = products.indexOf(product);
            if (index < 0) {
                return;
            }
            state.cartProducts.splice(index, 1);
            products.splice(index, 1);
        },
        setCount(state, product: Product, count?: number): void {
            const index: number = products.indexOf(product);
            if (count !== undefined) {
                state.cartProducts[index].setCount(count);
            }
        },
        addCount(state, product: Product): void {
            const index: number = products.indexOf(product);
            state.cartProducts[index].addCount();
        },
        subCount(state, product: Product): void {
            const index: number = products.indexOf(product);
            state.cartProducts[index].subCount();
        }
    }
})

export default store;
