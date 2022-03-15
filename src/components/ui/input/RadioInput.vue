<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CustomHTMLAttributes } from '../../../typing/fields'

export default defineComponent({
  name: 'radio-input',
  props: {
    customHTMLAttributes: {} as PropType<CustomHTMLAttributes>,
    value: String,
    options: Array as PropType<String[]>
  },
  computed: {
    HTMLInputName() {
      return (...args: (string | any)[]): string => {
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
    v-for="(option, oid) in customHTMLAttributes?.options"
    :key="option + oid"
  >
    <input
      type="radio"
      v-bind:id="HTMLInputName(customHTMLAttributes?.name, option)"
      v-bind:name="customHTMLAttributes?.name"
      v-bind:required="customHTMLAttributes?.required"
      v-bind:value="option"
      :checked="option === value"
      @click="$emit('change', option)"
    />
    <label :for="HTMLInputName(customHTMLAttributes?.name, option)">
      {{ option }}
    </label>
  </div>
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
