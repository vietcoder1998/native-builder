<script lang="ts">
import { defineComponent } from 'vue'
import selector from '../../mixin/selector'

export default defineComponent({
  name: 'select-selector',
  mixins: [selector()]
})
</script>
<template>
  <div>
    <div></div>
  </div>
</template>
