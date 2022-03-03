<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { FieldName } from '../../typing/fields'
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
  props: {
    title: String,
    type: String,
    width: Number,
    required: Boolean,
    placeholder: String,
    description: String,
    showError: Boolean,
    errorMessage: String,
    name: String,
    options: [] 
  },
  data() {
    return {
      current: TextInputVue
    }
  },
  methods: {
    change(e: any) {
      console.log(e)
    }
  },

  // called on init
  //
  activated() {
    console.log('hello world')
  },

  // switch component
  mounted() {
    switch (this.$props.type) {
      case FieldName.text:
        this.$data.current = TextInputVue

        break

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

      default:
        break
    }
  }
})
</script>

<template>
  <div class="validate form">
     <label :for="name" class="w-full relative">
        {{ title }}
        <span v-show="required" class="text-red-500 absolute top-0 -right-2"
          >*</span
        >
      </label>
    <keep-alive v-on:change="change">
      <component :is="current" @change="change"></component>
    </keep-alive>
    <p class="text-red-400 text-sm">Lỗi ở đây</p>
  </div>
</template>

<style>
.err-container {
  margin-bottom: 20px;
}

.err-detail {

}
</style>
