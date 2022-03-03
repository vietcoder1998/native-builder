<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'admin-ui',
  props: {
    msg: String
  },
  data() {},
  components: {},
  method: {
    incremment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  },
  computed: {
    count(): number {
      return this.$store.state.count
    }
  }
})
</script>

<template>
  <h1 class="text-3xl font-bold underline">This is admin</h1>
  <p>{{ count }}</p>
</template>

<style scoped></style>
