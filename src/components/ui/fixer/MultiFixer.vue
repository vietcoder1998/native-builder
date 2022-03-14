<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Field } from "../../../typing/fields";
import Accordion from "../../ui/Accordion.vue";
import InputFixer from "./InputFixer.vue";

export default defineComponent({
  name: "multi-fixer",
  components: {
    Accordion,
    InputFixer,
  },
  props: {
    initParams: [] as PropType<Field[]>,
    initName: String,
  },
  data(): { params: Field[] | undefined; element?: String } {
    return {
      params: this.initParams as Field[],
      element: this.initName as String,
    };
  },
  mounted() {
    console.log("receiver");
  },
});
</script>

<template>
  <div>
    <Accordion
      v-for="(param, i) in params"
      v-bind:title="param.title"
      class="test"
      v-bind:key="String(i)"
      :isShow="false"
      v-bind:id="String(i)"
    >
      <InputFixer v-bind:initInfo="param" />
    </Accordion>
  </div>
</template>
