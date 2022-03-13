<script lang="ts">
import { defineComponent, onMounted, ref, PropType } from 'vue'
import dynamicElement from '../../mixin/dynamicElement'
import { Field, CustomHTMLAttributes, FieldName } from '../../typing/fields'
import DymamicInput from '../ui/input/DynamicInput.vue'
import Accordion from '../ui/Accordion.vue'

export default defineComponent({
  name: 'form-contact-view',
  components: { DymamicInput, Accordion },
  props: {
    postion: Array as PropType<number[]>,
    sid: Number,
    cid: Number,
    eid: Number
  },
  refs: {},
  mixins: [dynamicElement<any, any, Field>()],
  computed: {
    formatInput() {
      return (i: number): string =>
        this.items ? JSON.stringify(this.items[i].customHTMLAttributes) : ''
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
      if (this.items) {
        const nAttb: CustomHTMLAttributes = JSON.parse(
          (e.target as HTMLTextAreaElement).value
        )
        const k: number = Number(
          (e?.target as HTMLTextAreaElement).id.split('custom')[0]
        )
        this.items[k].customHTMLAttributes = nAttb
      }
    },
    addNewField() {
      if (this.items) {
        let field: Field = {
          title: 'New Item',
          tag: 'input',
          type: FieldName.text,
          index: this.items.length,
          customHTMLAttributes: {
            placeholder: 'new description',
            name: 'text'
          }
        }
        field.title = 'New Item'
        this.items.push(field)
      }
    },
    onUpdateInputValue(index: number, value: string) {
      console.log('update ->', index, value)
      if (index && this.items && this.items[index]) {
        this.$store.state.formContact.items[index] = value
      } else {
        console.log('no index or value', index, value)
      }
    }
  }
})
</script>
<template>
  <div class="bg-white">
    <form
      id="form-1"
      ref="form1"
      class="grid grid-cols-2 gap-4 mx-3 my-5"
      @submit.prevent=""
    >
      <div
        v-for="(field, id) in items"
        :key="id"
        class="col-span-1 sm:col-span-2"
      >
        <DymamicInput
          v-bind:field="field"
          @on-input-field="onUpdateInputValue"
        />
      </div>
      <button type="submit" class="border p-2 rounded bg-blue-500 text-blue-50">
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped></style>
