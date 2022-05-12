/*
 * @Author: Striver-TL
 * @Date: 2022-04-28 09:38:48
 * @LastEditors: Striver-TL
 * @LastEditTime: 2022-04-28 09:40:34
 * @GitHubAdress: https://github.com/Striver-TL/VueTest
 * @Description: file content
 */

 class Picture {
    src: string;
    alt?: string = "";
    constructor(src: string, alt?: string) {
        this.src = src;
        this.alt = alt;
    }
 }

 export default Picture;
