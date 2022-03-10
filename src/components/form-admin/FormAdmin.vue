F<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'admin',
  props: {
    tab: String
  },
  data() {
    return {
      isChanging: false
    }
  },
  components: {},
  methods: {
    saveNewStore() {
      const nValue = (this.$refs.liquidValue as HTMLTextAreaElement).value
      this.$store.commit('setValue', { vl: JSON.parse(nValue), keys: [this.tab] })
    }
  },
  computed: {
    liquidView() {
      return JSON.stringify(this.$store.state[this.tab])
    }
  },
  watch: {}
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
