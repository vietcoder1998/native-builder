
<script lang="ts">
import { defineComponent } from 'vue';
import Admin from '../components/Admin.vue';
import BeaeElement from '../components/beae-element/BeaeElement.vue';
import ImageGallery from '../components/image-gallery/ImageGallery.vue';
import Slides from '../components/slides/Slides.vue';
import FormContact from '../components/form-contact/FormContact.vue'

export default defineComponent({
  name: 'admin',
  components: {
    Admin,
    ImageGallery,
    FormContact,
    Slides,
    BeaeElement
  }
})
</script>
<template>
  <div class="grid grid-cols-8">
    <div class="col-span-2"></div>
    <div class="col-span-4">
      <ImageGallery></ImageGallery>
      <FormContact></FormContact>
      <Slides></Slides>
      <BeaeElement></BeaeElement>
    </div>
    <div class="col-span-2">
      <Admin></Admin>
    </div>
  </div>
</template>

<style scoped></style>
