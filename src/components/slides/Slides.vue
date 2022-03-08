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
      slides: Array as PropType< SlideElement[]>,
      pagination: Boolean,
      itemNumbers: Number,
      navigation: Boolean
  },

})
</script>
<template>
  <swiper
    v-bind:slides-per-view="itemNumbers"
    :space-between="50"
    :allow-slide-prev="true"
    :allow-slide-next="true"
    :modules="modules"
    :pagination="pagination"
    :navigation="navigation"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(slide, i) in slides" :key="i">
      <img v-bind:src="slide.src" alt="text" />
      <p>{{ slide.text }}</p>
    </swiper-slide>
  </swiper>
</template>
