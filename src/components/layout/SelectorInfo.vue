<script lang="ts">
import { defineComponent } from 'vue'
import selector from '../../mixin/selector'
import Accordion from '../ui/Accordion.vue'
import DynamicInput from '../form/input/DynamicInput.vue'
export default defineComponent({
  name: 'selector-info',
  mixins: [selector()],
  components: { Accordion, DynamicInput },
  computed: {}
})
</script>
<template>
  <div>
    <div>
      <div v-for="(properties, k) in selector.value?.options" v-bind:key="k">
        <DynamicInput
          class="w-full"
          v-bind:id="'element-selector' + k.toString()"
          v-bind:field="{
            value: properties[0],
            type: properties[1],
            title: k.toString(),
            index: parseInt(k.toString()),
            customHTMLAttributes: {
              options: properties[2],
              name: k.toString()
            }
          }"
        />
      </div>
    </div>
  </div>
</template>
