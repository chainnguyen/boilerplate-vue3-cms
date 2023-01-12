<template>
  <h4>InputRadio component</h4>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputRadio',

  props: {
    vid: { type: String, default: '' },
    value: { type: [Boolean, String], default: false },
    options: { type: [Array, Object], default: () => [] },
    field: { type: String, default: '' },
    label: { type: String, default: '' },
    nameLabel: { type: String, default: '' },
    rules: { type: String, default: '' },
    modeGroup: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    classInput: { type: String, default: '' },
    hiddenAsterisk: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    autofill: { type: Boolean, default: true },
  },

  emits: ['change'],

  setup(props, { emit }) {
    const handleChange = ($event: any): void => {
      if (props.modeGroup) {
        emit('change', $event.target.value)
      } else {
        emit('change', $event.target.checked)
      }
    }

    const handleFocus = ($event: any): void => {
      if (!props.autofill) {
        $event.target.removeAttribute('readonly')
      }
    }

    return {
      handleChange,
      handleFocus,
    }
  },
})
</script>

<style lang="scss">
.label {
  margin-bottom: 4px;
  font-weight: bold;
  color: #222222;
}
</style>
