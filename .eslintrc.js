module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:cypress/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  rules: {
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-var-requires': 0,
    '@typescript-eslint/no-var-requires': 0,
    'no-use-before-define': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': [
      2,
      { devDependencies: ['**/test.tsx', '**/test.ts'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        mjs: 'never',
      },
    ],
  },
};
