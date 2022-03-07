<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ProductCollection } from '../typing/beae.element'
import Accordion from './ui/Accordion.vue'

export default defineComponent({
  setup() {},
  component: {
    Accordion
  },
  data(): { collections: ProductCollection } {
    return {
      collections: Object.assign(
        {} as PropType<ProductCollection>,
        Array.prototype.fill(
          {
            thumbnail: 'https://picsum.photos/200/300',
            productTitle: 'Sp1',
            price: 1.0,
            addToCart: false
          },
          0,
          20
        )
      )
    }
  }
})
</script>
<template>
  <div class="grid grid-cl-8">
    <div class="col-span-2">
      <Accordion title="Beae Product">
        <Accordion
          v-for="(collection, id) in collections"
          :title="id"
          v-bind:key="id"
        >
          <input v-for="(value, key) in collection" :value="value" :key="key" />
        </Accordion>
      </Accordion>
    </div>
  </div>
</template>
