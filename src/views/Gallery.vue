<script lang="ts">
import { defineComponent } from 'vue'
import ImageGallery from '../components/image-gallery/ImageGallery.vue'
import { GalleryItem } from '../typing/gallery'
import Accordion from '../components/ui/Accordion.vue'

export default defineComponent({
  name: 'gallery',
  components: {
    ImageGallery,
    Accordion
  },
  data(): {
    items: GalleryItem[]
    columns: number
    gap: number
    cls: string
    newItem: GalleryItem
    fixingItem: GalleryItem
    showModal: boolean
    isAdd: boolean
    lastIndex?: number
    showLightBox: boolean
  } {
    return {
      items: [
        {
          src: 'https://picsum.photos/200/300',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/300',
          alt: 'Just add your desired'
        },
        {
          src: 'https://picsum.photos/200/300',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/300',
          alt: 'Just add your desired'
        },
        {
          src: 'https://picsum.photos/200/300',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/300'
        },
        {
          src: 'https://picsum.photos/200/300',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/300'
        },
        {
          src: 'https://picsum.photos/200/300',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/300'
        },
        {
          src: 'https://picsum.photos/200/300',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/300'
        },
        {
          src: 'https://picsum.photos/200/300',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/300'
        }
      ],
      columns: 4,
      gap: 1,
      cls: 'grid grid-cols-4 gap-1',
      newItem: { src: '', title: '', thumbnail: '' },
      fixingItem: { src: '', title: '', thumbnail: '', index: 0 },
      showModal: false,
      isAdd: false,
      lastIndex: 0,
      showLightBox: false
    }
  },
  methods: {
    onChangeParams(columns: number, gap: number) {
      this.$data.cls = `grid grid-cols-${columns} gap-${gap}`
    },
    onChangAddState() {
      this.$data.isAdd = !this.$data.isAdd
    },
    onAddNewItem(event: Event) {
      this.$data.items.push(this.$data.newItem)
    },
    onShowLightBox(item: GalleryItem, index: number) {
      this.$data.showLightBox = true
      this.$data.fixingItem = { ...item, index }
    },
    onShowModal() {
      this.$data.showModal = !this.$data.showModal
      this.$data.lastIndex = this.$data.fixingItem?.index
    }
  },
  computed: {
    getInfo(): { name: string; items: GalleryItem[]; columns: number } {
      return {
        name: 'gallery',
        items: this.$data.items,
        columns: this.$data.columns
      }
    }
  },
  onMounted() {},
  whenDepsChange(update: any) {
    console.log(update)
  },
  emit: ['on-show-light-box', 'on-show-modal']
})
</script>
<template>
  <div class="grid grid-cols-8">
    <div class="col-span-2 p-2">
      <Accordion title="Gallery">
        <Accordion title="Columns">
          <input id="gap" type="number" v-model="columns" class="w-full" />
        </Accordion>
        <Accordion title="Gap">
          <input id="columns" type="number" v-model="gap" class="w-full" />
        </Accordion>
        <Accordion title="Items">
          <Accordion v-for="(item, i) in items" :title="'img' + i">
            <input class="ml-2" v-model="item.src" />
            <input class="ml-2" v-model="item.thumbnail" />
            <input class="ml-2" v-model="item.title" />
          </Accordion>
        </Accordion>
        <button class="btn border btn-primary m-1 p-1" @click="onChangAddState">
          + Add more
        </button>
      </Accordion>
    </div>
    <div class="col-span-6 p-2">
      <ImageGallery
        v-bind:cls="cls"
        v-bind:columns="columns"
        v-bind:fixingItem="fixingItem"
        v-bind:gap="gap"
        v-bind:newItem="newItem"
        v-bind:items="items"
        v-bind:showLightBox="showLightBox"
        @on-show-light-box="onShowLightBox"
        @on-show-modal="onShowModal"
      />
    </div>
  </div>
</template>
