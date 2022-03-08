<script lang="ts">
import { defineComponent } from 'vue'
import Slides from '../components/slides/Slides.vue'
import { SlideElement } from '../typing/sliders'
import Accordion from '../components/ui/Accordion.vue'

export default defineComponent({
  name: 'slide',
  components: {
    Slides,
    Accordion
  },
  data(): { slides: SlideElement[]; pagination: number; itemNumbers: number } {
    return {
      slides: [
        {
          src: 'https://picsum.photos/200',
          text: 'To get a square image, just add the size'
        },
        {
          src: 'https://picsum.photos/200',
          text: 'To get a square image, just add the size'
        },
        {
          src: 'https://picsum.photos/200',
          text: 'To get a square image, just add the size'
        },
        {
          src: 'https://picsum.photos/200',
          text: 'To get a square image, just add the size'
        },
        {
          src: 'https://picsum.photos/200',
          text: 'To get a square image, just add the size'
        }
      ],
      pagination: 0,
      itemNumbers: 3
    }
  },
  methods: {
    onChangeNumber(e: any) {
      this.$data.itemNumbers = Number(e?.target?.value)
    }
  }
})
</script>
<template>
  <div class="grid grid-cols-8">
    <div class="col-span-2">
      <Accordion title="Slider">
        <div v-for="(item, i) in slides" :key="i">
          <Accordion :title="'item' + i">
            <input type="text" v-model="item.src" :key="i" placeholder="src" />
            <input
              type="text"
              v-model="item.text"
              :key="i"
              placeholder="text"
            />
          </Accordion>
        </div>
      </Accordion>
      <Accordion title="itemNumbers">
        <input v-model="itemNumbers" type="number" />
      </Accordion>
      <Accordion title="pagination">
        <RadioInput
          :field="{
            index: 1,
            customHTMLAttributes: {
              options: ['a', 'b']
            },
            value: 'a'
          }"
        />
      </Accordion>
    </div>
    <div class="col-span-4">
      <Slides
        :pagination="pagination"
        :itemNumbers="itemNumbers"
        :slides="slides"
      />
    </div>
  </div>
</template>
