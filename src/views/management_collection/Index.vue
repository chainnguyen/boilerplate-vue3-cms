<template>
  <div class="main-container">
    <!-- Block: Page title -->
    <h1>Collection list</h1>

    <!-- Block: Main content -->
    <section class="main-container_content">
      <!-- Section: Search -->
      <collection-search-component />
    </section>
  </div>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Store
// import store from '@/shared/store'
// Components
import CollectionSearchComponent from '@/shared/components/management_collection/CollectionSearch.vue'
// Others

export default defineComponent({
  name: 'CollectionPage',

  components: {
    CollectionSearchComponent,
  },

  setup() {
    return {}
  },
})
</script>
