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
    incremment() {}
  },
  computed: {
    count() {}
  }
})
</script>

<template>
  <h1 class="text-3xl font-bold underline">This is admin</h1>
  <p>{{ count }}</p>
</template>

<style scoped></style>
