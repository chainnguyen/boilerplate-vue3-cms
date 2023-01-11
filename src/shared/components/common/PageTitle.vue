<template>
  <div
    class="page-title d-flex flex-wrap justify-content-between align-items-center">
    <h5
      class="page-title_content"
      v-text="title" />

    <!-- Custom button -->
    <div class="page-title_action d-flex align-items-center flex-shrink-0">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageTitle',

  props: {
    title: { type: String, required: true, default: '' },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_variables.scss';

.page-title {
  padding: 12px 10px 12px 38px;
  background-color: $white;
  margin-bottom: 9px;
  @media #{$info-ipad} {
    padding-left: 25px;
  }

  &_content {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: $text-black-color;
    padding-right: 10px;
    @media #{$info-ipad} {
      font-size: 18px;
      flex-basis: 100%;
    }
  }

  &_action {
    @media #{$info-ipad} {
      margin-top: 10px;
    }

    & > *:not(:last-child) {
      margin-right: 15px;
    }
  }
}
</style>
