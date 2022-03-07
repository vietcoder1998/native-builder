<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Field } from '../../../typing/fields'

export default defineComponent({
  name: 'select-input',
  props: {
    field: Object as PropType<Field>
  },
  emits: ['change']
})
</script>

<template>
  <select
    :value="field?.value"
    :name="field?.customHTMLAttributes.name"
    class="w-full p-3 border"
    :required="field?.customHTMLAttributes.required"
    @change="$emit('change')"
  >
    <option value="" disabled selected>
      {{ field?.customHTMLAttributes.placeholder }}
    </option>
    <option v-for="(option, oid) in field?.customHTMLAttributes.options" :key="oid" :value="option">
      {{ option }}
    </option>
  </select>
</template>
