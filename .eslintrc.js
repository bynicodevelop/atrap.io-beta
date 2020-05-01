module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // préférer utiliser `plugin:vue/strongly-recommended` ou `plugin:vue/recommended` pour des règles stictes.
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'cypress'
  ],
  // add your custom rules here
  rules: {
    'semi': [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error', { 'semi': false }],
    'no-unused-vars': ["error", { "argsIgnorePattern": "config|ctx|commit" }],
    'indent': ["error", 2],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "never",
        "component": "any"
      }
    }]
  }
}
