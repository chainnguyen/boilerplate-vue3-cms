<template>
  <a-breadcrumb
    v-if="$route.meta.breadcrumb"
    id="breadcrumb">
    <template v-for="(link, index) in $route.meta.breadcrumb">
      <a-breadcrumb-item :key="index">
        <router-link
          v-if="link.routeName"
          :to="{ name: link.routeName }"
          v-text="$t(link.title)" />
        <span
          v-else
          v-text="$t(link.title)" />
      </a-breadcrumb-item>
    </template>
  </a-breadcrumb>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Breadcrumb',
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_variables.scss';

#breadcrumb {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding: 10px;
  background-color: $white;
  .ant-breadcrumb-link {
    span,
    a {
      color: $text-light-black-color;
    }
  }

  & > span:last-child span {
    color: $text-black-color;
  }
}
</style>
