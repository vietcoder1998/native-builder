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
    v-bind:required="field?.customHTMLAttributes.required"
    v-bind:placeholder="field?.customHTMLAttributes.placeholder"
    v-bind:id="field?.customHTMLAttributes.id"
    v-bind:name="field?.customHTMLAttributes.name"
    min="0"
    @input="$emit('change')"
  />
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
