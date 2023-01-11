<template>
  <h1>Collection Search Component</h1>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Others
import { useStore } from 'vuex'

export default defineComponent({
  name: 'CollectionSearch',

  setup() {
    const store = useStore()
    return { store }
  },
})
</script>
