<script lang="ts">
import { defineComponent, PropType } from 'vue'
import {SlideElement} from '../typing/sliders'
import Slides from '../components/Slides.vue'

export default defineComponent({
    name: 'slide',
    components: {
        Slides
    },
})
</script>
<template>
    <Slides />
</template>
