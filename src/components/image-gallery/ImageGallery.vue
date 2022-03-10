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
    imageFlexing: Array as PropType<GalleryItem[][]>,
    column: Number,
    gap: Number,
    cls: String,
    imgCls: String,
    showModal: Boolean,
    isAdd: Boolean,
    lastIndex: Number,
    showLightBox: Boolean,
    newItem: Object as PropType<GalleryItem>,
    fixingItem: Object as PropType<GalleryItem>,
    childCls: String
  },
  data() {
    return {}
  },
  computed: {
    itemIndex() {
      return this.fixingItem?.index || 0
    },
  }
})
</script>

<template>
  <div class="fgrid">
    <LightBox
      v-bind:show="showLightBox"
      v-bind:src="fixingItem?.src"
      @close="$emit('on-show-light-box')"
    />
    <!--modal-->
    <modal
      v-bind:show="showModal"
      v-bind:title="fixingItem?.title"
      v-bind:src="fixingItem?.src"
      v-bind:thumbnail="fixingItem?.thumbnail"
      v-bind:index="fixingItem?.index"
      @close="$emit('on-show-modal')"
    >
      <h3>Fix item {{ itemIndex }}</h3>
    </modal>
    <div
      v-for="(vertical, i) in imageFlexing"
      v-bind:class="childCls"
      v-bind:key="i"
    >
      <div v-for="(hoziral, i1) in vertical" v-bind:key="i1">
        <img
          v-bind:src="hoziral.src"
          v-bind:alt="hoziral.alt"
          @click="$emit('on-show-light-box', hoziral, i * i1 + i1)"
          v-bind:class="imgCls"
        />
      </div>
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
