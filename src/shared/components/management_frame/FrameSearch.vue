<template>
  <h1>Frame Search Component</h1>
  <br />
  <pre>{{ filter }}</pre>
</template>

<script lang="ts">
// Composition
import { defineComponent, ref } from 'vue'
// Others
import { useStore } from 'vuex'
// Types
import { FrameFilter } from '@/types/views/frame'

export default defineComponent({
  name: 'FrameSearch',

  setup() {
    const store = useStore()
    const filter = ref<FrameFilter>({
      keyword: null,
      status: undefined,
    })

    return { store, filter }
  },
})
</script>
