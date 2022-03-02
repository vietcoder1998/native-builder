<script lang="ts">
import { defineComponent, ref } from 'vue'
import Modal from './Modal.vue'

export default defineComponent({
  components: {
    Modal
  },
  data() {
    return {
      items: [
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
      lastIndex: 0
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
      this.$data.items[fixingItem.index] = { src: fixingItem.src, title: fixingItem.title, thumbnail: fixingItem.thumbnail}
      this.$data.items[lastIndex] = temp
      this.$data.showModal = false
    }
  }
})
</script>

<template>
  <div>
    <div>
      <label> Columns </label>
      <input
        type="number"
        v-model="columns"
        @change="onChangeParams(columns, gap)"
      />
    </div>
    <div>
      <label> Gap </label>
      <input
        type="number"
        v-model="gap"
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
  <!--modal-->
  <modal
    :show="showModal"
    @close="showModal = false, lastIndex= fixingItem.index"
    :data="fixingItem"
    @update="onUpdateImage(fixingItem, lastIndex)"
  >
    <template #header>
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
      <img :src="item.src" :aria-label="item.thumbnail" class="ri" />
    </div>
  </div>
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
