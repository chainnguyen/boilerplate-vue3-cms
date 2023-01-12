<template>
  <h4>InputTextNumber component</h4>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputTextNumber',

  props: {
    vid: { type: String, default: '' },
    value: { type: [Number, String], default: '' },
    field: { type: String, default: '' },
    label: { type: String, default: '' },
    rules: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    min: { type: [String, Number], default: 1 },
    max: { type: [String, Number], default: 100 },
    classInput: { type: String, default: '' },
    classContainer: { type: String, default: '' },
    hiddenAsterisk: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    showPassword: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    autofill: { type: Boolean, default: true },
  },

  emits: ['change', 'blur'],

  setup(props, { emit }) {
    const handleType = (number: number): void => {
      if (props.disabled) return
      emit('change', number)
    }

    const handleFocus = ($event: any): void => {
      if (!props.autofill) {
        $event.target.removeAttribute('readonly')
      }
    }

    const handleBlur = ($event: any): void => {
      if (props.disabled) return
      emit('blur', $event.target.value)
    }

    return {
      handleType,
      handleFocus,
      handleBlur,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_variables.scss';

.label {
  margin-bottom: 4px;
  font-weight: bold;
  color: $text-color;
}
</style>
