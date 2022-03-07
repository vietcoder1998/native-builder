<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { SlideElement } from '../typing/sliders'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import Accordion from './ui/Accordion.vue'
import RadioInput from './form/input/RadioInput.vue'

export default defineComponent({
  setup() {
    const onSwiper = (swiper: any) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y]
    }
  },
  name: 'slides',
  components: {
    Swiper,
    SwiperSlide,
    Accordion,
    RadioInput
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
    <div class="col-span-2 p-2">
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
            customHTMLAttributes: {
              options: ['a', 'b'],
              name: 'pagination',
              required: true,
              id: 'pagination'
            },
            value: 'a'
          }"
        />
      </Accordion>
    </div>
    <div class="col-span-4">
      <swiper
        v-bind:slides-per-view="itemNumbers"
        :space-between="50"
        :pagination="{ clickable: true }"
        :allow-slide-prev="true"
        :allow-slide-next="true"
        :navigation="true"
        :modules="modules"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(slide, i) in slides" :key="i">
          <img v-bind:src="slide.src" alt="text" />
          <p>{{ slide.text }}</p>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
