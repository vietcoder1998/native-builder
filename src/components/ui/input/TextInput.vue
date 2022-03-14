<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Field } from "../../../typing/index";

export default defineComponent({
  name: "text-input",
  props: {
    field: {} as PropType<Field>,
  },
  emits: ["change"],
});
</script>
<template>
  <input
    class="w-full text-left"
    type="text"
    v-bind:value="field?.value?.toString()"
    v-bind:required="field?.customHTMLAttributes?.required"
    v-bind:placeholder="field?.customHTMLAttributes?.placeholder"
    v-bind:id="field?.customHTMLAttributes?.id"
    v-bind:name="field?.customHTMLAttributes?.name"
  />
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
