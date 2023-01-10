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
    "generator-star-spacing": "off",
    "no-unused-vars": "off",
    "no-useless-catch": "off",
    "camelcase": "off",
    "vue/no-useless-catch": "off",
    "vue/no-deprecated-filter": "off",
    "vue/require-default-prop": "off",
    "vue/no-deprecated-v-bind-sync": "off",
    "vue/no-deprecated-slot-attribute": "off",
    "vue/no-v-for-template-key-on-child": "off",
    "vue/no-deprecated-destroyed-lifecycle": "off",
    "vue/no-deprecated-slot-scope-attribute": "off",
    "vue/no-deprecated-router-link-tag-prop": "off"
  }
}
