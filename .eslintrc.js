modules.exports = {
  parser: '@typescript-eslint/parser', // 定义 ESLint 的解析器
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'prettier/@typescript-eslint',
    'plug: vue/commended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ], // 定义文件继承的子规范
  plugins: ['@typescript-eslint'], // 定义了该 eslint 文件所依赖的插件
  env: {
    browser: true,
    node: true,
  },
  /**
   * 自定义规则
   * 0 - off
   * 1 - warning
   * 2 - error
   * See: http://eslint.cn/docs/rules/
   */
  rules: {},
}
