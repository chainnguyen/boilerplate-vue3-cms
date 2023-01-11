<template>
  <a-layout-header
    id="header"
    class="d-flex justify-content-between align-items-center">
    <router-link
      :to="{ name: 'home' }"
      tag="h1"
      class="header-logo blur-effect mb-0"
      v-text="'Logo template'" />

    <div class="header-profile">
      <div
        class="header-profile-avatar"
        :style="{ 'background-image': `url('${userAvatar}')` }" />

      <a-dropdown placement="bottomRight">
        <p
          v-if="Object.keys(userProfile).length && userProfile.name"
          :title="userProfile.name"
          v-text="userProfile.name"
          class="header-profile-name" />
        <a-menu slot="overlay">
          <a-menu-item>
            <span
              @click.prevent="handleLogout"
              v-text="$t('log_out')" />
          </a-menu-item>
        </a-menu>
      </a-dropdown>

      <a-dropdown placement="bottomRight">
        <img
          :src="require('@/assets/images/language-icon.png')"
          class="cursor-pointer"
          alt="language-icon" />
        <a-menu slot="overlay">
          <a-menu-item
            v-for="locale in LOCALE"
            :key="`locale-${locale}`"
            :class="{
              'ant-dropdown-menu-item-active': $i18n.locale === locale,
            }">
            <span
              @click.prevent="changeLanguage(locale)"
              v-text="locale" />
            <a-icon
              v-if="$i18n.locale === locale"
              type="check"
              class="ml-3" />
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
// Composition
import { defineComponent, ref, computed } from 'vue'
// Others
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { LOCALE } from '@/enums/locale.enum'
// Types
import { StoreUserProfile } from '@/types/store'

export default defineComponent({
  name: 'HeaderLayout',

  setup() {
    const store = useStore()
    const router = useRouter()

    const defaultAvatar = ref<string>(
      require('@/assets/images/noimage_user.svg')
    )

    const userProfile = computed<StoreUserProfile>(
      () => store.state['auth/userProfile']
    )
    const userAvatar = computed<string>(() =>
      userProfile.value &&
      Object.keys(userProfile.value).length &&
      userProfile.value.avatar
        ? userProfile.value.avatar
        : defaultAvatar.value
    )

    const changeLanguage = (lang: string): void => {
      // If the language does not exist will do nothing
      if (!Object.values(LOCALE).includes(lang)) return

      // const htmlLang: string | undefined = Object.keys(LOCALE).find(
      //   (key: string) => LOCALE[key] === lang
      // )
      store.dispatch('language/setLanguage', lang)
      // document.querySelector('html').setAttribute('lang', htmlLang)
    }

    const handleLogout = (): void => {
      store
        .dispatch('auth/userLogout')
        .then((res) => {
          if (res) {
            // this.onSuccess(this.$t('completion'), this.$t('logout_success'))
            router.push({ name: 'auth.login' })
          }
        })
        .catch((err) => err)
    }

    return {
      defaultAvatar,
      userProfile,
      userAvatar,
      LOCALE,

      changeLanguage,
      handleLogout,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_variables.scss';
@import '@/assets/scss/helpers/_mixins.scss';

#header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  color: $white;
  background-color: $main-color;
  height: 48px;
  padding: 0 16px 0 11px;
  z-index: 2;
  @include transition(all 0.2s ease-out);

  .header-profile {
    display: flex;
    align-items: center;
    &-avatar {
      width: 30px;
      height: 30px;
      margin-right: 7px;
      border-radius: 50%;
      background-size: cover;
      background-position: 50%;
      background-color: #fffbfb;
    }
    &-name {
      font-size: 14px;
      line-height: 22px;
      padding-left: 8px;
      margin: 0 25px 0 0;
      max-width: 300px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      cursor: pointer;
    }
  }

  .header-logo {
    color: $white;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
