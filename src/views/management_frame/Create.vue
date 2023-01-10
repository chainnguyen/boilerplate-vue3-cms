<template>
  <div>
    <!-- Block: Page title -->
    <h1>Create Frame</h1>

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
  name: 'CreateFramePage',

  components: {
    FrameFormComponent,
  },

  setup() {
    return {}
  },
})
</script>
