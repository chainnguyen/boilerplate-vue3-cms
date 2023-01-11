<template>
  <div class="main-container">
    <!-- Block: Page title -->
    <page-title title="Frame list" />

    <!-- Block: Main content -->
    <section class="main-container_content">
      <!-- Section: Search -->
      <frame-search />
    </section>
  </div>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Components
import PageTitle from '@/shared/components/common/PageTitle.vue'
import FrameSearch from '@/shared/components/management_frame/FrameSearch.vue'
// Others
import { useStore } from 'vuex'

export default defineComponent({
  name: 'FramePage',

  components: {
    PageTitle,
    FrameSearch,
  },

  setup() {
    const store = useStore()
    return { store }
  },
})
</script>
