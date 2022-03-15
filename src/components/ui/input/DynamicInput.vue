<script lang="ts">
import { defineComponent, PropType, shallowRef } from 'vue'
import { Field, FieldType } from '../../../typing/index'
import CheckBoxVue from './CheckBox.vue'
import DateInputVue from './DateInput.vue'
import NumberInputVue from './NumberInput.vue'
import RadioInputVue from './RadioInput.vue'
import RangeInput from './RangeInput.vue'
import SelectInputVue from './SelectInput.vue'
import TextAreaVue from './TextArea.vue'
import TextInputVue from './TextInput.vue'
import UploadVue from './Upload.vue'

const numbIn = shallowRef(NumberInputVue)
const uploIn = shallowRef(UploadVue)
const textIn = shallowRef(TextInputVue)
const seleIn = shallowRef(SelectInputVue)
const radiIn = shallowRef(RadioInputVue)
const areaIn = shallowRef(TextAreaVue)
const dateIn = shallowRef(DateInputVue)
const checIn = shallowRef(CheckBoxVue)
const rangeIn = shallowRef(RangeInput)

export default defineComponent({
  name: 'validate-field',
  data() {
    return {
      current: {},
      files: []
    }
  },
  props: {
    field: {} as PropType<Field>,
    index: Number as PropType<Number | String | Symbol>,
    type: String as PropType<FieldType>,
    label: String,
    required: Boolean,
  },
  created() {},
  // watch: listen props, change on change props
  watch: {
    field: {
      handler(n: Field, o: Field) {
        this.forceRender()
      },
      deep: true
    }
  },
  mounted() {
    this.forceRender()
  },
  methods: {
    forceRender(): void {
      switch (this.type) {
        case 'upload':
          this.current = uploIn
          break

        case 'textarea':
          this.current = areaIn
          break

        case 'select':
          this.current = seleIn
          break

        case 'number':
          this.current = numbIn
          break
        case 'radio':
          this.current = radiIn
          break

        case 'date':
          this.current = dateIn
          break

        case 'checkbox':
          this.current = checIn
          break
        case 'range':
          this.current = rangeIn
          break

        default:
          this.current = textIn
          break
      }
    },

    onChange(e: any) {
      if (e) {
        if (e?.target?.files[0]) {
          const image = e.target.files[0]
          const reader = new FileReader()
          reader.readAsDataURL(image)
          reader.onload = (e: ProgressEvent<FileReader>) => {
            const previewImage = e?.target?.result
            this.$emit('on-input-field', this.index, previewImage)
          }
        } else {
          this.$emit('on-input-field', this.index, e?.target?.value)
        }
      }
    }
  },
  emits: ['on-input-field']
})
</script>

<template>
  <div class="validate form mb-2">
    <label :for="field?.customHTMLAttributes?.id" class="w-full relative">
      {{ field?.options?.title[0] }}
      <span
        v-if="field?.options?.required[0]"
        class="text-red-500 absolute top-0 -right-2"
        >*</span
      >
    </label>
    <keep-alive include="field" max="10">
      <component
        v-bind:is="current"
        v-bind:field="field"
        @change="onChange"
      ></component>
    </keep-alive>
    <p
      v-if="field?.customHTMLAttributes?.showError"
      class="text-red-400 text-sm absolute bottom-0 left-0"
    >
      {{ field?.customHTMLAttributes?.error || '' }}
    </p>
  </div>
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
