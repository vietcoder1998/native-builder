<script lang="ts">
import { defineComponent, defineProps } from 'vue'
import Admin from '../components/Admin.vue'

export default defineComponent({
  name: 'admin',
  components: {
    Admin
  }
})
</script>
<template>
  <div><Admin></Admin></div>
</template>

<style scoped></style>
