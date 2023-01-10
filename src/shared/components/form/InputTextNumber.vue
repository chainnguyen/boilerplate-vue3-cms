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
      <a-input-number
        :disabled="disabled"
        :value="value"
        :class="classInput"
        :placeholder="placeholder"
        :readOnly="!autofill || readonly"
        :min="+min"
        :max="+max"
        @change="handleType($event)"
        @focus="handleFocus"
        @blur="handleBlur" />

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
  name: 'InputTextNumberComponent',

  model: {
    prop: 'value',
    event: 'change',
  },

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

  methods: {
    handleType($event) {
      if (this.$props.disabled) return
      this.$emit('change', $event)
    },

    handleFocus($event) {
      if (!this.autofill) {
        $event.target.removeAttribute('readonly')
      }
    },

    handleBlur(event) {
      if (this.$props.disabled) return
      this.$emit('blur', event.target.value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_variables.scss';

.label {
  margin-bottom: 4px;
  font-weight: bold;
  color: $text-color;
}
</style>
