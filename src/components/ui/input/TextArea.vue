<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CustomHTMLAttributes } from '../../../typing/fields'

export default defineComponent({
  name: 'text-input',
  props: {
    customHTMLAttributes: {} as PropType<CustomHTMLAttributes>,
    value: Number
  },
  emits: ['change']
})
</script>
<template>
  <textarea
    class="w-full text-left border"
    type="text"
    v-bind:value="value"
    v-bind:key="customHTMLAttributes?.key"
    v-bind:placeholder="customHTMLAttributes?.placeholder"
    v-bind:id="customHTMLAttributes?.id"
    v-bind:name="customHTMLAttributes?.name"
    :rows="customHTMLAttributes?.rows || 4"
    :required="customHTMLAttributes?.required"
    @input="$emit('change')"
  >
  </textarea>
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
