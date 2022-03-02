<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
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
        }
      ],
      columns: 1,
      gap: 0,
      cls: 'grid grid-cols-3 gap-2'
    }
  },
  methods: {
    onChangeParams(columns: number, gap: number) {
      console.log('change function')
      this.$data.cls = `grid grid-cols-${columns} gap-${gap}`
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
  <!-- Image gallery -->
  <div v-bind:class="cls">
    <div v-for="(item, index) in items" :key="index">
      <img :src="item.src" :aria-label="item.thumbnail" class="ri" />
      <label>
        {{ item.title }}
      </label>
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
</style>
