<template>
  <ValidationProvider
    ref="upload"
    tag="div"
    :name="field"
    :vid="vid"
    :rules="!valueModel ? rules : null"
    :class="classContainer"
    v-slot="{ errors }">
    <!-- Label -->
    <label
      v-if="label"
      class="label"
      :class="{ 'font-weight-normal': hiddenAsterisk }">
      {{ label }}
      <span
        v-if="rules.includes('required') && !hiddenAsterisk"
        class="required"
        v-text="'*'" />
    </label>

    <div
      class="position-relative d-flex"
      :class="[
        errors[0] ? 'has_error' : null,
        previewAlign === 'bottom' ? 'flex-column' : null,
      ]">
      <div
        class="flex-shrink-0 w-100"
        :class="[previewAlign === 'bottom' ? 'mb-2' : 'mr-2']">
        <!-- Field -->
        <label
          :for="`${vid}_upload`"
          :title="inputName"
          :class="{ 'ant-btn-loading': isUploading }"
          class="file-button ant-btn">
          <a-icon
            v-if="isUploading"
            type="loading" />
          <span
            class="text-ellipsis pr-2"
            v-text="inputName" />

          <a-icon
            v-if="!valueModel"
            type="upload"
            class="flex-shrink-0" />
          <a-icon
            v-else
            type="delete"
            class="flex-shrink-0"
            @click.prevent="deleteFile" />
        </label>

        <input
          type="file"
          :id="`${vid}_upload`"
          :disabled="valueModel || isUploading"
          :accept="acceptableFileTypes"
          class="file-input"
          @change="handleChange" />

        <!-- Message Error -->
        <span
          v-if="errors[0]"
          class="errors"
          v-html="errors[0]" />
      </div>

      <template v-if="isPreview">
        <!-- Preview image -->
        <template v-if="!isAudio">
          <figure
            v-if="(valueModel && valueModel.path) || previewSrc"
            class="preview-image">
            <image-zoom
              :src="valueModel.path || previewSrc"
              :alt="valueModel.name || 'preview-image'" />
          </figure>
        </template>

        <!-- Preview music -->
        <template v-else>
          <audio
            v-if="(valueModel && valueModel.path) || previewSrc"
            ref="audio"
            class="preview-music w-100"
            controls>
            <source :src="valueModel.path || previewSrc" />
          </audio>
        </template>
      </template>
    </div>
  </ValidationProvider>
</template>

<script>
// Store
import { mapActions } from 'vuex'
// Components
import ImageZoom from '@/shared/components/common/ImageZoom'
// Others
import {
  toBase64,
  checkImageSizeByMb,
  handleRequestErrorMessage,
} from '@/shared/helpers'

export default {
  name: 'InputUploadComponent',

  components: {
    ImageZoom,
  },

  model: {
    prop: 'value',
    event: 'change',
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

  data() {
    return {
      previewSrc: null,
      isUploading: false,
    }
  },

  computed: {
    valueModel: {
      get() {
        return this.$props.value
      },
      set(newVal) {
        this.$emit('change', newVal)
      },
    },

    inputName() {
      if (!this.valueModel) return this.$props.placeholder

      if (typeof this.valueModel === 'object') {
        return this.valueModel.name
      }
      return this.valueModel
    },
  },

  watch: {
    valueModel(val) {
      if (val && this.isPreview && this.isAudio && this.$refs.audio) {
        this.$refs.audio.load()
      }
    },
  },

  methods: {
    ...mapActions('upload', ['postFile']),

    deleteFile() {
      this.valueModel = null
      this.previewSrc = null
    },

    async handleChange(event) {
      const files = event.target.files || event.dataTransfer.files
      // If the file isn't an image nothing happens
      // Check size image before send server
      if (!files.length || checkImageSizeByMb(files[0], this.$props.sizeLimit))
        return

      this.isUploading = true

      if (this.$props.returnType !== 'object') {
        this.valueModel = files[0]
        this.previewSrc = await toBase64(files[0])
      } else {
        this.handlePostFile(files[0])
      }

      this.isUploading = false
      this.$refs.upload.reset()
    },

    handlePostFile(file) {
      this.postFile({ upload_file: file }).then((res) => {
        if (res.success) {
          this.valueModel = res.data
          this.previewSrc = res.data.path
        } else {
          handleRequestErrorMessage(res)
        }
      })
    },
  },
}
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
