<script lang="ts">
import { defineComponent } from 'vue'
import { FieldName } from '../../../typing/fields'
export default defineComponent({
  name: 'input-fixer',
  data() {
    return {
      title: '',
      fieldType: FieldName.text,
      customHTMLAttributes: {},
      options: [FieldName.text, FieldName.textarea, FieldName.dropdown]
    }
  },
  mounted() {
    console.log('receiver')
  }
})
</script>

<template>
  <div class="p-4">
    <div>
      <label for="title-fixer" class="w-full"> Tittle </label>
      <input id="title-fixer" type="text" required />
    </div>
    <div>
      <label for="title-fixer"> Field Type </label>
      <select v-model="fieldType" class="w-full p-3 border" required="true">
        <option value="text" disabled selected>Mặc định</option>
        <option v-for="(option, oid) in options" :key="oid" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <div>
      <label for="custom-fixer" class="w-full"> customHTMLAttributes </label>
      <textarea
        class="w-full border"
        id="custom-fixer"
        type="text"
        required
        rows="3"
      ></textarea>
    </div>
    <button class="bg-blue-200">Submit</button>
  </div>
</template>
