module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: ['eslint:recommended'],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-console': isDev ? 'warn' : 'error',
      'no-debugger': isDev ? 'warn' : 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2]
    }
  };