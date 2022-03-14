<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import ulti from "../../mixin/ulti";
import Accordion from "../ui/Accordion.vue";
import DynamicInput from "../ui/input/DynamicInput.vue";
import TextArea from "../ui/input/TextArea.vue";

export default defineComponent({
  name: "selector-info",
  components: { Accordion, DynamicInput, TextArea },
  computed: {
    ...mapGetters(["selector"]),
  },
  mixins: [ulti],
  methods: {
    ...mapMutations(["onUpdateSelector"]),
    onSaveOption() {
      // transform Form into Array<{[key: string]: value }>
      console.log(this.selector);
      const nOptions: object[] = Array.from(
        //@ts-ignore
        this.$refs?.selectorRef?.getElementsByTagName("input") as HTMLInputElement[],
        (item: HTMLInputElement) => ({
          [item?.name]: [
            item?.value,
            this.selector?.value?.options?.[item.name][1],
            this.selector?.value?.options?.[item.name][2] || [],
          ],
        })
      );

      this.onUpdateSelector(nOptions);
      alert("Alert success");
    },
  },
});
</script>
<template>
  <div>
    <div v-show="selector.position[1] !== -1">
      <form ref="selectorRef" @submit.prevent="onSaveOption">
        <div v-for="(options, k) in selector.value?.options" v-bind:key="k">
          <DynamicInput
            class="w-full"
            v-bind:id="'element-selector' + k.toString()"
            v-bind:field="selector"
          />
        </div>
        <div v-if="selector.value?.customHTMLAttributes">
          <textarea v-bind:value="selector?.value?.customHTMLAttributes.toString()">
          </textarea>
        </div>
        <div class="text-right">
          <button class="bg-red-200 rounded p-2 mr-2">Cancel</button>
          <button class="bg-blue-400 rounded p-2" type="submit">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>
