<script lang="ts">
import { defineComponent, PropType } from "vue";
import { mapGetters, mapMutations } from "vuex";
import { Field, Position } from "../../typing/index";

export default defineComponent({
  name: "item",
  props: {
    item: {} as PropType<Field>,
    itemClass: String,
    position: Array as PropType<number[]>,
  },
  data() {
    return {
      selected: "",
      position: [],
    };
  },
  methods: {
    ...mapMutations(["onSelectUI"]),
  },
  computed: {
    ...mapGetters(["selector"]),
  },
  emits: ["on-select"],
});
</script>
<template>
  <button @click="onSelectUI(position, 'field')" v-bind:class="itemClass">
    {{ item?.type }}
  </button>
</template>
<style scoped></style>
