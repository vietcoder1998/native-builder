<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { GalleryItem } from '../../typing/gallery'
import InputFixer from '../form/fixer/InputFixer.vue'
import MultiFixer from '../form/fixer/MultiFixer.vue'
import LightBox from '../ui/LightBox.vue'
import Modal from '../ui/Modal.vue'
import Accordion from '../ui/Accordion.vue'

export default defineComponent({
  name: 'image-gallery',
  components: {
    Modal,
    LightBox,
    InputFixer,
    MultiFixer,
    Accordion
  },
  props: {
    items: Array as PropType<GalleryItem[]>,
    columns: Number,
    gap: Number,
    cls: String,
    showModal: Boolean,
    isAdd: Boolean,
    lastIndex: Number,
    showLightBox: Boolean,
    newItem: Object as PropType<GalleryItem>,
    fixingItem: Object as PropType<GalleryItem>
  },
  methods: {}
})
</script>

<template>
  <main class="grid grid-cols-8 m-2">
      <LightBox
        :show="showLightBox"
        @close="showLightBox = false"
        v-bind:src="fixingItem.src"
      />
      <!--modal-->
      <modal
        :show="showModal"
        @close="(showModal = false), (lastIndex = fixingItem?.index)"
        v-bind:title="fixingItem?.title!"
        v-bind:src="fixingItem.src"
        v-bind:thumbnail="fixingItem.thumbnail"
        v-bind:index="fixingItem.index"
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
            v-bind="item.thumbnail"
            :aria-label="item.thumbnail"
            class="ri w-full"
            @click="$emit('show-light-box', { ...item, index })"
          />
        </div>
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
