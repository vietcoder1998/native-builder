<script lang="ts">
import { defineComponent } from 'vue';
import BeaeElement from '../components/beae-element/BeaeElement.vue';

export default defineComponent({
  name: 'beae-collection',
  components: {
    BeaeElement
  },
  mouted() {
    console.log('mounting')
  }
})
</script>
<template>
  <BeaeElement ></BeaeElement>
</template>

<style scoped></style>
