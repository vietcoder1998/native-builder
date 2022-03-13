<script lang="ts">
import { defineComponent, PropType } from 'vue'
import dynamicElement from '../../mixin/dynamicElement'
import { GalleryItem } from '../../typing/gallery'
import LightBox from '../ui/LightBox.vue'
import Modal from '../ui/Modal.vue'
import { Field, Option } from '../../typing/index'

export default defineComponent({
  name: 'image-gallery',
  components: {
    Modal,
    LightBox
  },
  props: {
    sid: Number,
    cid: Number,
    eid: Number
  },
  created() {
    console.log(this.$props)
  },
  data() {
    return {
      fixingItem: {
        index: 0,
        src: '',
        title: '',
        thumbnail: ''
      } as GalleryItem,
      showLightBox: false,
      isAdd: false,
      lastIndex: 0,
      showModal: false,
      newItem: {}
    }
  },
  mixins: [dynamicElement<{}, {}, Field<string>>()],
  computed: {
    itemIndex(): number {
      return this.fixingItem?.index || 0
    },
    cls() {
      //@ts-ignore
      return `fgrid-${this.column} `
    },
    childCls() {
      //@ts-ignore
      return `w-${this.column}`
    },
    imgCls() {
      //@ts-ignore
      return `w-full p-${this.gap} `
    },
    imageFlexing(): GalleryItem[][] {
      //@ts-ignore
      let column: number = this.column
      let matrix: any[][] = []
      for (let i = 0; i < column; i++) {
        matrix.push([])
      }
      this.items.forEach((item, i) => {
        let t = i % column
        const converItem = {}
        Object.entries(item.options).map((entry) => {
          Object.assign(converItem, { [entry[0]]: entry[1][0] })
        })
        matrix[t].push(converItem)
        console.log(matrix[i])
      })
      return matrix
    }
  },
  methods: {
    onShowLightBox(item: GalleryItem, index: number) {
      this.showLightBox = true
      this.fixingItem = { ...item, index }
    },
    onShowModal() {
      this.showModal = true
      this.lastIndex = Number(this.fixingItem.index)
    },
    onCloseLightBox() {
      this.showLightBox = false
    },
    onCloseModal() {
      this.showModal = false
    }
  }
})
</script>

<template>
  <div class="fgrid selected-cpn">
    <LightBox
      :show="showLightBox"
      :src="fixingItem?.src"
      @close="onCloseLightBox"
    />
    <!--modal-->
    <modal
      :show="showModal"
      :title="fixingItem?.title"
      :src="fixingItem?.src"
      :thumbnail="fixingItem?.thumbnail"
      :index="fixingItem?.index"
      @close="onCloseLightBox"
    >
      <h3>Fix item {{ itemIndex }}</h3>
    </modal>
    <div v-for="(vertical, i) in imageFlexing" :class="childCls" :key="i">
      <div v-for="(hoziral, i1) in vertical" :key="i1">
        <img
          :src="hoziral.src"
          :alt="hoziral.alt"
          @click="onShowLightBox(hoziral, i * i1 + i1)"
          :class="imgCls"
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
