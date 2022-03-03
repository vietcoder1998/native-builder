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
    <div v-for="(option, oid) in options" v-bind:key="oid">
      <input type="checkbox" :name="option" />
      <label :for="option">
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
