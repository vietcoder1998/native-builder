<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Field } from '../typing/fields'
import DymamicInput from './form/input/DynamicInput.vue'
import Accordion from './ui/Accordion.vue'

const form1 = ref('#form-1')
export default defineComponent({
  name: 'form-contact-view',
  components: { DymamicInput, Accordion },
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
      alert('submit')
    },
    onChangeFieldValue(event: Event, index: number) {
      const value = event
      console.log(index)
    }
  }
})
</script>
<template>
  <div class="grid grid-cols-8">
    <div class="col-span-2">
      <Accordion title="Form Contact">
        <Accordion title="fields">
          <ul class="ml-3">
            <li v-for="(field, i) in fields" :key="i" class="mb-3">
              <Accordion :title="'item' + i">
                <div>
                  <label :for="'title' + i"> Tittle </label>
                  <input
                    class="w-full"
                    type="text"
                    v-model="field.title"
                    placeholder="must long than 2"
                  />
                  <label :for="'type' + i"> Type </label>
                  <select
                    v-model="field.type"
                    defaultValue="text"
                    class="w-full p-2 border"
                  >
                    <option value="text">text</option>
                    <option value="select">text</option>
                    <option value="number">number</option>
                    <option value="textarea">textarea</option>
                    <option value="radio">radio</option>
                    <option value="textarea">textarea</option>
                  </select>
                  <label :for="'custom' + i"> Custom HTTML abtribute </label>
                  <textarea
                    class="w-full p-2 border"
                    placeholder="{name: value,name1: value1,}"
                    rows="4"
                    :id="'custom' + i"
                  ></textarea>
                  <button></button>
                </div>
              </Accordion>
            </li>
          </ul>
          <button class="border">+ Add more</button>
        </Accordion>
      </Accordion>
    </div>
    <div class="col-span-4">
      <form
        id="form-1"
        ref="form1"
        class="grid grid-cols-2 gap-4 mx-3"
        @submit.prevent="validateFormat"
      >
        <div v-for="(field, id) in fields" :key="id" class="relative">
          <DymamicInput v-bind:field="field" />
        </div>
        <button type="submit" class="border w-20 h-14 bg-blue-500 text-blue-50">
          Submit
        </button>
      </form>
    </div>
    <div></div>
  </div>
</template>

<style scoped></style>
