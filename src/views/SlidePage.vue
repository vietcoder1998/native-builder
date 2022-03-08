<script lang="ts">
import { defineComponent } from 'vue'
import Slides from '../components/slides/Slides.vue'
import { SlideElement } from '../typing/sliders'
import Accordion from '../components/ui/Accordion.vue'
import RadioInput from '../components/form/input/RadioInput.vue'

export default defineComponent({
  name: 'slide',
  components: {
    Slides,
    Accordion,
    RadioInput
  },
  data(): {
    slides: SlideElement[]
    pagination: string
    navigation: string
    itemNumbers: number
  } {
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
      pagination: 'off',
      itemNumbers: 3,
      navigation: 'off'
    }
  },
  methods: {
    onChangeNumber(e: any) {
      this.itemNumbers = Number(e?.target?.value)
    }
  },
  computed: {
    convertOnOffToBoolean() {
      return (item: string) => (item === 'on' ? true : false)
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
          v-bind:field="{
            index: 1,
            customHTMLAttributes: {
              options: ['on', 'off'],
              name: 'pagination-slide'
            },
            value: pagination
          }"
          @change="
            (option) => {
              pagination = String(option)
            }
          "
        />
      </Accordion>
      <Accordion title="navigation">
        <RadioInput
          v-bind:field="{
            index: 1,
            value: navigation,
            customHTMLAttributes: {
              options: ['on', 'off'],
              name: 'navigation-slide'
            }
          }"
          @change="
            (option) => {
              navigation = String(option)
            }
          "
        />
      </Accordion>
    </div>
    <div class="col-span-4">
      <Slides
        v-bind:pagination="convertOnOffToBoolean(pagination)"
        v-bind:navigation="convertOnOffToBoolean(navigation)"
        v-bind:itemNumbers="itemNumbers"
        v-bind:slides="slides"
      />
    </div>
  </div>
</template>
