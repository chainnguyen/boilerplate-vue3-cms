<template>
  <h4>InputTextarea component</h4>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputTextarea',

  props: {
    vid: { type: String, default: '' },
    value: { type: [String, Number], default: '' },
    field: { type: String, default: '' },
    label: { type: String, default: '' },
    rules: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    classInput: { type: String, default: '' },
    classContainer: { type: String, default: '' },
    hiddenAsterisk: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    autofill: { type: Boolean, default: true },
    maxlength: { type: [String, Number], default: '' },
  },

  setup(props, { emit }) {
    const handleType = ($event: any): void => {
      if (props.disabled) return
      emit('change', $event.target.value)
    }

    const handleFocus = ($event: any): void => {
      if (!props.autofill) {
        $event.target.removeAttribute('readonly')
      }
    }

    return {
      handleType,
      handleFocus,
    }
  },
})
</script>

<style lang="scss" scoped>
textarea.ant-input {
  min-height: 100px;
  resize: none;
}

.label {
  margin-bottom: 4px;
  font-weight: bold;
  color: #222222;
}
</style>
