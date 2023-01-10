<template>
  <main-component />
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Components
import MainComponent from '@/shared/components/Main.vue'

export default defineComponent({
  name: 'AuthLayout',

  components: { MainComponent },
})
</script>
