module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier"
  ],
  rules: {
    // override/add rules settings here
    "vue/no-unused-vars": "off",
    "vue/no-useless-catch": "off",
    "vue/require-default-prop": "off"
  }
}
