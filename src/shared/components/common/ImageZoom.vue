<template>
  <div class="w-100">
    <img
      :class="[src ? 'cursor-pointer' : null, classImage]"
      :src="src || fallBack"
      :alt="alt"
      loading="lazy"
      @load="onLoaded"
      @click.prevent="src ? onClickZoom() : null" />

    <a-modal
      v-model="visible"
      :footer="null"
      class="modal-image-zoom">
      <img
        class="w-100"
        :src="src"
        :alt="alt" />
    </a-modal>
  </div>
</template>

<script lang="ts">
// Composition
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ImageZoom',

  props: {
    src: { type: String, required: true, default: '' },
    alt: { type: String, default: 'vue2-cms-image' },
    classImage: { type: String, default: null },
    fallBack: {
      type: String,
      default: require('@/assets/images/noimage_bg.png'),
    },
  },

  setup(_, { emit }) {
    const visible = ref<boolean>(false)

    const onClickZoom = (): void => {
      visible.value = true
    }

    const onLoaded = ($event: any): void => {
      const { path } = $event
      const loaded: boolean = path[0].complete && path[0].naturalHeight !== 0
      emit('update:allLoaded', loaded)
    }

    return {
      visible,

      onLoaded,
      onClickZoom,
    }
  },
})
</script>
