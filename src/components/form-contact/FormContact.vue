<script lang="ts">
import { defineComponent, PropType } from "vue";
import dynamicElement from "../../mixin/dynamicElement";
import { FieldName } from "../../typing/fields";
import { Field } from "../../typing/index";
import Accordion from "../ui/Accordion.vue";
import DymamicInput from "../ui/input/DynamicInput.vue";

export default defineComponent({
  name: "form-contact-view",
  components: { DymamicInput, Accordion },
  props: {
    postion: Array as PropType<number[]>,
    sid: Number,
    cid: Number,
    eid: Number,
  },
  refs: {},
  mixins: [dynamicElement<any, any, Field>()],
  computed: {
    formatInput() {
      return (i: number): string =>
        this.fields ? JSON.stringify(this.fields[i].customHTMLAttributes) : "";
    },
    checkFieldType() {
      return (type: FieldName): string => (type ? type : "text");
    },
    fieldTypes(): string[] {
      return Object.values(FieldName);
    },
    className() {
      return "";
    },
  },
  methods: {
    // set value of CustomHTMLAttributes onchange textarea value
    onChangeAttributes(e: Event): void {},
  },
});
</script>
<template>
  <div class="bg-white">
    <form
      id="form-1"
      ref="form1"
      class="grid grid-columns-2 gap-4 mx-3 my-5"
      @submit.prevent=""
    >
      <div v-for="(field, id) in fields" :key="id" class="md:col-span-1 sm:col-span-2">
        <DymamicInput v-bind:field="field" @on-input-field="" />
      </div>
      <button type="submit" class="border p-2 rounded bg-blue-500 text-blue-50">
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped></style>
