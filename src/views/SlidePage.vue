<script lang="ts">
import { defineComponent } from 'vue'
import Slides from '../components/slides/Slides.vue'
import { SlideElement } from '../typing/sliders'
import Accordion from '../components/ui/Accordion.vue'
import RadioInput from '../components/ui/input/RadioInput.vue'

export default defineComponent({
  name: 'slide',
  components: {
    Slides,
    Accordion,
    RadioInput
  },

  methods: {
    setItemsNumber(e: Event) {
      const vl = (<HTMLTextAreaElement>e.target).value
      this.$store.commit('changeItemsNumber', vl)
    },
    changeNavigation(e: string) {
      this.$store.commit('changeNavigation', e)
    },
    changePagination(e: string) {
      this.$store.commit('changePagination', e)
    },
    changeSlideItem(id: number, vl: string) {
      this.$store.commit('changePagination', { id, vl })
    },
    changeTextField(key: string, id: number, e: Event) {
      const vl = (<HTMLTextAreaElement>e.target).value

      console.log(key, id, e)
      switch (key) {
        case 'src':
          this.$store.commit('changeSlideSrc', { id, vl })
          break
        case 'text':
          this.$store.commit('changeSlideText', { id, vl })
          break
        default:
          break
      }
    }
  },
  emits: ['change']
})
</script>
<template>
  <div class="grid grid-cols-8">
    <div class="col-span-2">
      <Accordion title="Slider">
        <div v-for="(item, i) in slides" :key="i">
          <Accordion :title="'item' + i">
            <Accordion v-for="(vl, k) in item" :title="k" :key="k">
              <input
                type="text"
                v-bind:value="vl"
                v-bind:placeholder="k"
                @change="(e) => changeTextField(k, i, e)"
              />
            </Accordion>
          </Accordion>
        </div>
      </Accordion>
      <Accordion title="itemNumbers">
        <input
          v-bind:value="itemsNumber"
          type="number"
          min="1"
          @input="setItemsNumber"
        />
      </Accordion>
      <Accordion title="pagination">
        <RadioInput
          v-bind:field="{
            index: 1,
            customHTMLAttributes: {
              options: ['on', 'off'],
              name: 'pagination-slide'
            },
            value: pagination
          }"
          @change="changePagination"
        />
      </Accordion>
      <Accordion title="navigation">
        <RadioInput
          @change="changeNavigation"
          v-bind:field="{
            index: 1,
            value: navigation,
            customHTMLAttributes: {
              options: ['on', 'off'],
              name: 'navigation-slide'
            }
          }"
        />
      </Accordion>
    </div>
    <div class="col-span-4 p-2">
      <Slides />
    </div>
  </div>
</template>
