<script lang="ts">
import { defineComponent, PropType } from "vue";
import IconVue from "./Icon.vue";
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
  data(): { open: boolean } {
    return {
      open: this.isShow,
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
    <div :class="open && 'bg-blue-200' + ' rounded'">
      <app-icon icon="angle-up" />
      <button
        :class="'px-2 py-1 relative w-full text-left rounded border'"
        @click="(open = !open), $emit('open')"
      >
        {{ title }}
      </button>
    </div>
    <div v-show="open" v-bind:class="cls || ''">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
