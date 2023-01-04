<template>
  <a-layout-content id="main">
    <transition
      name="page"
      mode="out-in">
      <router-view v-if="true" />
    </transition>
  </a-layout-content>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainComponent',
})
</script>

<style lang="scss" scoped>
#main {
  &.full-screen {
    margin: 0;
    padding: 0;
  }
}
</style>
