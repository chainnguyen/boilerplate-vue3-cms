<template>
  <ValidationProvider
    tag="div"
    :name="field"
    :vid="vid"
    :rules="rules"
    :class="classContainer"
    v-slot="{ errors }">
    <!-- Label -->
    <label
      v-if="label"
      class="label"
      :class="{ 'font-weight-normal': hiddenAsterisk }">
      {{ label }}
      <span
        v-if="rules.includes('required') && !hiddenAsterisk"
        class="required"
        v-text="'*'" />
    </label>

    <div :class="{ has_error: errors[0] }">
      <!-- Field -->
      <a-select
        :value="value || value == '0' ? value : undefined"
        :mode="multiple ? 'multiple' : undefined"
        :placeholder="placeholder"
        :disabled="disabled"
        :showArrow="showArrow"
        :not-found-content="$t('no_data')"
        :allow-clear="multiple"
        :getPopupContainer="(triggerNode) => triggerNode.parentNode"
        :filterOption="handleSearch"
        @change="handleChange">
        <template v-for="(option, index) in options">
          <a-select-option
            :key="index"
            :value="option.value">
            {{
              moduleName
                ? $t(moduleName + '.' + option[contentField])
                : option[contentField]
            }}
          </a-select-option>
        </template>
      </a-select>

      <!-- Message Error -->
      <span
        v-if="errors[0]"
        class="errors"
        v-html="errors[0]" />
    </div>
  </ValidationProvider>
</template>

<script>
export default {
  name: 'InputSelectComponent',

  model: {
    prop: 'value',
    event: 'change',
  },

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

  methods: {
    handleChange(value) {
      if (this.$props.disabled) return
      const { multiple, limitMultiple } = this.$props

      if (multiple) {
        const verifyValue = [...value]
        if (+limitMultiple > 1 && verifyValue.length > +limitMultiple) {
          verifyValue.pop()
        }
        this.$emit('change', verifyValue)
      } else {
        this.$emit('change', value)
      }
    },

    handleSearch(value, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(value.toString().toLowerCase().trim()) >= 0
      )
    },
  },
}
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
