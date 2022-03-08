<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Field } from '../../../typing/fields'

export default defineComponent({
  name: 'radio-input',
  props: {
    field: {} as PropType<Field>
  },
  computed: {
    HTMLInputName() {
      return (...args: string[]): string => {
        return Array.from(args).reduce(
          (a: string | undefined, b: string | undefined) => a + '-' + b
        )
      }
    }
  }
})
</script>
<template>
  <div
    v-for="(option, oid) in field?.customHTMLAttributes?.options"
    :key="option + oid"
  >
    <input
      type="radio"
      v-bind:id="HTMLInputName(field?.customHTMLAttributes?.name!, option)"
      v-bind:name="field?.customHTMLAttributes.name"
      v-bind:required="field?.customHTMLAttributes.required"
      v-bind:value="option"
      :checked="option === field?.value"
      @click="$emit('change', option)"
    />
    <label :for="HTMLInputName(field?.customHTMLAttributes?.name!, option)">
      {{ option }}
    </label>
  </div>
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
