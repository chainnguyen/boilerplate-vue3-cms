<template>
  <div class="main-container">
    <!-- Block: Page title -->
    <h1>Frame list</h1>

    <!-- Block: Main content -->
    <section class="main-container_content">
      <!-- Section: Search -->
      <frame-search-component />
    </section>
  </div>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Store
// import store from '@/shared/store'
// Components
import FrameSearchComponent from '@/shared/components/management_frame/FrameSearch.vue'
// Others

export default defineComponent({
  name: 'FramePage',

  components: {
    FrameSearchComponent,
  },

  setup() {
    return {}
  },
})
</script>
