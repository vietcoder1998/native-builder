<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Field } from '../../../typing/fields'

export default defineComponent({
  name: 'number-input',
  props: {
    field: {} as PropType<Field>
  },
  emits: ['change']
})
</script>
<template>
  <input
    class="w-full text-left"
    type="number"
    v-model="field.value"
    :required="field?.customHTMLAttributes.required"
    :placeholder="field?.customHTMLAttributes.placeholder"
    :id="field?.customHTMLAttributes.id"
    :name="field?.customHTMLAttributes.name"
    min="0"
    @input="$emit('change')"
  />
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
