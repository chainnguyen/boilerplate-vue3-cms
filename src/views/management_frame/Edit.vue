<template>
  <div>
    <!-- Block: Page title -->
    <h1>Edit Frame</h1>

    <!-- Block: Main content -->
    <frame-form-component />
  </div>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Store
// import store from '@/shared/store'
// Components
import FrameFormComponent from '@/shared/components/management_frame/FrameForm.vue'

export default defineComponent({
  name: 'EditFramePage',

  components: {
    FrameFormComponent,
  },

  setup() {
    return {}
  },
})
</script>
