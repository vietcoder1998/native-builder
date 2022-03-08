<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'section',
    setup() {

    },

    props: {
        items: Array,
        name: String
    }

})
</script>
<template>
  <div class="p-4">
    <Accordion :title="name">
      <Accordion
        v-for="(item, index) in items"
        :key="index"
        :title="'item' + index"
      >
      </Accordion>
    </Accordion>
  </div>
</template>
