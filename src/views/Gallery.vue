<script lang="ts">
import { defineComponent } from 'vue'
import ImageGallery from '../components/image-gallery/ImageGallery.vue'
import { GalleryItem } from '../typing/gallery'
import Accordion from '../components/ui/Accordion.vue'
import Add from '../components/layout/Add.vue'
import { FieldName } from '../typing/fields'
import { State } from '../typing/store'

export default defineComponent({
  name: 'gallery',
  components: {
    ImageGallery,
    Accordion,
    Add
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
      showLightBox: false
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
    onSubmitInfo(field: GalleryItem) {
      this.items.push(field)
    },
    setColumnValue(e: Event): void {
      this.$store.commit('setValue', {
        vl: (e.target as HTMLInputElement).value,
        keys: ['gallery', 'column']
      })
    },
    setGapValue(e: Event): void {
      this.$store.commit('setValue', {
        vl: (e.target as HTMLInputElement).value,
        keys: ['gallery', 'gap']
      })
    }
  },
  computed: {
    textField(): FieldName {
      return FieldName.text
    },
    radioField(): FieldName {
      return FieldName.radio
    },
    cls() {
      //@ts-ignore
      return `grid grid-cols-${this.column} gap-${this.gap} `
    },
    column(): number {
      return this.$store.state.gallery.column
    },
    gap(): number {
      return this.$store.state.gallery.gap
    },
    items(): GalleryItem[] {
      return this.$store.state.gallery.items
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
  <div class="grid grid-cols-8">
    <div class="col-span-2 p-2">
      <Accordion title="Gallery">
        <Accordion title="Column">
          <input
            id="gap"
            type="number"
            class="w-full"
            @input="setColumnValue"
            v-bind:value="column"
            min="0"
          />
        </Accordion>
        <Accordion title="Gap">
          <input
            id="columns"
            type="number"
            v-bind:value="gap"
            @input="setGapValue"
            class="w-full"
            min="0"
          />
        </Accordion>
        <Accordion title="Items">
          <Accordion
            v-for="(item, i) in items"
            :title="'img' + i"
            v-bind:key="i"
          >
            <input class="ml-2" v-model="item.src" />
            <input class="ml-2" v-model="item.thumbnail" />
            <input class="ml-2" v-model="item.title" />
          </Accordion>
        </Accordion>
        <Add
          v-bind:field="{
            title: { name: 'title', type: textField, value: null },
            src: { name: 'src', type: textField, value: null },
            thumbnail: { name: 'thumbnail', type: textField, value: null }
          }"
          @on-submit-info="onSubmitInfo"
        ></Add>
      </Accordion>
    </div>
    <div class="col-span-6 p-2">
      <ImageGallery
        v-bind:cls="cls"
        v-bind:column="column"
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
