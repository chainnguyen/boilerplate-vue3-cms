<template>
  <ValidationProvider
    tag="div"
    :name="field"
    :vid="vid"
    :rules="rules"
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
      <template
        v-if="modeGroup && (options.length || Object.keys(options).length)">
        <a-radio-group
          :value="value"
          :class="classInput"
          :readOnly="!autofill || readonly"
          @change="handleChange"
          @focus="handleFocus">
          <template v-for="(option, index) in options">
            <a-radio
              :key="index"
              :value="option.id">
              {{ option.name }}
            </a-radio>
          </template>
        </a-radio-group>
      </template>

      <template v-else>
        <a-radio
          :disabled="disabled"
          :value="value"
          :class="classInput"
          :readOnly="!autofill || readonly"
          @change="handleChange"
          @focus="handleFocus">
          {{ nameLabel }}
        </a-radio>
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
  name: 'InputRadioComponent',

  model: {
    prop: 'value',
    event: 'change',
  },

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

  methods: {
    handleChange($event) {
      if (this.modeGroup) {
        this.$emit('change', $event.target.value)
      } else {
        this.$emit('change', $event.target.checked)
      }
    },

    handleFocus($event) {
      if (!this.autofill) {
        $event.target.removeAttribute('readonly')
      }
    },
  },
}
</script>

<style lang="scss">
.label {
  margin-bottom: 4px;
  font-weight: bold;
  color: #222222;
}
</style>
