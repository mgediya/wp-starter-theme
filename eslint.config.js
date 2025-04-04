// eslint.config.js
const isDev = process.argv.includes('--watch');

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    rules: {
      'no-console': isDev ? 'warn' : 'error',
      'no-debugger': isDev ? 'warn' : 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
    },
  },
];
