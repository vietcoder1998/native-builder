<script lang="ts">
import { defineComponent, PropType } from "vue";
import { mapGetters, mapMutations } from "vuex";
import { Field, Position } from "../../typing/index";

export default defineComponent({
  name: "list",
  props: {
    items: Array as PropType<any>,
    itemClass: String,
  },
  data() {
    return {
      selected: "",
      position: [],
    };
  },
  methods: {
    ...mapMutations(["onSelectUI"]),
    onClick(i: number) {
      this.selected = i.toString();
      this.position = this.items[i].position;
      this.onSelectUI({
        position: this.items[i].position,
        type: "field",
      });
    },
  },
  computed: {
    ...mapGetters(["selector"]),
    comparePosition() {},
  },
});
</script>
<template>
  <div>
    <button
      v-for="(item, i) in items"
      v-bind:key="i"
      @click="onClick(i)"
      v-bind:class="
        itemClass + item.position === selector.position ? ' ' : ' bg-blue-300'
      "
    >
      {{ item.type }}
    </button>
  </div>
</template>
<style scoped></style>
