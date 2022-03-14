<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Field } from "../../../typing/index";

export default defineComponent({
  name: "select-input",
  props: {
    field: Object as PropType<Field>,
  },
  emits: ["change"],
});
</script>

<template>
  <select
    v-bind:value="field?.value"
    v-bind:name="field?.customHTMLAttributes?.name"
    class="w-full p-1 border rounded"
    v-bind:required="field?.customHTMLAttributes?.required"
    @change="$emit('change')"
  >
    <option value="" disabled selected>
      {{ field?.customHTMLAttributes?.placeholder }}
    </option>
    <option
      v-for="(option, oid) in field?.customHTMLAttributes?.options"
      :key="oid"
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>
