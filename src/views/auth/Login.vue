<template>
  <h1>Login page</h1>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Others
import { useStore } from 'vuex'

export default defineComponent({
  name: 'LoginPage',

  setup() {
    const store = useStore()
    return { store }
  },
})
</script>
