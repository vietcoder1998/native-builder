<script lang="ts">
import { defineComponent, onMounted, ref, PropType } from 'vue'
import { Field, CustomHTMLAttributes, FieldName } from '../../typing/fields'
import DymamicInput from '../form/input/DynamicInput.vue'
import Accordion from '../ui/Accordion.vue'

export default defineComponent({
  name: 'form-contact-view',
  components: { DymamicInput, Accordion },
  refs: {},
  props: {
    fields: Array as PropType<Field[]>
  },
  computed: {
    formatInput() {
      return (i: number): string =>
        this.fields ? JSON.stringify(this.fields[i].customHTMLAttributes) : ''
    },
    checkFieldType() {
      return (type: FieldName): string => (type ? type : 'text')
    },
    fieldTypes(): string[] {
      return Object.values(FieldName)
    },
  },
  methods: {
    // set value of CustomHTMLAttributes onchange textarea value
    onChangeAttributes(e: Event): void {
      if (this.fields) {
        const nAttb: CustomHTMLAttributes = JSON.parse(
          (e.target as HTMLTextAreaElement).value
        )
        const k: number = Number(
          (e?.target as HTMLTextAreaElement).id.split('custom')[0]
        )
        this.fields[k].customHTMLAttributes = nAttb
      }
    },
    addNewField() {
      if (this.fields) {
        let field: Field = {
          title: 'New Item',
          type: FieldName.text,
          index: this.fields.length,
          customHTMLAttributes: {
            placeholder: 'new description',
            name: 'text'
          }
        }
        field.title = 'New Item'
        this.fields.push(field)
      }
    },
    onUpdateInputValue(index: number, value: string) {
      console.log('update ->' , index, value)
      if (index && this.fields && this.fields[index]) {
        this.$store.state.formContact.fields[index] = value
      } else {
        console.log('no index or value', index, value)
      }
    }
  }
})
</script>
<template>
  <form
    id="form-1"
    ref="form1"
    class="grid grid-cols-2 gap-4 mx-3"
    @submit.prevent=""
  >
    <div v-for="(field, id) in fields" :key="id" class="relative">
      <DymamicInput
        v-bind:field="field"
        @on-input-field="onUpdateInputValue"
      />
    </div>
    <button type="submit" class="border w-20 h-14 bg-blue-500 text-blue-50">
      Submit
    </button>
  </form>
</template>

<style scoped></style>
