<template>
  <a-pagination
    :current="currentPage"
    :page-size="pageSize"
    :total="total"
    :page-size-options="['10', '20', '50']"
    :show-size-changer="showSizeChanger"
    :show-total="onShowTotal"
    @showSizeChange="onShowSizeChange"
    @change="onChange">
  </a-pagination>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Others
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'Pagination',

  props: {
    total: { type: Number, default: 0 },
    currentPage: { type: Number, default: 1 },
    pageSize: { type: Number, default: 10 },
    showTotal: { type: Boolean, default: false },
    showSizeChanger: { type: Boolean, default: false },
  },

  emits: ['handleCurrentChange', 'handleSizeChange'],

  setup(props, { emit }) {
    const t = useI18n()

    const onChange = (val: string | number) => {
      emit('handleCurrentChange', val)
    }

    const onShowTotal = (total: number): string =>
      props.showTotal ? t('total_number') + total + ' ' + t('record') : ''

    const onShowSizeChange = (current: string, pageSize: number): void => {
      emit('handleSizeChange', { page: current, per_page: pageSize })
    }

    return {
      onChange,
      onShowTotal,
      onShowSizeChange,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_variables.scss';

.ant-pagination {
  padding: 11px 10px;
  text-align: right;
  background-color: $white;
}
</style>
