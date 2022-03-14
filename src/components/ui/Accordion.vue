<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import IconVue from "./Icon.vue";
import { AngleDown } from "../../assets/icons";

export default defineComponent({
  name: "accordion",
  setup() {},
  components: { IconVue },
  props: {
    title: String,
    key: String,
    name: String,
    id: String,
    cls: String,
    isShow: Boolean,
    position: Array as PropType<number[]>,
  },
  data(): { open: boolean; icon: string } {
    return {
      open: this.isShow,
      icon: AngleDown,
    };
  },
  methods: {},
  watch: {
    isShow(n, o) {
      this.open = n;
    },
  },
});
</script>
<template>
  <div class="relative mb-2">
    <div v-bind:class="open && 'bg-blue-200' + ' rounded'">
      <button
        v-bind:class="'px-2 py-1 relative w-full text-left rounded border flex'"
        @click="(open = !open), $emit('open')"
      >
        <IconVue v-bind:icon="!open ? 'angle-down' : 'angle-up'" class="w-6 h-6" />
        {{ title }}
      </button>
    </div>
    <div v-show="open" v-bind:class="cls || ''">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
