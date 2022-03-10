<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'
import { Field, FieldName } from '../../../typing/fields'
import CheckBoxVue from './CheckBox.vue'
import DateInputVue from './DateInput.vue'
import NumberInputVue from './NumberInput.vue'
import RadioInputVue from './RadioInput.vue'
import SelectInputVue from './SelectInput.vue'
import TextAreaVue from './TextArea.vue'
import TextInputVue from './TextInput.vue'
import UploadVue from './Upload.vue'

export default defineComponent({
  name: 'validate-field',
  components: {
    NumberInputVue,
    TextInputVue,
    SelectInputVue,
    DateInputVue,
    RadioInputVue,
    UploadVue
  },
  data() {
    return {
      current: {},
      files: []
    }
  },
  props: {
    field: {} as PropType<Field>
  },

  // called on init
  activated() {
    console.log('hello world')
  },
  // watch: listen props, change on change props
  watch: {
    field: {
      handler(nValue: Field, oValue: Field) {
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
      switch (this.field?.type) {
        case FieldName.upload:
          this.current = UploadVue
          break

        case FieldName.textarea:
          this.current = TextAreaVue
          break

        case FieldName.dropdown:
          this.current = SelectInputVue
          break

        case FieldName.number:
          this.current = NumberInputVue
          break
        case FieldName.radio:
          this.current = RadioInputVue
          break

        case FieldName.date:
          this.current = DateInputVue
          break

        case FieldName.checkbox:
          this.current = CheckBoxVue
          break

        default:
          this.current = TextInputVue
          break
      }
    },

    onChange(e: any) {
      if (this.field?.index && e) {
        if (e?.target?.files[0]) {
          const image = e.target.files[0]
          const reader = new FileReader()
          reader.readAsDataURL(image)
          reader.onload = (e: ProgressEvent<FileReader>) => {
            const previewImage = e?.target?.result
            this.$emit('on-input-field', this.field?.index, previewImage)
          }
        } else {
          this.$emit(
            'on-input-field',
            this.field?.index,
            e?.target?.value
          )
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
      {{ field?.title }}
      <span
        v-show="field?.customHTMLAttributes?.required"
        class="text-red-500 absolute top-0 -right-2"
        >*</span
      >
    </label>
    <keep-alive include="field" max="10">
      <component
        v-bind:is="current"
        v-bind:field="field"
        :key="field?.customHTMLAttributes.key"
        @change="onChange"
      ></component>
    </keep-alive>
    <p
      v-show="field?.customHTMLAttributes.showError"
      class="text-red-400 text-sm absolute bottom-0 left-0"
    >
      {{ field?.customHTMLAttributes.error }}
    </p>
  </div>
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
