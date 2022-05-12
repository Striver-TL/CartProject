/*
 * @Author: Striver-TL
 * @Date: 2022-04-28 08:20:05
 * @LastEditors: Striver-TL
 * @LastEditTime: 2022-04-29 10:39:27
 * @GitHubAdress: https://github.com/Striver-TL/VueTest
 * @Description: file content
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 0
  }
}
