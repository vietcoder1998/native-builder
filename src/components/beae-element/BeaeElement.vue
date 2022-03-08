<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { BeaeCollection } from '../../typing/beae-element'
import Accordion from '../ui/Accordion.vue'

export default defineComponent({
  name: 'beae-element',
  components: {
    Accordion
  },

  props: {
    collections: [] as PropType<BeaeCollection[]>,
    col: Number,
    gap: Number
  },
  methods: {
    forceRender() {
      console.log('force update beae element')
    }
  },
  watch: {
    collections: {
      handler(nValue, oValue) {
        this.forceRender()
      },
      deep: true
    },
    col: {
      handler(nCol, oCol) {
        this.forceRender()
      },
      deep: true
    },
    gap: {
      handler(nCol, oCol) {
        this.forceRender()
      },
      deep: true
    },
  },
  computed: {
    itemCls(): string {
      return `grid grid-cols-${this.$props.col} gap-${this.$props.gap}`
    }
  }
})
</script>
<template>
  <div v-bind:class="itemCls">
    <div
      class="col-span-1"
      v-for="(collection, id) in collections"
      v-bind:key="id"
       v-bind:id="'collection' + String(id)"
    >
      <img  v-bind:src="collection?.thumbnail" />
      <p>{{ collection?.productTitle }}</p>
      <button class="border">+ Add to Cart</button>
    </div>
  </div>
</template>
