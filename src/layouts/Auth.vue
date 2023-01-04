<template>
  <main-components />
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Components
import MainComponents from '@/shared/components/Main'

export default defineComponent({
  name: 'AuthLayout',

  components: { MainComponents },
})
</script>
