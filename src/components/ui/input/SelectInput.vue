<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CustomHTMLAttributes } from '../../../typing/fields'
import { Field } from '../../../typing/index'

export default defineComponent({
  name: 'select-input',
  props: {
    customHTMLAttributes: Object as PropType<CustomHTMLAttributes>,
    value: String
  },
  emits: ['change']
})
</script>

<template>
  <select
    v-bind:value="value"
    v-bind:name="customHTMLAttributes?.name"
    class="w-full p-1 border rounded"
    v-bind:required="customHTMLAttributes?.required"
    @change="$emit('change')"
  >
    <option value="" disabled selected>
      {{ customHTMLAttributes?.placeholder }}
    </option>
    <option
      v-for="(option, oid) in customHTMLAttributes?.options"
      :key="oid"
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>
