<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { ElementType } from '../../typing/home'
import FormContactVue from '../form-contact/FormContact.vue'
import ImageGalleryVue from '../image-gallery/ImageGallery.vue'
import SlidesVue from '../slides/Slides.vue'

export default defineComponent({
  name: 'dynamic-element',
  components: {
    ImageGalleryVue,
  },
  props: {
    type: String as PropType<ElementType>,
    position: Array as PropType<number[]>
  },
  created() {
    console.log(this.$props)
  },
  data(): { current: any } {
    return {
      current: {}
    }
  },

  beforeMount() {
    console.log(this.$props)
    switch (this.type) {
      case ElementType.gallery:
        this.current = ImageGalleryVue
        break

      case ElementType.form:
        this.current = ImageGalleryVue
        break

      default:
        this.current = ImageGalleryVue
        break
    }
  },
  // watch: listen props, change on change props
  methods: {},
  computed: {
    sid() {
      return this.position[0]
    },
    cid() {
      return this.position[1]
    },
    eid() {
      return this.position[2]
    }
  }
})
</script>

<template>
  <KeepAlive include="position, type">
    <component
      v-if="position"
      v-bind:sid="sid"
      v-bind:cid="cid"
      v-bind:eid="eid"
      v-bind:is="current"
    />
  </KeepAlive>
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
