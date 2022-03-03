<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Field } from '../../typing/fields'

export default defineComponent({
  name: 'radio-input',
  props: {
    field: {} as PropType<Field>
  },
  data() {}
})
</script>
<template>
  <div v-for="(option, oid) in field?.options" :key="option + oid">
    <input
      type="radio"
      :id="field?.name + option"
      :name="field?.name"
      :required="field?.required"
      @change="$emit('change')"
    />
    <label :for="field?.name + option">
      {{ option }}
    </label>
  </div>
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
