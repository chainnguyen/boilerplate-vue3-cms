<template>
  <h4>InputSelect component</h4>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputSelect',

  props: {
    vid: { type: String, default: '' },
    value: { type: [String, Number, Array], default: '' },
    options: { type: [Array, Object], default: () => [] },
    field: { type: String, default: '' },
    label: { type: String, default: '' },
    contentField: { type: String, default: 'name' },
    moduleName: { type: String, default: '' },
    rules: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    classContainer: { type: String, default: '' },
    showArrow: { type: Boolean, default: true },
    hiddenAsterisk: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    limitMultiple: { type: [String, Number], default: 0 },
    disabled: { type: Boolean, default: false },
  },

  setup(props, { emit }) {
    const handleChange = (value: string): void => {
      if (props.disabled) return
      const { multiple, limitMultiple } = props

      if (multiple) {
        const verifyValue = [...value]
        if (+limitMultiple > 1 && verifyValue.length > +limitMultiple) {
          verifyValue.pop()
        }
        emit('change', verifyValue)
      } else {
        emit('change', value)
      }
    }

    const handleSearch = (value: string, option: any) =>
      option.componentOptions.children[0].text
        .toLowerCase()
        .indexOf(value.toString().toLowerCase().trim()) >= 0

    return {
      handleChange,
      handleSearch,
    }
  },
})
</script>

<style lang="scss">
@import '@/assets/scss/helpers/_variables.scss';

.label {
  margin-bottom: 4px;
  font-weight: bold;
  color: $text-color;
}
.ant-select {
  width: 100%;
  .ant-select-selection--multiple {
    .ant-select-selection__choice__remove {
      bottom: 10%;
    }
  }
}
</style>
