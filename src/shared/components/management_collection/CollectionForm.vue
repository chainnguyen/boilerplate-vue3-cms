<template>
  <h1>Collection Form Component</h1>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Others
import { useStore } from 'vuex'

export default defineComponent({
  name: 'CollectionForm',

  props: {
    updateMode: { type: Boolean, default: false },
  },

  setup() {
    const store = useStore()
    return { store }
  },
})
</script>
