<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'accordion',
  setup() {},
  components: {

  },
  props: {
    title: String,
    key: String,
    name: String,
    id: String,
    class: String,
    isShow: Boolean
  },
  data(): {open:boolean} {
    return {
      open: this.isShow 
    }
  },
  methods: {}
})
</script>
<template>
  <div class="relative">
    <div :class="open ? 'bg-blue-200' : ''">
      <font-awesome-icon icon="bicycle"></font-awesome-icon>
      <button
        class="px-2 py-1 my-1 relative w-full text-left"
        @click="open = !open, $emit('open')"
      >
        {{ title }}
      </button>
    </div>
    <hr />
    <div v-show="open" class="ml-2 pt-2">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
