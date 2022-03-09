<script lang="ts">
import { defineComponent, PropType } from 'vue'
import BeaeElement from '../components/beae-element/BeaeElement.vue'
import { ProductCollection } from '../typing/beae.element'
import Accordion from '../components/ui/Accordion.vue'

export default defineComponent({
  name: 'beae-collection',
  components: {
    BeaeElement,
    Accordion
  },
  data() {
    return {
      col: 4,
      gap: 1,
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
  mouted() {
    console.log('mounting')
  },
  computed: {
    jsonView(): string {
      return JSON.stringify(this.collections)
    }
  },
  methods: {
    setCollections(e: Event) {
      this.collections = JSON.parse((e.target as HTMLTextAreaElement).value)
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
    <div class="col-span-4">
      <BeaeElement
        v-bind:collections="collections"
        v-bind:col="col"
        v-bind:gap="gap"
      ></BeaeElement>
    </div>
    <div class="col-span-2">
      <textarea
        v-bind:value="jsonView"
        rows="20"
        class="w-full"
        @input="setCollections"
      ></textarea>
    </div>
  </div>
</template>

<style scoped></style>
