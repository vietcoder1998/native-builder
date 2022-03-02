<script lang="ts">
import { defineComponent, defineProps } from 'vue'

type FieldName = 'text' | 'textarea' | 'checkbox' | 'dropdown' | 'button'
type Field = {
  title?: string
  type?: FieldName
  value?: unknown
  options?: unknown[]
  width?: number
  required?: boolean
  placeholder?: string
  description?: string
}

defineProps({
  props: {}
})

export default defineComponent({
  name: 'hello-world',
  components: {},
  data() {
    return {
      fields: [
        {
          title: 'Your name',
          type: 'text',
          width: 120,
          required: true,
          placeholder: 'must longer than 8',
          description: 'please add your name'
        },
        {
          title: 'Your Email',
          type: 'text',
          width: 120,
          required: true,
          placeholder: 'must longer than 8',
          description: 'please add your name'
        },
        {
          title: 'Time',
          type: 'text',
          width: 120,
          required: true,
          placeholder: 'must longer than 8',
          description: 'please add your name'
        },
        {
          title: 'Select',
          type: 'text',
          width: 120,
          required: true,
          placeholder: 'must longer than 8',
          description: 'please add your name'
        },
        {
          title: 'Checkbox',
          type: 'text',
          width: 120,
          required: true,
          placeholder: 'must longer than 8',
          description: 'please add your name'
        },
        {
          title: 'Radio',
          type: 'text',
          width: 120,
          required: true,
          placeholder: 'must longer than 8',
          description: 'please add your name'
        },
        {
          title: 'Your message',
          type: 'text',
          width: 120,
          required: true,
          placeholder: 'must longer than 8',
          description: 'please add your name'
        },
        {
          title: 'YourName',
          type: 'text',
          width: 120,
          required: true,
          placeholder: 'must longer than 8',
          description: 'please add your name'
        }
      ] as Field[],
      validates: {} as { [key: string]: boolean }
    }
  }
})
</script>
<template>
  <form class="grid grid-cols-2 gap-4 mx-3">
    <div v-for="(field, id) in fields" :key="id" class="relative">
      <label for="id" class="w-full relative">
        {{ field.title }}
        <span
          v-show="field.required"
          class="text-red-500 absolute top-0 -right-2"
          >*</span
        >
      </label>
      <input
        class="w-full"
        :type="field.type"
        v-model="field.value"
        :key="type + '_' + id"
        v-bind:required="required"
        :placeholder="field.placeholder"
        :id="id"
      />
      <span> </span>
    </div>
    <label> </label>
  </form>
</template>

<style scoped></style>
