<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'admin',
  props: {
    tab: String
  },
  data() {
    return {
      liquidView: '',
      isChanging: false
    }
  },
  components: {},
  methods: {
    saveNewStore() {
      // const nValue = JSON.parse(this.$refs.liquidValue)
      //@ts-check
      const nValue = (this.$refs.liquidValue as HTMLTextAreaElement).value
      this.$store.commit('setValue', JSON.parse(nValue))
    }
  },
  computed: {},
  watch: {
    tab() {
      this.liquidView = JSON.stringify(this.$store.state[this.tab])
    }
  }
})
</script>

<template>
  <div class="p-2">
    <p>Liquid Admin</p>
    <textarea
      v-bind:value="liquidView"
      class="w-full border"
      rows="18"
      placeholder="Text something ..."
      ref="liquidValue"
    ></textarea>
    <div class="text-right">
      <button class="p-2 bg-red-300 rounded m-2">Cancel</button>
      <button class="p-2 bg-blue-300 rounded m-2" @click="saveNewStore">
        Save
      </button>
    </div>
  </div>
</template>

<style scoped></style>
