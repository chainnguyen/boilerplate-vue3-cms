<template>
  <div>
    <!-- Block: Page title -->
    <h1>Create Event</h1>

    <!-- Block: Main content -->
    <event-form-component />
  </div>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Store
// import store from '@/shared/store'
// Components
import EventFormComponent from '@/shared/components/management_event/EventForm.vue'

export default defineComponent({
  name: 'CreateEventPage',

  components: {
    EventFormComponent,
  },

  setup() {
    return {}
  },
})
</script>
