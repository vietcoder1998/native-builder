<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { SlideElement } from '../../typing/sliders'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import Accordion from '../ui/Accordion.vue'
import RadioInput from '../form/input/RadioInput.vue'

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
  props: {
    slides: Array as PropType<SlideElement[]>,
    pagination: String,
    itemsNumber: Number,
    navigation: String
  }
})
</script>
<template>
  <swiper
    v-bind:slides-per-view="itemsNumber"
    :space-between="50"
    :allow-slide-prev="true"
    :allow-slide-next="true"
    :modules="modules"
    v-bind:pagination="!!(pagination === 'on')"
    v-bind:navigation="!!(navigation === 'on')"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(slide, i) in slides" :key="i">
      <img v-bind:src="slide.src" alt="text" />
      <p>{{ slide.text }}</p>
    </swiper-slide>
  </swiper>
</template>
