<template>
  <div>
    <!-- Block: Page title -->
    <page-title :title="$t('management_collection.create_collection')" />

    <!-- Block: Main content -->
    <collection-form />
  </div>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Components
import PageTitle from '@/shared/components/common/PageTitle.vue'
import CollectionForm from '@/shared/components/management_collection/CollectionForm.vue'
// Others
import { useStore } from 'vuex'

export default defineComponent({
  name: 'CreateCollectionPage',

  components: {
    PageTitle,
    CollectionForm,
  },

  setup() {
    const store = useStore()
    return { store }
  },
})
</script>
