<template>
  <h1>Event Search Component</h1>
  <br />
  <pre>{{ filter }}</pre>
</template>

<script lang="ts">
// Composition
import { defineComponent, ref } from 'vue'
// Others
import { useStore } from 'vuex'
// Types
import { EventFilter } from '@/types/views/event'

export default defineComponent({
  name: 'EventSearch',

  setup() {
    const store = useStore()
    const filter = ref<EventFilter>({
      event_name: null,
      start_time: null,
      background_music: null,
      effect_movie_frame: [],
      background_frame: [],
      collection: [],
    })

    return { store, filter }
  },
})
</script>
