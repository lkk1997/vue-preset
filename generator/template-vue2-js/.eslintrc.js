module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      'plugin:vue/essential',
      '@vue/standard'
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      '@typescript-eslint/no-var-requires': 0,
      'no-new': 'off',
    }
  }
  