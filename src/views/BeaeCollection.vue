<script lang="ts">
import { defineComponent, defineProps } from 'vue'
import BeaeElement from '../components/BeaeElement.vue';

export default defineComponent({
  name: 'beae-collection',
  components: {
    BeaeElement
  }
})
</script>
<template>
  <BeaeElement />
</template>

<style scoped></style>
