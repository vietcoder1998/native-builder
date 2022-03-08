<script lang="ts">
import { defineComponent } from 'vue'
import ImageGallery from '../components/image-gallery/ImageGallery.vue'

export default defineComponent({
  name: 'gallery',
  components: {
    ImageGallery
  }
})
</script>
<template>
  <ImageGallery />
</template>
