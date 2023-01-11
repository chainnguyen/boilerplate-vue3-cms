<template>
  <div class="loading-mode">
    <a-spin
      size="large"
      :tip="$t('loading')" />
  </div>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Loading',
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_variables.scss';

.loading-mode {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1020;
  background-color: $text-weak-black-color;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
