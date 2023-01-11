<template>
  <div>
    <!-- Block: Page title -->
    <page-title :title="$t('management_event.create_event')" />

    <!-- Block: Main content -->
    <event-form />
  </div>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Components
import PageTitle from '@/shared/components/common/PageTitle.vue'
import EventForm from '@/shared/components/management_event/EventForm.vue'
// Others
import { useStore } from 'vuex'

export default defineComponent({
  name: 'CreateEventPage',

  components: {
    PageTitle,
    EventForm,
  },

  setup() {
    const store = useStore()
    return { store }
  },
})
</script>
