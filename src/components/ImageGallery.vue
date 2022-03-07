<script lang="ts">
import { defineComponent } from 'vue'
import InputFixer from './form/fixer/InputFixer.vue'
import LightBox from './LightBox.vue'
import Modal from './Modal.vue'
import MultiFixer from './form/fixer/MultiFixer.vue'
import { FieldName } from '../typing/fields'
import { GalleryItem } from '../typing/gallery'
import Accordion from './ui/Accordion.vue'
export default defineComponent({
  name: 'image-gallery',
  components: {
    Modal,
    LightBox,
    InputFixer,
    MultiFixer,
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
    onShowLightBox(item: {
      src: string
      title: string
      thumbnail: string
      index: number
    }) {
      this.$data.showLightBox = true
      this.$data.fixingItem = item
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
  }
})
</script>

<template>
  <main class="grid grid-cols-8 m-2">
    <div class="col-span-2 p-4">
      <Accordion title="Gallery">
        <div class="ml-2">
          <div>
            <label> Columns </label>
            <input
              id="gap"
              type="number"
              v-model="columns"
              @change="onChangeParams(columns, gap)"
              class="w-full"
            />
          </div>
          <div>
            <label> Gap </label>
            <input
              type="number"
              v-model="gap"
              class="w-full"
              @change="onChangeParams(columns, gap)"
            />
          </div>

          <div class="m-2" v-show="isAdd">
            <form @submit.prevent="onAddNewItem">
              <input v-model="newItem.src" type="string" placeholder="src" />
              <input
                v-model="newItem.title"
                type="string"
                placeholder="title"
              />
              <input
                v-model="newItem.thumbnail"
                type="string"
                placeholder="thumbnail"
              />
              <button id="show-modal c " @click="showModal = true">Fix</button>
            </form>
          </div>
        </div>
        <!--items-->
        <div>
          <Accordion title="Items">
            <ul class="ml-4">
              <li v-for="(item, i) in items" :key="i">
                <Accordion :title="'img' + i">
                  <div class="ml-2">
                    <input class="ml-2" v-model="item.src" />
                    <input class="ml-2" v-model="item.thumbnail" />
                    <input class="ml-2" v-model="item.title" />
                  </div>
                </Accordion>
              </li>
            </ul>
            <button
              class="btn border btn-primary m-1 p-1"
              @click="onChangAddState"
            >
              + Add more
            </button>
          </Accordion>
        </div>
      </Accordion>
    </div>
    <div class="col-span-4">
      <LightBox
        :show="showLightBox"
        @close="showLightBox = false"
        :src="fixingItem.src"
      />
      <!--modal-->
      <modal
        :show="showModal"
        @close=";(showModal = false), (lastIndex = fixingItem?.index)"
        :title="fixingItem.title"
        :src="fixingItem.src"
        :thumbnail="fixingItem.thumbnail"
        :index="fixingItem.index"
      >
        <template>
          <h3>Fix item {{ fixingItem.index }}</h3>
        </template>
      </modal>
      <!--modal-->
      <!-- Image gallery -->
      <div v-bind:class="cls">
        <div v-for="(item, index) in items" :key="index">
          <img
            :src="item.thumbnail"
            :aria-label="item.thumbnail"
            class="ri w-full"
            @click="onShowLightBox({ ...item, index })"
          />
        </div>
      </div>
    </div>
    <div class="m-2 col-span-2">
      <!-- Image Info -->
      <MultiFixer
        :initParams="[
          {
            fieldType: 'text',
            title: 'Gap',
            customHTMLAttributes: { defaultValue: '2', options: ['a', 'b'] }
          },
          {
            fieldType: 'text',
            title: 'Columns',
            customHTMLAttributes: { defaultValue: '2', options: ['a', 'b'] }
          }
        ]"
      />
    </div>
  </main>
</template>

<style scoped>
.img-container {
  display: flex;
}
table {
  margin-bottom: 20px;
}
th,
td {
  padding: 10px;
}
.hr-icon {
  width: 20px;
  height: 20px;
}
</style>
