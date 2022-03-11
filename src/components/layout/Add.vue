<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { FieldName } from '../../typing/fields'
import DynamicInput from '../form/input/DynamicInput.vue'

type FieldProps = Record<
  string,
  {
    name: string
    type: FieldName
    value: any
  }
>

export default defineComponent({
  name: 'add',
  setup() {
    const formAdd = ref(0)
  },
  components: {
    DynamicInput
  },
  props: {
    field: {} as PropType<FieldProps>,
    len: Number
  },
  data(): {
    collection: FieldProps
    open: boolean
  } {
    return {
      collection: this.field ? this.field : {},
      open: false
    }
  },
  methods: {
    submitForm() {
      this.$emit(
        'on-submit-info',
        Object.fromEntries(
          Object.entries(this.collection).map(([key, item]) => [
            key,
            item.value
          ])
        )
      )
      this.open = false
    }
  }
})
</script>
<template>
  <div class="mt-2">
    <button v-show="!open" class="p-2 border" @click="open = !open">
      + Add
    </button>
    <form v-show="open" ref="formAdd" @submit.prevent="submitForm">
      <!-- <div v-for="(vl, id) in collection">
        <DynamicInput
          v-bind:field="{
            title: vl?.name,
            index: Number(id),
            type: vl.type,
            customHTMLAttributes: {
              name: vl.name
            }
          }"
        />
      </div> -->
      <button @click="open = !open" class="ml-5 p-2 border">Cancel</button>
      <button type="submit" class="ml-5 p-2 border">Submit</button>
    </form>
  </div>
</template>
