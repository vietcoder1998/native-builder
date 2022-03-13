<script lang="ts">
import { defineComponent } from 'vue'
import MultiFixer from '../components/ui/fixer/MultiFixer.vue'
import ImageGallery from '../components/image-gallery/ImageGallery.vue'
import Add from '../components/layout/Add.vue'
import Accordion from '../components/ui/Accordion.vue'
import { GalleryItem } from '../typing/gallery'

export default defineComponent({
  name: 'gallery',
  components: {
    ImageGallery,
    Accordion,
    Add,
    MultiFixer,
  },
  data(): {
    newItem: GalleryItem
    fixingItem: GalleryItem
    showModal: boolean
    isAdd: boolean
    lastIndex?: number
    showLightBox: boolean
  } {
    return {
      newItem: { src: '', title: '', thumbnail: '' },
      fixingItem: { src: '', title: '', thumbnail: '', index: 0 },
      showModal: false,
      isAdd: false,
      lastIndex: 0,
      showLightBox: false,
    }
  },
  methods: {
    onChangAddState() {
      this.$data.isAdd = !this.$data.isAdd
    },
    onAddNewItem(event: Event) {
      this.items.push(this.newItem)
    },
  },
  computed: {
    cls() {
      //@ts-ignore
      return `fgrid-${this.column} `
    },
    childCls() {
      //@ts-ignore
      return `w-${this.column}m border `
    },
    imgCls() {
      //@ts-ignore
      return `w-full p-${this.gap} `
    },
    column(): number {
      return this.$store.state.gallery.column
    },
    gap(): number {
      return this.$store.state.gallery.gap
    },
    items(): GalleryItem[] {
      return this.$store.state.gallery.items
    },
    imageFlexing() {
      let matrix: any[][] = []
      for (let i = 0; i < this.column; i++) {
        matrix.push([])
      }

      this.items.forEach((item, i) => {
        let t = i % this.column
        matrix[t].push(item)
      })

      return matrix
    }
  },
  onMounted() {},
  whenDepsChange(update: any) {
    console.log(update)
  },
  watch: {},
  emit: ['on-show-light-box', 'on-show-modal', 'on']
})
</script>
<template>
  <div class="flex">
    <div class="content">
      <ImageGallery
        v-bind:imageFlexing="imageFlexing"
        v-bind:newItem="newItem"
        v-bind:items="items"
        v-bind:showLightBox="showLightBox"
        v-bind:imgCls="imgCls"
      />
    </div>
  </div>
</template>
