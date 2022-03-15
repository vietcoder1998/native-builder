<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CustomHTMLAttributes } from '../../../typing/fields'
import { Field } from '../../../typing/index'

export default defineComponent({
  name: 'checkbox-input',
  props: {
    customHTMLAttributes: {} as PropType<CustomHTMLAttributes>,
    value: String
  },
  emits: ['change'],
  data() {}
})
</script>
<template>
  <div class="form-group" required>
    <div
      v-for="(option, oid) in customHTMLAttributes?.options"
      :key="oid"
    >
      <input
        type="checkbox"
        :name="customHTMLAttributes?.name"
        :value="option"
        :id="customHTMLAttributes?.name + option"
        @change="$emit('change', option, name)"
      />
      <label :for="customHTMLAttributes?.name + option">
        {{ option }}
      </label>
    </div>
  </div>
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
