<script lang="ts">
import { defineComponent, ref } from 'vue'
import { State } from '../typing/store'
import TextArea from './form/input/TextArea.vue'

export default defineComponent({
  name: 'admin',
  props: {
    msg: String
  },
  data() {},
  components: {},
  methods: {
    saveNewStore(nValue: string) {
      this.$store.commit('setValue', JSON.parse(nValue))
    }
  },
  computed: {
    count: {
      get() {
        console.log(this.$store)
        return JSON.stringify(this.$store?.state)
      },
      set(nValue: string) {
        this.saveNewStore(nValue)
      }
    }
  }
})
</script>

<template>
  <textarea v-model="count"> </textarea>
</template>

<style scoped></style>
