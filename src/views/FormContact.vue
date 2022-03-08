<script lang="ts">
import { defineComponent, defineProps } from 'vue'
import FormContact from '../components/form-contact/FormContact.vue'
import { CustomHTMLAttributes, Field, FieldName } from '../typing/fields'
import Accordion from '../components/ui/Accordion.vue'

export default defineComponent({
  name: 'form-contact',
  components: {
    FormContact,
    Accordion
  },
  data() {
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
      ] as Field[]
    }
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
    onChangeAttributes(e: Event): void {
      const nAttb: CustomHTMLAttributes = JSON.parse(
        (e.target as HTMLTextAreaElement).value
      )
      const k: number = Number(
        (e?.target as HTMLTextAreaElement).id.split('custom')[0]
      )
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
    <div class="col-span-2">
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
                    :key="i"
                    :value="formatInput(i)"
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
    <div class="col-span-4">
      <FormContact :fields="fields" />
    </div>
  </div>
</template>

<style scoped></style>
