<script lang="ts">
import { defineComponent } from 'vue'
import { ChevronUpIcon, ChevronDownIcon } from '@vue-hero-icons/outline'
export default defineComponent({
  name: 'accordion',
  setup() {},
  components: {
    ChevronUpIcon,
    ChevronDownIcon
  },
  props: {
    title: String,
    key: String,
    name: String,
    id: String,
    class: String,
    isShow: Boolean
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
  <div class="relative">
    <button class="px-2 py-1 my-1 relative w-full text-left" @click="open = !open">
      {{ title }}
    </button>
    <span v-if="open"></span>
    <span v-else class="absolute right-3 top-2">^</span>
    <hr />
    <div v-show="open" class="ml-2 pt-2">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
