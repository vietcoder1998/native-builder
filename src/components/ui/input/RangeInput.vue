<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CustomHTMLAttributes } from "../../../typing/fields";
import { Field } from "../../../typing/index";

export default defineComponent({
  name: 'range-input',
  props: {
    customHTMLAttributes: {} as PropType<CustomHTMLAttributes>,
    value: Number
  },
  emits: ['change']
})
</script>
<template>
  <input
    class="w-full text-left"
    type="range"
    v-bind:value="value"
    v-bind:required="customHTMLAttributes?.required"
    v-bind:placeholder="customHTMLAttributes?.placeholder"
    v-bind:id="customHTMLAttributes?.id"
    v-bind:name="customHTMLAttributes?.name"
    min="0"
    @input="$emit('change')"
  />
</template>


<style>
.err-container {
  margin-bottom: 20px;
}
</style>
