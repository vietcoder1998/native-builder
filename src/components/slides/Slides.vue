<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { SlideElement } from '../../typing/sliders'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import Accordion from '../ui/Accordion.vue'
import RadioInput from '../ui/input/RadioInput.vue'
import dynamicElement from '../../mixin/dynamicElement'

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
  mixins: [dynamicElement<any, any, SlideElement>()],
  components: {
    Swiper,
    SwiperSlide,
    Accordion,
    RadioInput
  }
})
</script>
<template>
  <swiper
    v-bind:slides-per-view="options?.itemsNumber"
    :space-between="50"
    :allow-slide-prev="true"
    :allow-slide-next="true"
    :modules="modules"
    v-bind:pagination="!!(options?.pagination === 'on')"
    v-bind:navigation="!!(options?.navigation === 'on')"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item, i) in items" :key="i">
      <img v-bind:src="item.src" alt="text" />
      <p>{{ slide?.text }}</p>
    </swiper-slide>
  </swiper>
</template>
