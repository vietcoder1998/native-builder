<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
  AngleDown,
  AngleUp,
  Image,
  AngleLeft,
  AngleRight,
ObjectUnGroup,
} from "../../assets/icons/index";
export type Icon = "angle-up" | "angle-down" | "img" | "angle-left" | "angle-right" | "sort";

export default defineComponent({
  name: "app-icon",
  props: {
    icon: String as PropType<Icon>,
    cls: String,
  },
  computed: {
    src() {
      switch (this.icon) {
        case "angle-up":
          return AngleUp;
        case "angle-down":
          return AngleDown;
        case "angle-right":
          return AngleRight;
        case "angle-left":
          return AngleLeft;
        case "sort":
          return ObjectUnGroup;
        case "img":
          return Image;
        default:
          return AngleUp;
      }
    },
  },
});
</script>
<template>
  <img v-bind:src="src" :class="cls || 'app-icon'" />
</template>
<style>
.app-icon {
  width: 20px;
  height: 20px;
}
</style>
