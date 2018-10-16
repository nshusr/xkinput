module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential'
  ],
  rules: {
    'indent': [1, 2],
    'semi': [0],
    'quotes': [1, 'single'],
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    "vue/valid-v-on": [2, {
      modifiers: ['spause']
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-extra-semi': [1]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
