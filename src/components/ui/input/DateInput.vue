<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CustomHTMLAttributes } from '../../../typing/fields'

export default defineComponent({
  name: 'date-input',
  props: {
    customHTMLAttributes: {} as PropType<CustomHTMLAttributes>,
    value: Number
  },
  emits: ['change']
})
</script>
<template>
  <input
    v-bind:key="customHTMLAttributes?.key"
    class="w-full text-left"
    type="date"
    v-bind:value="value"
    v-bind:required="customHTMLAttributes?.required"
    v-bind:placeholder="customHTMLAttributes?.placeholder"
    v-bind:id="customHTMLAttributes?.id"
    v-bind:name="customHTMLAttributes?.name"
    @change="$emit('change')"
  />
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
