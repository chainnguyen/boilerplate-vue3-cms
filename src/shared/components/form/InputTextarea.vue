<template>
  <ValidationProvider
    tag="div"
    :name="field"
    :vid="vid"
    :rules="rules + '|not_emoji'"
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
      <a-textarea
        :disabled="disabled"
        :value="value"
        :class="classInput"
        :placeholder="placeholder"
        :readOnly="!autofill || readonly"
        @input="handleType($event)"
        @focus="handleFocus" />

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
  name: 'InputTextareaComponent',

  model: {
    prop: 'value',
    event: 'change',
  },

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

  methods: {
    handleType($event) {
      if (this.$props.disabled) return
      this.$emit('change', $event.target.value)
    },

    handleFocus($event) {
      if (!this.autofill) {
        $event.target.removeAttribute('readonly')
      }
    },
  },
}
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
