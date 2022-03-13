<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { AngleDown, AngleUp } from '../../assets/icons/index'
export type Icon = 'angle-up' | 'angle-down'
export default defineComponent({
  name: 'app-icon',
  setup() {},
  props: {
    icon: String as PropType<Icon>,
    cls: String
  },
  data() {
    return {
      src: ''
    }
  },
  watch: {
    icon(nvl: Icon) {
      switch (nvl) {
        case 'angle-up':
          this.src = AngleUp
          break
        case 'angle-down':
          this.src = AngleDown
          break
        default:
          break
      }
    }
  }
})
</script>
<template>
  <img v-bind:src="src" v-bind="icon" :class="cls || 'app-icon'" />
</template>
<style scoped>
.app-icon {
  width: 20px;
  height: 20px
}
</style>

