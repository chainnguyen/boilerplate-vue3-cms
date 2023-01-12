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
import { defineComponent, PropType } from 'vue'

type Placements =
  | 'topLeft'
  | 'top'
  | 'topRight'
  | 'leftTop'
  | 'left'
  | 'leftBottom'
  | 'rightTop'
  | 'right'
  | 'rightBottom'
  | 'bottomLeft'
  | 'bottom'
  | 'bottomRight'

type Triggers = 'hover' | 'focus' | 'click' | 'contextmenu'

export default defineComponent({
  name: 'Tooltip',

  props: {
    title: { type: String, required: true, default: '' },
    placement: {
      type: String as PropType<Placements>,
      default: 'topRight',
    },
    trigger: {
      type: [String, Array] as PropType<Triggers | Triggers[]>,
      default: () => ['hover'],
    },
  },
})
</script>
