<template>
  <a-result
    status="500"
    title="500"
    :sub-title="$t('server_error')">
    <template #extra>
      <router-link
        tag="button"
        :to="{ name: 'home' }"
        class="ant-btn ant-btn-primary"
        v-text="$t('back')" />
    </template>
  </a-result>
</template>
