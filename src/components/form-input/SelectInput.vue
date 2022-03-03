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
    :value="value"
    class="w-full p-3 border"
    :name="name"
    v-on:change="$emit('change')"
  >
    <option
      v-for="(option, oid) in options"
      :key="oid"
      v-bind:value="option"
      :for="name"
    >
      {{ option }}
    </option>
  </select>
</template>
