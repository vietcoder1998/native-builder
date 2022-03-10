<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { GalleryItem } from '../../../typing/gallery'
import Accordion from '../../ui/Accordion.vue'

export default defineComponent({
  name: 'single-column-info',
  props: {
    items: Array as PropType<GalleryItem[]>,
    title: String
  },
  components: {
    Accordion
  }
})
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <Accordion
      v-for="(item, i) in items"
      :title="'img' + i"
      v-bind:key="String(i)"
    >
      <Accordion
        v-for="(vl, k) in item"
        v-bind:title="k"
        v-bind:key="String(i)"
      >
        <input class="ml-2" v-bind:value="vl" />
      </Accordion>
    </Accordion>
  </div>
</template>
<style></style>
