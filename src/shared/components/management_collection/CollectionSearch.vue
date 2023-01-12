<template>
  <h1>Collection Search Component</h1>
  <br />
  <pre>{{ filter }}</pre>
</template>

<script lang="ts">
// Composition
import { defineComponent, ref } from 'vue'
// Others
import { useStore } from 'vuex'
// Types
import { CollectionFilter } from '@/types/views/collection'

export default defineComponent({
  name: 'CollectionSearch',

  setup() {
    const store = useStore()
    const filter = ref<CollectionFilter>({
      keyword: null,
      status: undefined,
    })

    return { store, filter }
  },
})
</script>
