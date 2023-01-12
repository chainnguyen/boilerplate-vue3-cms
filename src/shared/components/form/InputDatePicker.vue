<template>
  <h4>InputDatePicker component</h4>
</template>

<script lang="ts">
// Composition
import { defineComponent, PropType, reactive, computed } from 'vue'
// Others
import moment, { Moment } from 'moment'
import english from 'ant-design-vue/lib/date-picker/locale/en_US'
import vietnamese from 'ant-design-vue/lib/date-picker/locale/vi_VN'
// Types
import { DisabledType, IFreeObject } from '@/types/global'

export default defineComponent({
  name: 'InputDatePicker',

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
    disabledType: {
      type: String as PropType<DisabledType>,
      default: '',
    },
    disabledRange: {
      type: Array as PropType<(DisabledType | string)[]>,
      default: () => [],
    },
    showTime: { type: Boolean, default: false },
  },

  emits: ['change'],

  setup(props, { emit }) {
    const localeOptions: IFreeObject = reactive({ english, vietnamese })
    const argumentRule: DisabledType[] = reactive([
      'before_today',
      'today',
      'after_today',
      'before_and_today',
      'after_and_today',
    ])

    const modelDate = computed<Moment | null>(() => (props.value ? moment(props.value) : null))

    const handleChange = (value: Date | string) => {
      if (props.disabled) return
      emit('change', value)
    }

    /**
     * @param current {date}
     * @param type {string}
     * @returns {boolean}
     */
    const executeDisabledType = (current: string, type: string): boolean => {
      // verifyArgument(this.argumentRule, type)

      let result: boolean = false
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
    }

    /**
     * @param current {date}
     * @param range {array}
     * @returns {boolean}
     */
    const executeDisabledRange = (current: string, range: (string | unknown)[]): boolean => {
      if (range.length > 3) {
        console.error(
          `The parameter's path was wrong. Props "disabledRange" expected only three parameters at most, please check again parameter.`
        )
        return false
      }

      const [periodStart, periodEnd, mode] = range
      let momentCompare: boolean[] = [false, false]
      // !moment(periodStart).isValid() &&
      // verifyArgument(this.argumentRule, periodStart)
      // !moment(periodEnd).isValid() &&
      // verifyArgument(this.argumentRule, periodEnd)

      // Between mode
      if (mode === 'between') {
        const start: Moment = periodStart !== 'today' ? moment(periodStart) : moment()
        return moment(current).isBetween(start, moment(periodEnd), 'day', '[]')
      }

      // Standard mode
      range.forEach((period: string | unknown, idx: number) => {
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
    }

    const handleDisabledDate = (current: string): boolean => {
      if (props.disabled) return true
      const { disabledType, disabledRange } = props

      if (disabledType) {
        return executeDisabledType(current, disabledType)
      } else if (disabledRange.length) {
        return executeDisabledRange(current, disabledRange)
      } else {
        return false
      }
    }

    return {
      localeOptions,
      argumentRule,
      modelDate,

      handleChange,
      handleDisabledDate,
    }
  },
})
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
