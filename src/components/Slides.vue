<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { SlideElement } from '../typing/sliders'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

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
    SwiperSlide
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
  <div>
    <input type="number" v-model="itemNumbers" />
    <swiper
      :slides-per-view="itemNumbers"
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
</template>
