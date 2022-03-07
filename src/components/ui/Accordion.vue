<script lang="ts">
import { defineComponent, VueElement } from 'vue'

export default defineComponent({
  name: 'accordion',
  setup() {},
  props: {
    title: String,
    key: String,
    name: String,
    id: String,
    class: String,
    isShow: Boolean,
  },
  data() {
    return {
      open: this.isShow
    }
  },
  methods: {}
})
</script>
<template>
  <div>
    <button
      class="px-2 py-1 my-1 "
      @click="open = !open"
    >
      {{ title }}
    </button>
    <hr />
    <div v-show="open" class="ml-2 pt-2">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
