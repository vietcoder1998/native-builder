<script lang="ts">
import { defineComponent } from 'vue';
import Slides from '../components/slides/Slides.vue';

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
