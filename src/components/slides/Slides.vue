<script lang="ts">
import { defineComponent, PropType } from "vue";
import { SlideElement } from "../../typing/sliders";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Accordion from "../ui/Accordion.vue";
import RadioInput from "../ui/input/RadioInput.vue";
import dynamicElement from "../../mixin/dynamicElement";

export default defineComponent({
  setup() {
    const onSwiper = (swiper: any) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
  name: "slides",
  mixins: [dynamicElement<any, any, SlideElement>()],
  components: {
    Swiper,
    SwiperSlide,
    Accordion,
    RadioInput,
  },
});
</script>
<template>
  <swiper
    v-bind:slides-per-view="Number(options?.itemsNumber[0]) || 3"
    :space-between="50"
    :allow-slide-prev="true"
    :allow-slide-next="true"
    :modules="modules"
    v-bind:navigation="!!(options?.navigation[0] === 'on')"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(field, i) in fields" :key="i">
      <img v-bind:src="String(field.options['src'][0])" alt="text" />
      <p>{{ field?.options["src"][0] }}</p>
    </swiper-slide>
  </swiper>
</template>
