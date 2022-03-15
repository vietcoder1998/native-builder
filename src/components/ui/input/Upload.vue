<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CustomHTMLAttributes } from '../../../typing/fields'

export default defineComponent({
  name: 'upload',
  setup() {},
  props: {
    customHTMLAttributes: {} as PropType<CustomHTMLAttributes>,
    value: String
  }
})
</script>

<template>
  <div>
    <input
      type="file"
      ref="imageUploader"
      accept=".jpg, .png, .jepg"
      multiple
      @change="$emit('uploadImage')"
    />
    <img
      v-show="value && value !== ''"
      alt="pre-render"
      v-bind:src="value"
    />
  </div>
</template>
