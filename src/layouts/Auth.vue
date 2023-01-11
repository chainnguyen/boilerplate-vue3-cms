<template>
  <main-layout />
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Components
import MainLayout from '@/shared/components/Main.vue'

export default defineComponent({
  name: 'AuthLayout',

  components: { MainLayout },
})
</script>
