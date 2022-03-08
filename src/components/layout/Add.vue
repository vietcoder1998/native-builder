<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
  setup() {
    const formAdd = ref(0)
  },
  name: 'add',
  props: {
    field: {} as PropType<
      Record<string, { name: string; type: string; value: any }>
    >
  },
  data(): {
    collection: Record<string, { name: string; type: string; value: any }>
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
  <div class="ml-4">
    <button v-show="!open" class="p-2 border" @click="open = !open">
      + Add
    </button>
    <form v-show="open" ref="formAdd" @submit.prevent="submitForm">
      <div v-for="(vl, id) in collection">
        <label for="id">
          {{ vl.name }}
        </label>
        <input
          key="id"
          class="w-full"
          :placeholder="vl.name"
          v-model="vl.value"
          :key="id"
          :name="vl.name"
        />
      </div>
      <button @click="open = !open" class="ml-5 p-2 border">Cancel</button>
      <button type="submit" class="ml-5 p-2 border">Submit</button>
    </form>
  </div>
</template>
