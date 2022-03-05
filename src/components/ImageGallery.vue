<script lang="ts">
import { defineComponent } from 'vue'
import InputFixer from './form/fixer/InputFixer.vue'
import LightBox from './LightBox.vue'
import Modal from './Modal.vue'
import MultiFixer from './form/fixer/MultiFixer.vue'
import { FieldName } from '../typing/fields'
import { GalleryItem } from '../typing/gallery'
export default defineComponent({
  name: 'image-gallery',
  components: {
    Modal,
    LightBox,
    InputFixer,
    MultiFixer
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
    lastIndex: number
    showLightBox: boolean
  } {
    return {
      items: [
        {
          src: 'https://picsum.photos/200/300',
          title: 'Just add your desired ',
          thumbnail: 'this is a good photo',
          alt: 'Just add your desired'
        },
        {
          src: 'https://picsum.photos/200/300',
          title: 'Just add your desired ',
          thumbnail: 'this is a good photo',
          alt: 'Just add your desired'
        },
        {
          src: 'https://picsum.photos/200/300',
          title: 'Just add your desired ',
          thumbnail: 'this is a good photo'
        },
        {
          src: 'https://picsum.photos/200/300',
          title: 'Just add your desired ',
          thumbnail: 'this is a good photo'
        },
        {
          src: 'https://picsum.photos/200/300',
          title: 'Just add your desired ',
          thumbnail: 'this is a good photo'
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
    onUpdateImage(
      fixingItem: {
        src: string
        title: string
        thumbnail: string
        index: number
      },
      lastIndex: number
    ) {
      const temp = this.$data.items[fixingItem.index]
      this.$data.items[fixingItem.index] = {
        src: fixingItem.src,
        title: fixingItem.title,
        thumbnail: fixingItem.thumbnail
      }
      this.$data.items[lastIndex] = temp
      this.$data.showModal = false
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
  }
})
</script>

<template>
  <main class="grid grid-cols-2 m-2">
    <div>
      <div>
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
      </div>

      <!-- Image Info -->
      <table class="table-auto border-collapse border-slate-400">
        <thead>
          <tr>
            <th class="border border-slate-300">stt</th>
            <th class="border border-slate-300">src</th>
            <th class="border border-slate-300">title</th>
            <th class="border border-slate-300">thumbnail</th>
            <th class="border border-slate-300">action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="({ src, title, thumbnail }, index) in items" :key="index">
            <td class="border border-slate-300">{{ index }}</td>
            <td class="border border-slate-300">
              {{ src }}
            </td>
            <td class="border border-slate-300">{{ title }}</td>
            <td class="border border-slate-300">{{ thumbnail }}</td>
            <td class="border border-slate-300">
              <button
                id="show-modal"
                @click="
                  ;(showModal = true),
                    (fixingItem = { src, title, thumbnail, index })
                "
              >
                Fix
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <LightBox
        :show="showLightBox"
        @close="showLightBox = false"
        :src="fixingItem.src"
      />
      <!--modal-->
      <modal
        :show="showModal"
        @close=";(showModal = false), (lastIndex = fixingItem.index)"
        @update="onUpdateImage(fixingItem, lastIndex)"
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

      <button class="btn border btn-primary m-1 p-1" @click="onChangAddState">
        + Add more
      </button>

      <div class="p-2 m-2" v-show="isAdd">
        <form @submit.prevent="onAddNewItem">
          <input v-model="newItem.src" type="string" placeholder="src" />
          <input v-model="newItem.title" type="string" placeholder="title" />
          <input
            v-model="newItem.thumbnail"
            type="string"
            placeholder="thumbnail"
          />
          <button id="show-modal" @click="showModal = true">Fix</button>
        </form>
      </div>
      <!-- Image gallery -->
      <div v-bind:class="cls">
        <div v-for="(item, index) in items" :key="index">
          <img
            :src="item.thumbnail"
            :aria-label="item.thumbnail"
            class="ri"
            @click="onShowLightBox({ ...item, index })"
          />
        </div>
      </div>
    </div>
    <div class="m-2">
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
.ri {
  width: 100px;
  height: 100px;
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
