<template>
  <div>
    <!-- Block: Page title -->
    <page-title title="Edit Collection" />

    <!-- Block: Main content -->
    <collection-form update-mode />
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
  name: 'EditCollectionPage',

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
