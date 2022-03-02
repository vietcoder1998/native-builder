<script lang="ts">
import { defineComponent } from 'vue'
import ImageGallery from '../components/ImageGallery.vue'

export default defineComponent({
    name: 'imageGallery',
    components: {
        ImageGallery
    }
})
</script>
<template>
    <div>Gallery</div>
    <image-galary></image-galary>
</template>
