<template>
  <h4>InputUpload component</h4>
</template>

<script lang="ts">
// Composition
import { defineComponent, ref, computed, watch } from 'vue'
// Components
import ImageZoom from '@/shared/components/common/ImageZoom.vue'
// Others
import { useStore } from 'vuex'

export default defineComponent({
  name: 'InputUpload',

  components: {
    ImageZoom,
  },

  props: {
    vid: { type: String, default: '' },
    value: { type: [String, File, Object], default: null },
    returnType: { type: String, default: 'string' }, // string, object
    field: { type: String, default: '' },
    label: { type: String, default: '' },
    rules: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    classContainer: { type: String, default: '' },
    acceptableFileTypes: {
      type: String,
      default: 'image/png,image/jpeg,image/jpg',
    },
    sizeLimit: { type: [String, Number], default: 300 }, // unit MB
    isAudio: { type: Boolean, default: false },
    isPreview: { type: Boolean, default: false },
    previewAlign: { type: String, default: 'bottom' }, // right, bottom
    hiddenAsterisk: { type: Boolean, default: false },
    multiple: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },

  setup(props, { emit }) {
    const store = useStore()

    const previewSrc = ref<string | null>(null)
    const isUploading = ref<boolean>(false)
    const uploadRef = ref<InstanceType<typeof HTMLDivElement> | null>(null)

    // Getter & Setter
    const valueModel = ref<object | string | null>(null)
    watch(
      () => props.value,
      (val) => {
        valueModel.value = val
      },
      { immediate: true }
    )
    watch(valueModel, (val) => {
      if (val && props.isPreview && props.isAudio && uploadRef.value) {
        uploadRef.value?.load()
      }
      emit('update:value', val)
    })
    // END - Getter & Setter

    const inputName = computed<string>(() => {
      if (!valueModel.value) return props.placeholder

      if (typeof valueModel.value === 'object') {
        return valueModel.value?.name
      }
      return valueModel.value
    })

    const deleteFile = () => {
      valueModel.value = null
      previewSrc.value = null
    }

    const handlePostFile = (file: File) => {
      store
        .dispatch('upload/postFile', { upload_file: file })
        .then((res: any) => {
          if (res.success) {
            valueModel.value = res.data
            previewSrc.value = res.data.path
          } else {
            // handleRequestErrorMessage(res)
          }
        })
    }

    const handleChange = async ($event: any) => {
      const files: File[] = $event.target.files || $event.dataTransfer.files
      // If the file isn't an image nothing happens
      // Check size image before send server
      // if (!files.length || checkImageSizeByMb(files[0], props.sizeLimit))
      //   return

      if (!files.length) return

      isUploading.value = true

      if (props.returnType !== 'object') {
        valueModel.value = files[0]
        // previewSrc.value = await toBase64(files[0])
      } else {
        handlePostFile(files[0])
      }

      isUploading.value = false
      uploadRef.value?.reset()
    }

    return {
      previewSrc,
      isUploading,
      valueModel,
      inputName,

      deleteFile,
      handleChange,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/helpers/_mixins.scss';
@import '@/assets/scss/helpers/_variables.scss';

.label {
  margin-bottom: 4px;
  font-weight: bold;
  color: $text-color;
}

.file-button {
  position: relative;
  @include flex();
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  color: $text-weak-black-color;

  .anticon {
    margin: 0;
  }

  .anticon-delete {
    pointer-events: auto;
    transition: color 0.3s ease;
    &:hover {
      color: $text-light-black-color;
    }
  }
}

.file-input {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  pointer-events: none;
}

.preview-image {
  margin: 0 auto;
  max-width: 80%;

  img {
    width: 100%;
  }
}
</style>
