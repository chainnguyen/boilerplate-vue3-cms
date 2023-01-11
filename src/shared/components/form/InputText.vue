<template>
  <h4>InputText component</h4>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputText',

  props: {
    vid: { type: String, default: '' },
    value: { type: [String, Number], default: '' },
    field: { type: String, default: '' },
    label: { type: String, default: '' },
    rules: { type: String, default: '' },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    hiddenAsterisk: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    showPassword: { type: Boolean, default: false },
    classInput: { type: String, default: '' },
    classContainer: { type: String, default: '' },
    readonly: { type: Boolean, default: false },
    autofill: { type: Boolean, default: true },
    maxlength: { type: [String, Number], default: '' },
  },

  setup(props, { emit }) {
    const preventE = ($event: any): void => {
      if (
        $event.which !== 8 &&
        $event.which !== 0 &&
        ($event.which < 48 || $event.which > 57)
      ) {
        $event.preventDefault()
      }
    }

    const handleType = ($event: any): void => {
      if (props.disabled) return
      emit('change', $event.target.value)
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
      preventE,
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
