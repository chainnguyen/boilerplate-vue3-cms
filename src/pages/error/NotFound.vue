<template>
  <a-result
    status="404"
    title="404"
    :sub-title="$t('not_found')">
    <template #extra>
      <router-link
        tag="button"
        :to="{ name: 'home' }"
        class="ant-btn ant-btn-primary"
        v-text="$t('back')" />
    </template>
  </a-result>
</template>
