<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'number-input',
  props: {
    value: Number,
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
  <div>
    <div v-for="(option, oid) in options" :key="option + oid">
      <input type="radio" :id="String(option + oid)" :name="name" v-on:change="$emit('change')" />
      <label :id="String(option + oid)" :for="name">
        {{ options }}
      </label>
    </div>
  </div>
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
