<template>
  <h4>InputCheckbox component</h4>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputCheckbox',

  props: {
    vid: { type: String, default: '' },
    value: { type: [Boolean, String], default: false },
    field: { type: String, default: '' },
    label: { type: String, default: '' },
    nameLabel: { type: String, default: '' },
    rules: { type: String, default: '' },
    classInput: { type: String, default: '' },
    hiddenAsterisk: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    autofill: { type: Boolean, default: true },
  },

  emits: ['change'],

  setup(props, { emit }) {
    const handleChange = ($event: any): void => {
      if (props.disabled) return
      emit('change', $event.target.checked)
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
