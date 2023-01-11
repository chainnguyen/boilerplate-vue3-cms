<template>
  <h1>Frame Search Component</h1>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Others
import { useStore } from 'vuex'

export default defineComponent({
  name: 'FrameSearch',

  setup() {
    const store = useStore()
    return { store }
  },
})
</script>
