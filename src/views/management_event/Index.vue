<template>
  <div class="main-container">
    <!-- Block: Page title -->
    <page-title :title="$t('management_event.page_list')" />

    <!-- Block: Main content -->
    <section class="main-container_content">
      <!-- Section: Search -->
      <event-search />
    </section>
  </div>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Components
import PageTitle from '@/shared/components/common/PageTitle.vue'
import EventSearch from '@/shared/components/management_event/EventSearch.vue'
// Others
import { useStore } from 'vuex'

export default defineComponent({
  name: 'EventPage',

  components: {
    PageTitle,
    EventSearch,
  },

  setup() {
    const store = useStore()
    return { store }
  },
})
</script>
