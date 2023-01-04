<template>
  <a-layout>
    <!--    <header-components/>-->

    <a-layout
      id="components-layout-demo-custom-trigger"
      :class="{ 'layout-fold': collapsed }">
      <!--      <sidebar-components :collapsed.sync="collapsed"/>-->
      <a-layout id="main-layout">
        <!--        <breadcrumb-components/>-->

        <a-config-provider :locale="locale">
          <!--          <main-components/>-->
        </a-config-provider>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
// Composition
import { defineComponent, ref } from 'vue'
// import SidebarComponents from '@/shared/components/layout/Sidebar'
// import HeaderComponents from '@/shared/components/layout/Header'
// import MainComponents from '@/shared/components/Main'
// import BreadcrumbComponents from '@/shared/components/common/Breadcrumb.vue'
// Others
import vi_VN from 'ant-design-vue/es/locale/vi_VN'

export default defineComponent({
  name: 'DefaultLayout',

  components: {},

  setup() {
    const collapsed = ref<boolean>(false)

    return {
      collapsed,
      locale: vi_VN,
    }
  },
})
</script>

<style lang="scss">
@import '@/assets/scss/helpers/_variables.scss';

#components-layout-demo-custom-trigger {
  margin: 48px 0 0 213px;
  min-height: 100vh;
  &.layout-fold {
    margin-left: 58px;
  }

  .sidebar-trigger {
    display: flex;
    align-items: center;
    border-top: 2px solid $light-grey-blue;
    height: 40px;

    .trigger {
      font-size: 18px;
      padding: 0 16px;
      cursor: pointer;
      transition: all 0.25s linear;
      &:hover {
        color: $primary-color;
      }
    }
  }

  .ant-menu.ant-menu-root {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin-bottom: 40px;
  }
}
</style>
