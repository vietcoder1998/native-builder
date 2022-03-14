<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Field } from "../../../typing/index";

export default defineComponent({
  name: "date-input",
  props: {
    field: {} as PropType<Field>,
  },
  emits: ["change"],
});
</script>
<template>
  <input
    v-bind:key="field?.customHTMLAttributes.key"
    class="w-full text-left"
    type="date"
    v-bind:value="field?.value"
    v-bind:required="field?.customHTMLAttributes.required"
    v-bind:placeholder="field?.customHTMLAttributes.placeholder"
    v-bind:id="field?.customHTMLAttributes.id"
    v-bind:name="field?.customHTMLAttributes.name"
    @change="$emit('change')"
  />
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
