<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'select-input',
  props: {
    value: String,
    key: String,
    required: Boolean,
    placeholder: String,
    name: String,
    id: String,
    options: []
  }
})
</script>

<template>
  <select
    v-model="value"
    class="w-full p-3 border"
    :name="name"
    v-on:change="$emit('change')"
  >
    <option
      v-for="(option, oid) in options"
      :key="oid"
      :value="option"
      :for="name"
      :placeholder="placeholder"
      @change="$emit('change')"
    >
      {{ option }}
    </option>
  </select>
</template>
