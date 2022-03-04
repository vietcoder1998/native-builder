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
    cpn: VueElement
  },
  data() {}
})
</script>
<template>
  <div>
    <button>
      {{ title }}
    </button>
    <keep-alive>
      <component :is="cpn"></component>
    </keep-alive>
  </div>
</template>

<style scoped></style>
