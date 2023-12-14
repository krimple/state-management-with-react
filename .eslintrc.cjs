module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'eslint-plugin-import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    '@typescript-eslint/no-unused-vars': 'off',      // sometimes you need a second parameter and have to skip the 1st one
    '@typescript-eslint/no-explicit-any': 'off',
    'import/extensions': ["error", "never",{ "jpg": "always", "ico": "always", "png" : "always", "css": "always" }]
  },
}
