<script lang="ts">
import { defineComponent } from 'vue'
import Add from '../components/layout/Add.vue'
import Accordion from '../components/ui/Accordion.vue'
import { FieldName } from '../typing/fields'
import BeaeElement from '../components/beae-element/BeaeElement.vue'
import { BeaeCollection } from '../typing/beae-element'

export default defineComponent({
  name: 'beae-collection',
  components: {
    BeaeElement,
    Accordion,
    Add
  },
  created() {},
  data() {
    return {
      col: 4,
      gap: 1,
      collections: new Array<BeaeCollection>(20).fill(
        {
          thumbnail: 'https://picsum.photos/200/300',
          productTitle: 'Sp',
          price: 1.0,
          addToCart: false
        },
        0,
        20
      )
    }
  },
  mouted() {
    console.log('mounting')
  },
  methods: {
    onSubmitInfo(value: BeaeCollection) {
      this.collections.push(value)
    }
  },
  computed: {
    textField(): FieldName {
      return FieldName.text
    },
    radioField(): FieldName {
      return FieldName.radio
    }
  }
})
</script>
<template>
  <div class="grid grid-cols-8">
    <div class="col-span-2">
      <Accordion title="Columns">
        <input
          type="number"
          v-model="col"
          class="w-full"
          id="cols-quantity"
          min="0"
        />
      </Accordion>
      <Accordion title="Gaps">
        <input
          type="number"
          v-model="gap"
          class="w-full"
          id="cols-quantity"
          min="0"
        />
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
            v-bind:key="key"
          >
            <label> {{ key }} </label>
            <input class="w-full" v-model="collection[key]" />
          </div>
        </Accordion>
        <Add
          v-bind:field="{
            thumbnail: { name: 'thumbnail', type: textField, value: null },
            productTitle: {
              name: 'productTitle',
              type: textField,
              value: null
            },
            price: { name: 'price', type: textField, value: null },
            addToCart: { name: 'addToCart', type: radioField, value: null }
          }"
          @on-submit-info="onSubmitInfo"
        ></Add>
      </Accordion>
    </div>
    <div class="col-span-4">
      <BeaeElement
        v-bind:collections="collections"
        v-bind:col="col"
        v-bind:gap="gap"
      ></BeaeElement>
    </div>
  </div>
</template>

<style scoped></style>
