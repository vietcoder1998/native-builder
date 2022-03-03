<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Field } from '../../typing/fields'

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
    :name="field?.name"
    class="w-full p-3 border"
    @change="$emit('change')"
    :required="field?.required"
  >
    <option value="" disabled selected>
      {{ field?.placeholder }}
    </option>
    <option v-for="(option, oid) in field?.options" :key="oid" :value="option">
      {{ option }}
    </option>
  </select>
</template>
