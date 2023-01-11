<template>
  <a-tooltip
    :trigger="trigger"
    :placement="placement"
    :getPopupContainer="(triggerNode) => triggerNode.parentNode">
    <template slot="title">
      <span v-text="title" />
    </template>

    <slot />
  </a-tooltip>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tooltip',

  props: {
    title: { type: String, required: true, default: '' },
    // topLeft, top, topRight, leftTop, left, leftBottom, rightTop, right, rightBottom, bottomLeft, bottom, bottomRight
    placement: { type: String, default: 'topRight' },
    // hover, focus, click, contextmenu
    trigger: { type: [String, Array], default: () => ['hover'] },
  },
})
</script>
