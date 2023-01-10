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
      <a-date-picker
        :show-time="showTime"
        :value="modelDate"
        :placeholder="placeholder"
        :locale="localeOptions[locale]"
        :disabled="disabled"
        :disabledDate="handleDisabledDate"
        :valueFormat="valueFormat"
        :format="format"
        @change="handleChange" />

      <!-- Message Error -->
      <span
        v-if="errors[0]"
        class="errors"
        v-html="errors[0]" />
    </div>
  </ValidationProvider>
</template>

<script>
// Core
import moment from 'moment'
import english from 'ant-design-vue/lib/date-picker/locale/en_US'
import vietnamese from 'ant-design-vue/lib/date-picker/locale/vi_VN'
// Helpers
import { verifyArgument } from '@/shared/helpers'

export default {
  name: 'InputDatePickerComponent',

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    vid: { type: String, default: '' },
    value: { type: String, default: '' },
    valueFormat: { type: String, default: 'YYYY-MM-DD HH:mm:ss' },
    format: { type: String, default: 'YYYY-MM-DD' },
    locale: { type: String, default: 'vietnamese' },
    field: { type: String, default: '' },
    label: { type: String, default: '' },
    rules: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    hiddenAsterisk: { type: Boolean, default: false },
    classContainer: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    // before_today, today, after_today, before_and_today, after_and_today
    disabledType: { type: String, default: '' },
    disabledRange: { type: Array, default: () => [] },
    showTime: { type: Boolean, default: false },
  },

  data() {
    return {
      localeOptions: { english, vietnamese },
      argumentRule: [
        'before_today',
        'today',
        'after_today',
        'before_and_today',
        'after_and_today',
      ],
    }
  },

  computed: {
    modelDate() {
      return this.value ? moment(this.value) : null
    },
  },

  methods: {
    handleChange(value) {
      if (this.$props.disabled) return
      this.$emit('change', value)
    },

    handleDisabledDate(current) {
      if (this.$props.disabled) return false
      const { disabledType, disabledRange } = this.$props

      if (disabledType) {
        return this.executeDisabledType(current, disabledType)
      } else if (disabledRange.length) {
        return this.executeDisabledRange(current, disabledRange)
      } else {
        return false
      }
    },

    /**
     * @param current {date}
     * @param type {string}
     * @returns {boolean}
     */
    executeDisabledType(current, type) {
      verifyArgument(this.argumentRule, type)

      let result = false
      switch (type) {
        case 'before_today':
          result = moment().isAfter(current, 'day')
          break
        case 'today':
          result = moment().isSame(moment(current), 'day')
          break
        case 'after_today':
          result = moment().isBefore(moment(current), 'day')
          break
        case 'before_and_today':
          result = moment().isSameOrAfter(current, 'day')
          break
        case 'after_and_today':
          result = moment().isSameOrBefore(moment(current), 'day')
          break
      }

      return result
    },

    /**
     * @param current {date}
     * @param range {array}
     * @returns {boolean}
     */
    executeDisabledRange(current, range) {
      if (range.length > 3) {
        console.error(
          `The parameter's path was wrong. Props "disabledRange" expected only three parameters at most, please check again parameter.`
        )
        return false
      }

      const [periodStart, periodEnd, mode] = range
      let momentCompare = [false, false]
      !moment(periodStart).isValid() &&
        verifyArgument(this.argumentRule, periodStart)
      !moment(periodEnd).isValid() &&
        verifyArgument(this.argumentRule, periodEnd)

      // Between mode
      if (mode === 'between') {
        const start = periodStart !== 'today' ? moment(periodStart) : moment()
        return moment(current).isBetween(start, moment(periodEnd), 'day', '[]')
      }

      // Standard mode
      range.forEach((period, idx) => {
        if (idx >= 2) return

        switch (period) {
          case 'before_today':
            momentCompare[idx] = moment().isAfter(current, 'day')
            break
          case 'today':
            momentCompare[idx] = moment().isSame(moment(current), 'day')
            break
          case 'after_today':
            momentCompare[idx] = moment().isBefore(moment(current), 'day')
            break
          case 'before_and_today':
            momentCompare[idx] = moment().isSameOrAfter(current, 'day')
            break
          case 'after_and_today':
            momentCompare[idx] = moment().isSameOrBefore(moment(current), 'day')
            break
          default:
            momentCompare[idx] = moment(period).isBefore(current, 'day')
        }
      })

      return momentCompare[0] || momentCompare[1]
    },
  },
}
</script>

<style lang="scss" scoped>
.label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  color: #222222;
}
.ant-calendar-picker {
  width: 100%;
}
</style>
