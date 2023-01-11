<template>
  <transition
    name="page"
    mode="out-in">
    <router-view />
  </transition>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ResourceLayout',
})
</script>
