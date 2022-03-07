<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Field } from '../../../typing/fields'

export default defineComponent({
  name: 'select-input',
  props: {
    field: Object as PropType<Field>
  }
})
</script>

<template>
  <select
    :value="field?.value"
    :name="field?.customHTMLAttributes.name"
    class="w-full p-3 border"
    @change="$emit('change')"
    :required="field?.customHTMLAttributes.required"
  >
    <option value="" disabled selected>
      {{ field?.customHTMLAttributes.placeholder }}
    </option>
    <option v-for="(option, oid) in field?.customHTMLAttributes.options" :key="oid" :value="option">
      {{ option }}
    </option>
  </select>
</template>
