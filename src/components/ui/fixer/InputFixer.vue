<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Field } from '../../../typing/index'
import { FieldName } from '../../../typing/fields'
export default defineComponent({
  name: 'input-fixer',
  props: {
    initInfo: {} as PropType<Field>
  },
  data() {
    return {
      info: this.initInfo
    }
  },
  mounted() {
    console.log('receiver')
  }
})
</script>

<template>
  <div class="p-4">
    <div class="mb-2">
      <label for="title-fixer" class="w-full"> Tittle </label>
      <input
        :value="initInfo?.title"
        id="title-fixer"
        type="text"
        class="w-full"
        required
      />
    </div>
    <div class="mb-2">
      <label for="title-fixer"> Field Type </label>
      <select
        :value="info?.fieldType"
        class="w-full p-3 border"
        required="true"
      >
        <option value="text" disabled selected>Mặc định</option>
        <option
          v-for="(option, oid) in info?.options"
          :key="oid"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
    <div class="mb-2">
      <label for="custom-fixer" class="w-full"> customHTMLAttributes </label>
      <textarea
        class="w-full border"
        id="custom-fixer"
        type="text"
        rows="3"
        placeholder="
          name:value
          name1:value1
        "
      ></textarea>
    </div>
    <button class="bg-blue-200">Submit</button>
  </div>
</template>
