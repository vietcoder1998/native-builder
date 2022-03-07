<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Field } from '../../../typing/fields'

export default defineComponent({
  name: 'text-input',
  props: {
    field: {} as PropType<Field>
  },
  emits: ['change']
})
</script>
<template>
  <input
    class="w-full text-left"
    type="text"
    v-model="field.value"
    :required="field?.customHTMLAttributes.required"
    :placeholder="field?.customHTMLAttributes.placeholder"
    :id="field?.customHTMLAttributes.id"
    :name="field?.customHTMLAttributes.name"
  />
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
