<script lang="ts">
import { defineComponent } from 'vue'
import MultiFixer from '../components/form/fixer/MultiFixer.vue'
import ImageGallery from '../components/image-gallery/ImageGallery.vue'
import MultiColumnInfo from '../components/image-gallery/right-section/MultiColumnInfo.vue'
import SingleColumnInfoVue from '../components/image-gallery/right-section/SingleColumnInfo.vue'
import Add from '../components/layout/Add.vue'
import Accordion from '../components/ui/Accordion.vue'
import { FieldName } from '../typing/fields'
import { GalleryItem } from '../typing/gallery'

export default defineComponent({
  name: 'gallery',
  components: {
    ImageGallery,
    Accordion,
    Add,
    MultiFixer,
    MultiColumnInfo,
    SingleColumnInfoVue
  },
  data(): {
    newItem: GalleryItem
    fixingItem: GalleryItem
    showModal: boolean
    isAdd: boolean
    lastIndex?: number
    showLightBox: boolean
    selected: number
  } {
    return {
      newItem: { src: '', title: '', thumbnail: '' },
      fixingItem: { src: '', title: '', thumbnail: '', index: 0 },
      showModal: false,
      isAdd: false,
      lastIndex: 0,
      showLightBox: false,
      selected: null
    }
  },
  methods: {
    onChangAddState() {
      this.$data.isAdd = !this.$data.isAdd
    },
    onAddNewItem(event: Event) {
      this.items.push(this.newItem)
    },
    onShowLightBox(item: GalleryItem, index: number) {
      this.showLightBox = !this.showLightBox
      this.fixingItem = { ...item, index }
    },
    onShowModal() {
      this.showModal = false
      this.lastIndex = this.fixingItem?.index
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
    <div class="w-250">
      <p class="text-lg bold border-bottom mb-2">Gallery</p>
      <hr />
      <Accordion title="MultiColumn">
        <div
          v-for="(img, key) in imageFlexing"
          v-bind:key="key"
          class="ml-2 w-full text-left"
        >
          <button
            :class="
              selected == key
                ? 'text-blue-400 bg-blue-200 p-3 w-full text-left'
                : ' p-3  w-full text-left'
            "
            @click="selected = key"
          >
            [] Columns
          </button>
        </div>
      </Accordion>
    </div>
    <div class="content">
      <ImageGallery
        v-bind:cls="cls"
        v-bind:childCls="childCls"
        v-bind:column="column"
        v-bind:imageFlexing="imageFlexing"
        v-bind:gap="gap"
        v-bind:newItem="newItem"
        v-bind:items="items"
        v-bind:showLightBox="showLightBox"
        v-bind:imgCls="imgCls"
        @on-show-light-box="onShowLightBox"
        @on-show-modal="onShowModal"
      />
    </div>
    <div class="w-250 p-2">
      <MultiColumnInfo v-show="!selected" />
      <div v-show="selected">
        <SingleColumnInfoVue :items="imageFlexing[selected]" :title="'Column' + selected" />
      </div>
    </div>
  </div>
</template>
