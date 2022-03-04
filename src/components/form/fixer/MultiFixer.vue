<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { FieldFixer } from '../../../typing/fields'
export default defineComponent({
  name: 'multi-fixer',
  props: {
    initParams: [] as PropType<FieldFixer[]>
  },
  data(): { params: FieldFixer[] | undefined } {
    return {
      params: this.initParams as FieldFixer[]
    }
  },
  mounted() {
    console.log('receiver')
  }
})
</script>

<template>
  <div v-for="(param, i) in params" :key="i">
  </div>
</template>
