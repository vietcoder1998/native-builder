<script lang="ts">
import { defineComponent } from 'vue'
import BeaeElement from '../components/beae-element/BeaeElement.vue'
import ImageGallery from '../components/image-gallery/ImageGallery.vue'
import Slides from '../components/slides/Slides.vue'
import FormContact from '../components/form-contact/FormContact.vue'
import LiquidAdmin from '../components/liquid-admin/LiquidAdmin.vue'
import Accordion from '../components/ui/Accordion.vue'
import { State } from '../typing/store'
import SearchSelect from '../components/ui/SearchSelect.vue'

export default defineComponent({
  name: 'liquid-admin',
  components: {
    ImageGallery,
    FormContact,
    Slides,
    BeaeElement,
    LiquidAdmin,
    Accordion,
    SearchSelect
  },
  data() {
    return {
      tab: ''
    }
  },
  computed: {
    center(): State {
      return this.$store.state
    },
    keyStore(): String[] {
      return Object.keys(this.$store.state)
    },
    initSelect() {
      return Object.keys(this.$store.state)[0]
    }
  },
  mounted() {
    console.log(this.center)
    this.tab = this.initSelect
  },
  emits: ['on-select'],
  methods: {
    onSelect(e: string) {
      this.tab = e
    }
  }
})
</script>
<template>
  <div class="grid grid-cols-8">
    <section class="col-span-2">
      Section
      <SearchSelect
        v-bind:fields="keyStore"
        :init-selected="initSelect"
        @on-select="onSelect"
      />
    </section>
    <main class="col-span-6">
      <LiquidAdmin v-bind:tab="tab" />
    </main>
  </div>
</template>

<style scoped></style>
