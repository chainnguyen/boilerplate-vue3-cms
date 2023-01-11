<template>
  <div>
    <!-- Block: Page title -->
    <page-title title="Edit Frame" />

    <!-- Block: Main content -->
    <frame-form update-mode />
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
  name: 'EditFramePage',

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
