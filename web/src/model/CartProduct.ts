/*
 * @Author: Striver-TL
 * @Date: 2022-04-29 08:23:51
 * @LastEditors: Striver-TL
 * @LastEditTime: 2022-04-29 11:26:59
 * @GitHubAdress: https://github.com/Striver-TL/VueTest
 * @Description: file content
 */

import Product from './Product';
import Operation from '@/module/Operation';
class CartProduct {
    count = 1;
    product: Product;
    price = 0;
    constructor(product: Product, count?: number) {
        this.product = product;
        if (count) {
            this.count = count;
        }
        this.computePrice();
    }
    setCount(count: number) {
        this.count = count;
        this.computePrice();
    }
    addCount() {
        this.count++;
        this.price = Operation.add(this.price, this.product.price);
    }
    subCount() {
        this.count--;
        this.price = Operation.sub(this.price, this.product.price);
    }
    computePrice() {
        this.price = Operation.mul(this.count, this.product.price);
    }
}

export default CartProduct;
