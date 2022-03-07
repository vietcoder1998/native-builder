<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ProductCollection } from '../typing/beae.element'
import Accordion from './ui/Accordion.vue'

export default defineComponent({
  name: 'beae-element',
  components: {
    Accordion
  },

  data(): {
    collections: ProductCollection
    col: number
    gap: number
  } {
    return {
      col: 4,
      gap: 2,
      collections: Object.assign(
        {} as PropType<ProductCollection>,
        new Array(20).fill(
          { 
            thumbnail: 'https://picsum.photos/200/300',
            productTitle: 'Sp',
            price: 1.0,
            addToCart: false
          },
          0,
          20
        )
      )
    }
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
    }
  },

  computed: {
    itemCls(): string {
      return `grid grid-cols-${this.$data.col} gap-${this.$data.gap}`
    }
  }
})
</script>
<template>
  <div class="grid grid-cols-8">
    <div class="col-span-2">
      <Accordion title="Columns">
        <input type="number" v-model="col" class="w-full" id="cols-quantity" />
      </Accordion>
      <Accordion title="Gaps">
        <input type="number" v-model="col" class="w-full" id="cols-quantity" />
      </Accordion>
      <Accordion :title="'Collection'">
        <Accordion
          v-for="(collection, id) in collections"
          :title="String(id)"
          v-bind:key="String(id)"
        >
          <div
            class="col-span-1"
            v-for="(value, key) in collection"
            :value="value"
            :key="key"
          >
            <label> {{ key }} </label>
            <input class="w-full" v-model="collections[id][key]" />
          </div>
        </Accordion>
      </Accordion>
    </div>
    <div class="col-span-6 p-2">
      <div v-bind:class="itemCls">
        <div
          class="col-span-1"
          v-for="(collection, id) in collections"
          :key="id"
          :id="'collection' + id"
        >
            <img :src="collection.thumbnail" />
            <p>{{ collection.productTitle }}</p>
            <button class="border">+ Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
