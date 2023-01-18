<template>
  <a-layout-content
    id="main"
    :class="{ 'full-screen': layout === 'auth' }">
    <transition
      name="page"
      mode="out-in">
      <router-view />
    </transition>
  </a-layout-content>
</template>

<script lang="ts">
// Composition
import { defineComponent, computed } from 'vue'
// Others
import { useStore } from 'vuex'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const store = useStore()
    const layout = computed<string>(() => store.getters['layout'])

    return { layout }
  },
})
</script>

<style lang="scss" scoped>
#main {
  &.full-screen {
    margin: 0;
    padding: 0;
  }
}
</style>
