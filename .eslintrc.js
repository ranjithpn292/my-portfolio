module.exports = {
  parser: '@typescript-eslint/parser', // Specify the TypeScript parser
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // Detect react version
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // Add or override rules here
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react/prop-types': 'off', // Disable prop-types as TS is used
  },
};
