<script lang="ts">
import { defineComponent } from 'vue'
import * as HelloWorld from '../components/HelloWorld.vue'
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
