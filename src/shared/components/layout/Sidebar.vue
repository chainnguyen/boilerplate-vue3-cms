<template>
  <a-layout-sider
    v-if="SIDEBAR.length"
    v-model="collapsedController"
    :trigger="null"
    width="240"
    class="custom-scrollbar-vertical scrollbar-blue"
    :style="{
      overflow: 'auto',
      height: 'calc(100vh - 48px)',
      position: 'fixed',
      left: 0,
      zIndex: 10,
    }">
    <a-menu mode="inline">
      <template v-for="sidebar in SIDEBAR">
        <template
          v-if="
            validProfile &&
            sidebar.dropdown &&
            sidebar.role.includes(userProfile.role)
          ">
          <a-sub-menu
            :key="sidebar.id"
            style="padding-left: 16px">
            <span
              slot="title"
              style="padding-left: 0">
              <a-icon :type="sidebar.icon" />
              <span v-text="$t(sidebar.title)" />
            </span>

            <template v-for="children in sidebar.dropdownItems">
              <router-link
                v-if="children.role.includes(userProfile.role)"
                :to="{ name: children.routeName }"
                :key="children.id"
                v-slot="{ navigate, isActive }"
                style="padding-left: 24px"
                custom>
                <li
                  @click="navigate"
                  :class="[
                    'ant-menu-item',
                    isActive ||
                    ('childrenRoute' in children &&
                      children.childrenRoutes.includes($route.name))
                      ? 'ant-menu-item-selected'
                      : null,
                  ]"
                  :title="$t(children.title)"
                  v-text="$t(children.title)" />
              </router-link>
            </template>
          </a-sub-menu>
        </template>

        <router-link
          v-else-if="validProfile && sidebar.role.includes(userProfile.role)"
          :key="sidebar.id"
          :to="{ name: sidebar.routeName }"
          custom
          v-slot="{ navigate, isActive }"
          style="padding-left: 16px"
          class="ant-menu-item">
          <li
            @click="navigate"
            role="menuitem"
            :class="{
              'ant-menu-item-selected':
                isActive || sidebar.childrenRoutes.includes($route.name),
            }">
            <a-icon :type="sidebar.icon" />
            <span
              :title="$t(sidebar.title)"
              v-text="$t(sidebar.title)" />
          </li>
        </router-link>
      </template>
    </a-menu>

    <div class="sidebar-trigger">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click.prevent="toggleSidebar" />
    </div>
  </a-layout-sider>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Others
import { useStore } from 'vuex'
import { SIDEBAR } from '@/enums/sidebar.enum'

export default defineComponent({
  name: 'SidebarComponent',

  props: {
    collapsed: { type: Boolean, required: true, default: false },
  },

  setup() {
    const store = useStore()

    const toggleSidebar = () => {}

    const handleResize = (event: EventSource) => {}

    return {
      SIDEBAR,

      toggleSidebar,
      handleResize,
    }
  },
})
</script>

<!--<script>-->
<!--// Store-->
<!--import { mapState, mapGetters } from 'vuex'-->
<!--// Other-->
<!--import { SIDEBAR } from '@/enums/sidebar.enum'-->

<!--export default {-->
<!--  name: 'SidebarComponent',-->

<!--  props: {-->
<!--    collapsed: { type: Boolean, required: true, default: false },-->
<!--  },-->

<!--  data() {-->
<!--    return {-->
<!--      SIDEBAR,-->
<!--    }-->
<!--  },-->

<!--  created() {-->
<!--    this.collapsedController = this.isMobile-->
<!--    window.addEventListener('resize', this.handleResize)-->
<!--  },-->

<!--  beforeDestroy() {-->
<!--    window.removeEventListener('resize', this.handleResize)-->
<!--  },-->

<!--  computed: {-->
<!--    ...mapState('auth', ['userProfile']),-->
<!--    ...mapGetters({ isMobile: 'isMobile' }),-->

<!--    collapsedController: {-->
<!--      get() {-->
<!--        return this.$props.collapsed-->
<!--      },-->
<!--      set(newVal) {-->
<!--        this.$emit('update:collapsed', newVal)-->
<!--      },-->
<!--    },-->

<!--    validProfile() {-->
<!--      return Object.keys(this.userProfile).length && this.userProfile-->
<!--    },-->
<!--  },-->

<!--  methods: {-->
<!--    toggleSidebar() {-->
<!--      this.collapsedController = !this.collapsedController-->
<!--    },-->

<!--    handleResize(event) {-->
<!--      const { innerWidth } = event.target-->

<!--      if (innerWidth <= 768) {-->
<!--        this.collapsedController = true-->
<!--      }-->
<!--    },-->
<!--  },-->
<!--}-->
<!--</script>-->

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_variables.scss';

.ant-menu-inline,
.ant-menu-vertical,
.ant-menu-vertical-left {
  border-right: none;
}
</style>
