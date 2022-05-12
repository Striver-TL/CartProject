/*
 * @Author: Striver-TL
 * @Date: 2022-04-28 09:08:59
 * @LastEditors: Striver-TL
 * @LastEditTime: 2022-04-28 10:43:58
 * @GitHubAdress: https://github.com/Striver-TL/VueTest
 * @Description: file content
 */

import Picture from './Picture';

/**
 * 产品信息类
 * @author Striver-TL
 * @constructor 构造函数
 * @param { any } data 产品信息
 */
class Product {
    // 产品链接
    href: string;
    // 产品图片链接
    img: Picture;
    // 产品现价
    price: number;
    // 产品原价
    oldPrice?: number;
    // 产品介绍
    desc: string;
    constructor(data: any) {
        this.href = data.href;
        this.img = new Picture(data.imgSrc, data.imgAlt ? data.imgAlt : "");
        this.price = data.price;
        this.desc = data.desc;
        if (data.oldPrice) {
            this.oldPrice = data.oldPrice;
        }
    }
}

export default Product;
