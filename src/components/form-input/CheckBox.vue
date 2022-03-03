<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'checkbox-input',
  props: {
    value: String,
    key: String,
    required: Boolean,
    name: String,
    id: String,
    options: []
  }
})
</script>
<template>
  <div>
    <div
      v-for="(option, oid) in options"
      :key="oid"
      
    >
      <input v-model="value" type="checkbox" :name="name" @change="$emit('change', option, name)" />
      <label :for="name">
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
