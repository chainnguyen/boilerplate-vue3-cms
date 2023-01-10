<template>
  <div>
    <!-- Block: Page title -->
    <h1>Create Collection</h1>

    <!-- Block: Main content -->
    <collection-form-component />
  </div>
</template>

<script lang="ts">
// Composition
import { defineComponent } from 'vue'
// Store
// import store from '@/shared/store'
// Components
import CollectionFormComponent from '@/shared/components/management_collection/CollectionForm.vue'

export default defineComponent({
  name: 'CreateCollectionPage',

  components: {
    CollectionFormComponent,
  },

  setup() {
    return {}
  },
})
</script>
