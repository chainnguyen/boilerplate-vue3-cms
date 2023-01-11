<template>
  <a-layout-content
    id="main"
    :class="{ 'full-screen': layout === 'auth' }">
    <transition
      name="page"
      mode="out-in">
      <router-view v-if="true" />
    </transition>
  </a-layout-content>
</template>

<script lang="ts">
// Composition
import { computed, defineComponent } from 'vue'
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
