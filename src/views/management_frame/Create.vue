<template>
  <div>
    <!-- Block: Page title -->
    <page-title :title="$t('management_frame.create_frame')" />

    <!-- Block: Main content -->
    <frame-form />
  </div>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Components
import PageTitle from '@/shared/components/common/PageTitle.vue'
import FrameForm from '@/shared/components/management_frame/FrameForm.vue'
// Others
import { useStore } from 'vuex'

export default defineComponent({
  name: 'CreateFramePage',

  components: {
    PageTitle,
    FrameForm,
  },

  setup() {
    const store = useStore()
    return { store }
  },
})
</script>
