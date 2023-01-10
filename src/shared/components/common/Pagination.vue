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

export default defineComponent({
  name: 'PaginationComponent',

  props: {
    total: { type: Number, default: 0 },
    currentPage: { type: Number, default: 1 },
    pageSize: { type: Number, default: 10 },
    showTotal: { type: Boolean, default: false },
    showSizeChanger: { type: Boolean, default: false },
  },

  setup(_, { emit }) {
    const onChange = (val: string | number) => {
      emit('handleCurrentChange', val)
    }

    const onShowTotal = (total: number) => {
      // return (
      //   this.showTotal &&
      //   this.$t('total_number') + ' ' + total + ' ' + this.$t('record')
      // ),
    }

    const onShowSizeChange = (current: string, pageSize: number) => {
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
