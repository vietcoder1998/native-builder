<style scoped></style>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Vue from 'vue'
export default defineComponent({
  props:  {
    menu: Array as PropType<String[]>
  },
  data() {
    return {
      show: true,
      selected: 'string',
    }
  }
})
</script>

<template>
    <div class="w250">

    </div>
</template>
