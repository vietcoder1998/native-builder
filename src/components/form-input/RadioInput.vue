<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'radio-input',
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
  <div>
    <div v-for="(option, oid) in options" :key="option + oid">
      <input type="radio" :id="String(option + oid)" :name="name" @change="$emit('change')" />
      <label :id="String(option + oid)" :for="name">
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
