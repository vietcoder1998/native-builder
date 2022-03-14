<script lang="ts">
import { defineComponent, VNode } from "vue";
import { TabProps } from "../../interfaces/tabs";
export default defineComponent({
  name: "Tabs",
  data(): { tabs: any; count: number; selectedIndex: number } {
    return {
      tabs: [] as VNode<TabProps>[],
      count: 0,
      selectedIndex: 0,
    };
  },
  beforeMount() {
    this.$data.tabs = this.$slots
      .default()
      .filter((children: any) => children.type.name === "Tab");
  },
  method: {
    selectTab(i: number) {
      this.selectedIndex = i;
    },
  },
  provide() {
    return {
      TabsProvider: this.$data,
    };
  },
  methods: {
    selectTab(i: number) {
      console.log(i);
      this.selectedIndex = i;
      console.log("update new value,", i);
    },
  },
  watch: {
    state(n, o) {
      console.log(n);
    },
  },
});
</script>

<template>
  <div class="tabs">
    <div class="tabs-header">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectTab(index)"
        :class="{ 'tab-selected': index === selectedIndex }"
        class="tab"
      >
        {{ tab.props.title }}
      </button>
    </div>
    <hr />
    <slot></slot>
  </div>
</template>

<style>
.tabs {
  padding: 5px 0px;
}

.tabs-header {
  padding: 5px 10px;
}

.tab-selected {
  background-color: azure;
  border-bottom: 2px solid gray;
}

button[class~="tab"] {
  padding: 5px 10px;
  margin: 2px;
}
</style>
