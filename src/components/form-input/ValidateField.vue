<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'
import { Field, FieldName } from '../../typing/fields'
import CheckBoxVue from './CheckBox.vue'
import DateInputVue from './DateInput.vue'
import NumberInputVue from './NumberInput.vue'
import RadioInputVue from './RadioInput.vue'
import SelectInputVue from './SelectInput.vue'
import TextAreaVue from './TextArea.vue'
import TextInputVue from './TextInput.vue'

export default defineComponent({
  name: 'validate-field',
  components: {
    NumberInputVue,
    TextInputVue,
    SelectInputVue,
    DateInputVue,
    RadioInputVue,
    CheckBoxVue
  },
  data() {
    return {
      current: TextInputVue
    }
  },
  props: {
    field: {} as PropType<Field>
  },

  methods: {
    change(e: any) {
      console.log(e)
    }
  },

  // called on init
  activated() {
    console.log('hello world')
  },

  // switch component
  mounted() {
    switch (this.$props.field?.type) {
      case FieldName.textarea:
        this.$data.current = TextAreaVue
        break

      case FieldName.dropdown:
        this.$data.current = SelectInputVue
        break

      case FieldName.number:
        this.$data.current = NumberInputVue
        break
      case FieldName.radio:
        this.$data.current = RadioInputVue
        break

      case FieldName.date:
        this.$data.current = DateInputVue
        break

      case FieldName.checkbox:
        this.$data.current = CheckBoxVue
        break

      default:
        this.$data.current = TextInputVue
        break
    }
  }
})
</script>

<template>
  <div class="validate form mb-5">
    <label :for="field?.name" class="w-full relative">
      {{ field?.title }}
      <span
        v-show="field?.required"
        class="text-red-500 absolute top-0 -right-2"
        >*</span
      >
    </label>
    <keep-alive
      include="field"
      max="10"
    >
      <component
        v-bind:is="current"
        v-bind:field="field"
        @change="change"
      ></component>
    </keep-alive>
    <p
      v-show="field?.showError"
      class="text-red-400 text-sm absolute bottom-0 left-0"
    >
      {{ field?.error }}
    </p>
  </div>
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
