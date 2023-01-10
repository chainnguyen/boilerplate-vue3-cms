<template>
  <div id="app">
    <component
      :is="layout"
      v-if="layout" />

    <loading-component v-if="loading" />
  </div>
</template>

<script lang="ts">
// Composition
import { defineComponent, computed } from 'vue'
// Components
import LoadingComponent from '@/shared/components/Loading.vue'
// Others
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Application',

  components: {
    LoadingComponent,
    auth: () => import(/* webpackChunkName: "auth" */ '@/layouts/Auth.vue'),
    default: () =>
      import(/* webpackChunkName: "default" */ '@/layouts/Default.vue'),
  },

  setup() {
    const store = useStore()
    const layout = computed<string>(() => store.getters['layout'])
    const loading = computed<boolean>(() => store.state['loader/loading'])

    return {
      layout,
      loading,
    }
  },
})
</script>

<style lang="scss" scoped>
#app {
  max-height: 100vh;
  overflow: hidden;
}
</style>
