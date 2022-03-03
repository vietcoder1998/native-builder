<script lang="ts">
import { defineComponent, defineProps, onMounted, ref } from 'vue'
import { Field } from '../typing/fields'
import ValidateField from './form-input/ValidateField.vue'

const form1 = ref('#form-1')
export default defineComponent({
  name: 'form-contact-view',
  components: { ValidateField },
  data() {
    return {
      fields: [
        {
          title: 'Your name',
          type: 'text',
          width: 120,
          required: true,
          placeholder: 'must longer than 8',
          description: 'please add your name',
          name: 'name',
          value: null,
          showError: false,
          error: ''
        },
        {
          title: 'Your Email',
          type: 'text',
          width: 120,
          required: true,
          placeholder: 'must longer than 8',
          description: 'please add your name',
          name: 'mail',
          value: null,
          error: ''
        },
        {
          title: 'Time',
          type: 'date',
          width: 120,
          required: true,
          placeholder: 'must longer than 8',
          description: 'please add your name',
          name: 'Time',
          value: null,
          error: ''
        },
        {
          title: 'Select',
          type: 'dropdown',
          width: 120,
          required: true,
          placeholder: 'please chose 1',
          description: 'please add your name',
          name: 'select',
          options: ['The title 1', 'The title 2'] as String[],
          value: null,
          error: ''
        },
        {
          title: 'Checkbox',
          type: 'checkbox',
          width: 120,
          required: true,
          placeholder: 'must longer than 8',
          description: 'please add your name',
          options: ['The title 1', 'The title 2'],
          name: 'check-box',
          value: null,
          error: ''
        },
        {
          title: 'Radio',
          type: 'radio',
          width: 120,
          required: true,
          placeholder: 'must longer than 8',
          description: 'please add your name',
          options: ['The title 1', 'The title 2'],
          name: 'radio',
          value: null,
          error: ''
        },
        {
          title: 'Your message',
          type: 'textarea',
          width: 120,
          required: true,
          placeholder: 'must longer than 8',
          description: 'please add your name',
          name: 'msg',
          value: null,
          error: ''
        }
      ] as unknown as Field[],
      validates: {}
    }
  },
  setup() {
    const form1 = ref(null)

    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      console.log(form1.value) // <div>This is a root element</div>
    })
  },
  methods: {
    validateFormat() {
      console.log(this.$refs.form1)
    }
  }
})
</script>
<template>
  <form
    id="form-1"
    ref="form1"
    class="grid grid-cols-2 gap-4 mx-3"
    @submit.prevent="validateFormat"
  >
    <div v-for="(field, id) in fields" :key="id" class="relative">
      <ValidateField v-bind:field="field" />
    </div>
    <button type="submit" class="border w-20 h-14 bg-blue-500 text-blue-50">
      Submit
    </button>
  </form>
</template>

<style scoped></style>
