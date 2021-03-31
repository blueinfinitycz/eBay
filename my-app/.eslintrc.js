module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: '17.0.1',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['build', 'lib', 'node_modules'],
  plugins: ['react', '@typescript-eslint'],
  extends: ['airbnb-typescript', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'consistent-return': 0,
    'max-len': [2, 180],
    'no-useless-return': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 1,
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    '@typescript-eslint/ban-types': [1, { types: { object: false } }],
    'react/jsx-boolean-value': [2, 'always'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'import/extensions': 0,
    'prettier/prettier': [
      'error',
      {
        printWidth: 180,
        trailingComma: 'all',
        singleQuote: true,
        endOfLine: 'auto',
        semi: true,
        tabWidth: 2,
      },
    ],
  },
};
