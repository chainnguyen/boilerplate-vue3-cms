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
      <template v-if="!showPassword">
        <a-input
          :type="type"
          :disabled="disabled"
          :value="value"
          :class="classInput"
          :maxLength="maxlength ? maxlength : null"
          :placeholder="placeholder"
          :readOnly="!autofill || readonly"
          @input="handleType($event)"
          @focus="handleFocus"
          @blur="handleBlur"
          @keypress="type === 'number' ? preventE($event) : ''" />
      </template>

      <template v-else>
        <a-input-password
          :disabled="disabled"
          :value="value"
          :class="classInput"
          :placeholder="placeholder"
          :readOnly="!autofill || readonly"
          @input="handleType($event)"
          @focus="handleFocus"
          @keypress="type === 'number' ? preventE($event) : ''" />
      </template>

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
  name: 'InputTextComponent',

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

  methods: {
    preventE($event) {
      if (
        $event.which !== 8 &&
        $event.which !== 0 &&
        ($event.which < 48 || $event.which > 57)
      ) {
        $event.preventDefault()
      }
    },

    handleType($event) {
      if (this.$props.disabled) return
      this.$emit('change', $event.target.value)
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
