<template>
  <div class="main-container">
    <!-- Block: Page title -->
    <h1>Event list</h1>

    <!-- Block: Main content -->
    <section class="main-container_content">
      <!-- Section: Search -->
      <event-search-component />
    </section>
  </div>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Store
// import store from '@/shared/store'
// Components
import EventSearchComponent from '@/shared/components/management_event/EventSearch.vue'
// Others

export default defineComponent({
  name: 'EventPage',

  components: {
    EventSearchComponent,
  },

  setup() {
    return {}
  },
})
</script>
