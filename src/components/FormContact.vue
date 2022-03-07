<script lang="ts">
import { defineComponent, onMounted, ref, PropType } from 'vue'
import { Field, CustomHTMLAttributes, FieldName } from '../typing/fields'
import DymamicInput from './form/input/DynamicInput.vue'
import Accordion from './ui/Accordion.vue'

export default defineComponent({
  name: 'form-contact-view',
  components: { DymamicInput, Accordion },
  data(): { fields: Field[]; validates: { [key: string]: boolean } } {
    return {
      fields: [
        {
          title: 'Your name',
          type: 'text',
          index: 0,
          customHTMLAttributes: {
            width: 120,
            required: true,
            placeholder: 'must longer than 8',
            description: 'please add your name',
            name: 'name',
            showError: false,
            error: ''
          }
        },
        {
          title: 'Your Email',
          type: 'text',
          index: 1,
          customHTMLAttributes: {
            width: 120,
            required: true,
            placeholder: 'must longer than 8',
            description: 'please add your name',
            name: 'mail',
            error: ''
          }
        },
        {
          title: 'Time',
          type: 'date',
          width: 120,
          index: 2,
          customHTMLAttributes: {
            required: true,
            placeholder: 'must longer than 8',
            description: 'please add your name',
            name: 'Time',
            error: ''
          }
        },
        {
          title: 'Select',
          type: 'dropdown',
          index: 3,
          customHTMLAttributes: {
            width: 120,
            required: true,
            placeholder: 'please chose 1',
            description: 'please add your name',
            name: 'select',
            options: ['The title 1', 'The title 2'] as String[],
            error: ''
          }
        },
        {
          title: 'Checkbox',
          type: 'checkbox',
          index: 4,
          customHTMLAttributes: {
            width: 120,
            required: true,
            placeholder: 'must longer than 8',
            description: 'please add your name',
            options: ['The title 1', 'The title 2'],
            name: 'check-box',
            error: ''
          }
        },
        {
          title: 'Radio',
          type: 'radio',
          width: 120,
          index: 5,
          customHTMLAttributes: {
            required: true,
            placeholder: 'must longer than 8',
            description: 'please add your name',
            options: ['The title 1', 'The title 2'],
            name: 'radio',
            error: ''
          }
        },
        {
          title: 'Your message',
          type: 'textarea',
          value: '',
          index: 6,
          customHTMLAttributes: {
            width: 120,
            required: true,
            placeholder: 'must longer than 8',
            description: 'please add your name',
            name: 'msg',
            error: ''
          }
        },
        {
          title: 'Upload',
          type: 'upload',
          value: '',
          index: 7,
          customHTMLAttributes: {
            width: 120,
            required: true,
            placeholder: 'must longer than 8',
            description: 'please add your name',
            name: 'msg',
            error: ''
          }
        }
      ] as Field[],
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
  refs: {},
  computed: {
    formatInput() {
      return (i: number): string =>
        JSON.stringify(this.fields[i].customHTMLAttributes)
    },
    checkFieldType() {
      return (type: FieldName): string => (type ? type : 'text')
    },
    fieldTypes(): string[] {
      return Object.values(FieldName)
    }
  },
  methods: {
    // set value of CustomHTMLAttributes onchange textarea value
    onChangeAttributes(e: Event & { target: HTMLTextAreaElement }): void {
      const nAttb: CustomHTMLAttributes = JSON.parse(e.target.value)
      const k: number = Number(e.target.id.split('custom')[0])
      this.fields[k].customHTMLAttributes = nAttb
    },
    addNewField() {
      let field: Field = {
        title: 'New Item',
        type: FieldName.text,
        index: this.fields.length,
        customHTMLAttributes: {
          placeholder: 'new description',
          defaultValue: undefined
        }
      }
      field.title = 'New Item'
      this.fields.push(field)
    },
    onUpdateInputValue(index: number, value: string) {
      console.log(index, value)
      if (index && this.fields[index]) {
        this.fields[index].value = value
      } else {
        console.log('no index or value', index, value)
      }
    }
  }
})
</script>
<template>
  <div class="grid grid-cols-8">
    <div class="col-span-3 p-4">
      <Accordion title="Form Contact">
        <Accordion title="fields">
          <ul class="ml-3">
            <li v-for="(field, i) in fields" :key="i" class="mb-3">
              <Accordion :title="field?.title">
                <div>
                  <label :for="'title' + i"> Title </label>
                  <input
                    class="w-full"
                    type="text"
                    v-model="field.title"
                    placeholder="must long than 2"
                  />

                  <label :for="'value' + i"> Value </label>
                  <input
                    class="w-full"
                    type="text"
                    v-model="field.value"
                    placeholder="add your default value"
                  />
                  <label :for="'type' + i"> Type </label>
                  <select
                    v-model="field.type"
                    class="w-full p-2 border"
                    :defaultValue="field.type"
                  >
                    <option
                      v-for="fieldName in fieldTypes"
                      :value="fieldName"
                      :key="fieldName"
                    >
                      {{ fieldName }}
                    </option>
                  </select>
                  <label :for="'custom' + i"> Custom HTTML abtribute </label>
                  <textarea
                    class="w-full p-2 border"
                    placeholder="{name: value,name1: value1,}"
                    rows="4"
                    :id="'custom' + i"
                    :defaultValue="formatInput(i)"
                    :key="i"
                    @input="onChangeAttributes"
                  ></textarea>
                  <button></button>
                </div>
              </Accordion>
            </li>
          </ul>
          <button class="border" @click="addNewField">+ Add more</button>
        </Accordion>
      </Accordion>
    </div>
    <div class="col-span-5">
      <form
        id="form-1"
        ref="form1"
        class="grid grid-cols-2 gap-4 mx-3"
        @submit.prevent=""
      >
        <div v-for="(field, id) in fields" :key="id" class="relative">
          <DymamicInput
            v-bind:field="field"
            @on-change-input-field="onUpdateInputValue"
          />
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
