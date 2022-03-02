<script lang="ts">
import { defineComponent } from 'vue'
import ImageGallery from '../components/ImageGallery.vue'

export default defineComponent({
    name: 'image-gallery',
    components: {
        ImageGallery
    }
})
</script>
<template>
    <ImageGallery />
</template>
