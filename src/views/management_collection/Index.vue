<template>
  <div class="main-container">
    <!-- Block: Page title -->
    <page-title :title="$t('management_collection.page_list')" />

    <!-- Block: Main content -->
    <section class="main-container_content">
      <!-- Section: Search -->
      <collection-search />
    </section>
  </div>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Components
import PageTitle from '@/shared/components/common/PageTitle.vue'
import CollectionSearch from '@/shared/components/management_collection/CollectionSearch.vue'
// Others
import { useStore } from 'vuex'

export default defineComponent({
  name: 'CollectionPage',

  components: {
    PageTitle,
    CollectionSearch,
  },

  setup() {
    const store = useStore()
    return { store }
  },
})
</script>
