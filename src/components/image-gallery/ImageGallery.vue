<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { GalleryItem } from '../../typing/gallery'
import LightBox from '../ui/LightBox.vue'
import Modal from '../ui/Modal.vue'

export default defineComponent({
  name: 'image-gallery',
  components: {
    Modal,
    LightBox
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
  computed: {
    itemIndex() {
      return this.fixingItem?.index || 0
    }
  }
})
</script>

<template>
  <div v-bind:class="cls">
    <LightBox
      v-bind:show="showLightBox"
      v-bind:src="fixingItem?.src"
      @close="$emit('on-show-light-box')"
    />
    <!--modal-->
    <modal
      v-bind:show="showModal"
      v-bind:title="fixingItem?.title!"
      v-bind:src="fixingItem?.src"
      v-bind:thumbnail="fixingItem?.thumbnail"
      v-bind:index="fixingItem?.index"
      @close="$emit('on-show-modal')"
    >
      <h3>Fix item {{ itemIndex }}</h3>
    </modal>
    <div v-for="(item, index) in items">
      <img
        v-bind:thumbnail="item.thumbnail"
        v-bind:src="item.src"
        v-bind:alt="item.alt"
        class="ri w-full"
        @click="$emit('on-show-light-box', item, index)"
        :key="index"
      />
      <p>{{item.title}}</p>
    </div>
  </div>
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
