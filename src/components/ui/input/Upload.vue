<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { Field } from '../../../typing/index'

export default defineComponent({
  name: 'upload',
  setup() {},
  props: {
    field: {} as PropType<Field>
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
      v-show="field?.value && field?.value !== ''"
      alt="pre-render"
      v-bind:src="String(field?.value)"
    />
  </div>
</template>
