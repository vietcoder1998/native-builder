<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ProductCollection } from '../../typing/beae.element'
import Accordion from '../ui/Accordion.vue'

export default defineComponent({
  name: 'beae-element',
  components: {
    Accordion
  },

  props: {
    collections: Object,
    col: Number,
    gap: Number,
  },
  // {
  //   return {
  //     col: 4,
  //     gap: 2,
  //     collections: Object.assign(
  //       {} as PropType<ProductCollection>,
  //       new Array(20).fill(
  //         { 
  //           thumbnail: 'https://picsum.photos/200/300',
  //           productTitle: 'Sp',
  //           price: 1.0,
  //           addToCart: false
  //         },
  //         0,
  //         20
  //       )
  //     )
  //   }
  // },
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
    }
  },
  computed: {
    itemCls(): string {
      return `grid grid-cols-${this.$props.col} gap-${this.$props.gap}`
    }
  }
})
</script>
<template>
  <div class="grid grid-cols-8">
    <div class="col-span-2">
     
    </div>
    <div class="col-span-6 p-2">
      <div v-bind:class="itemCls">
        <div
          class="col-span-1"
          v-for="(collection, id) in collections"
          :key="id"
          :id="'collection' + String(id)"
        >
            <img :src="collection.thumbnail" />
            <p>{{ collection.productTitle }}</p>
            <button class="border">+ Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
