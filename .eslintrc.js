module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'plugin:cypress/recommended'
  ],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'always']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
