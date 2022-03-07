<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Field } from '../../../typing/fields'

export default defineComponent({
  name: 'radio-input',
  props: {
    field: {} as PropType<Field>
  },
  data() {}
})
</script>
<template>
  <div v-for="(option, oid) in field?.customHTMLAttributes.options" :key="option + oid">
    <input
      type="radio"
      :id="field?.customHTMLAttributes.name + option"
      :name="field?.customHTMLAttributes.name"
      :required="field?.customHTMLAttributes.required"
      v-model="field.value"
      @change="$emit('change')"
    />
    <label :for="field?.customHTMLAttributes.name + option">
      {{ option }}
    </label>
  </div>
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
