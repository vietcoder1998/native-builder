<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import IconVue from './Icon.vue'
import { AngleDown } from '../../assets/icons'

export default defineComponent({
  name: 'accordion',
  setup() {},
  components: { IconVue },
  props: {
    title: String,
    key: String,
    name: String,
    id: String,
    cls: String,
    isShow: Boolean,
    position: Array as PropType<number[]>
  },
  data(): { open: boolean; icon: string } {
    return {
      open: this.isShow,
      icon: AngleDown
    }
  },
  methods: {
    onDragStart(item: any) {
      console.log(item)
    },
    onDrop(item: any) {
      console.log(item)
    }
  },
  watch: {
    isShow(n, o) {
      this.open = n
    }
  },
  emits: ['onSelect']
})
</script>
<template>
  <div class="relative mb-2">
    <div v-bind:class="open && 'bg-blue-200' + ' rounded'">
      <button
        v-bind:class="'px-2 py-1 relative w-full text-left rounded border flex'"
      >
        <label class="border rounded">
          <app-icon
            v-bind:icon="!open ? 'angle-right' : 'angle-down'"
            class="w-6 h-6"
            @click="open = !open"
          />
        </label>
        <button
          class="ml-2 hover:cursor-pointed px-2 rounded"
          @click="$emit('onSelect')"
        >
          {{ title }}
        </button>
        <label
          class="border rounded absolute right-2"
          @dragstart="onDragStart(id)"
          @drop="onDrop(id)"
        >
          <app-icon icon="sort" class="w-6 h-6" @click="open = !open" />
        </label>
      </button>
    </div>
    <div v-show="open" v-bind:class="cls || ''">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
