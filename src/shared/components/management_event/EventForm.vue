<template>
  <h1>Event Form Component</h1>
  <p>{{ 'mode ' + (updateMode ? 'EDIT' : 'CREATE') }}</p>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Others
import { useStore } from 'vuex'

export default defineComponent({
  name: 'EventForm',

  props: {
    updateMode: { type: Boolean, default: false },
  },

  setup() {
    const store = useStore()
    return { store }
  },
})
</script>
