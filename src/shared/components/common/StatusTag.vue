<template>
  <span
    class="status"
    :style="{ backgroundColor: statusColor }"
    v-text="name" />
</template>

<script lang="ts">
// Composition
import { defineComponent, reactive, computed } from 'vue'

export default defineComponent({
  name: 'StatusTagComponent',

  props: {
    name: { type: String, required: true, default: '' },
    type: { type: String, required: true, default: '' },
  },

  setup(props) {
    const colorControl: { acceptable: string[]; color: string }[] = reactive([
      {
        acceptable: ['happening', 'applying'],
        color: '#4CAF50',
      },
      {
        acceptable: ['happened', 'not-apply'],
        color: '#717A89',
      },
      {
        acceptable: ['upcoming'],
        color: '#8F0101',
      },
    ])

    const statusColor = computed<string>(() => {
      const result = colorControl.find((i) => i.acceptable.includes(props.type))
      return result ? result.color : '#000000'
    })

    return {
      colorControl,
      statusColor,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_variables.scss';

.status {
  font-size: 10px;
  font-weight: 700;
  color: $white;
  padding: 2px 8px;
  border-radius: 8px;
}
</style>
