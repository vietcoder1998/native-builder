<script lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'hello-world',
  components: {
    HelloWorld
  }
})
</script>
<template>
  <HelloWorld msg="This is new tutorial into home" />
</template>

<style scoped></style>
