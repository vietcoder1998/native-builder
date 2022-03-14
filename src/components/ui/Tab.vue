<script lang="ts">
import { defineComponent, inject, onBeforeMount, ref, watch } from "vue";
import { TabState } from "../../interfaces/tabs";

export default defineComponent({
  name: "Tab",
  setup() {
    const index = ref(0);
    const isActive = ref(false);
    const tabs = inject<TabState>("TabsProvider");

    watch(
      () => tabs?.selectedIndex,
      () => {
        isActive.value = index.value === tabs?.selectedIndex;
      }
    );

    onBeforeMount(() => {
      index.value = tabs?.count;
      tabs.count++;
      isActive.value = index.value === tabs?.selectedIndex;
    });

    // passing index, isActive to data
    return { index, isActive };
  },
  props: {
    title: String,
  },
});
</script>
<template>
  <div class="tab" v-show="isActive">
    <slot></slot>
  </div>
</template>
