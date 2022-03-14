<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Field } from '../../../typing/index'

export default defineComponent({
  name: 'text-input',
  props: {
    field: {} as PropType<Field>
  },
  emits: ['change']
})
</script>
<template>
  <textarea
    class="w-full text-left border"
    type="text"
    v-bind:value="String(field?.value)"
    v-bind:key="field?.customHTMLAttributes?.key"
    v-bind:placeholder="field?.customHTMLAttributes?.placeholder"
    v-bind:id="field?.customHTMLAttributes?.id"
    v-bind:name="field?.customHTMLAttributes?.name"
    rows="3"
    :required="field?.customHTMLAttributes?.required"
    @input="$emit('change')"
  >
  </textarea>
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
