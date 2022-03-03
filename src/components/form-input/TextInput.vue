<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Field } from '../../typing/fields'

export default defineComponent({
  name: 'text-input',
  props: {
    field: {} as PropType<Field>
  }
})
</script>
<template>
  <input
    class="w-full text-left"
    type="text"
    :value="field?.value"
    :required="field?.required"
    :placeholder="field?.placeholder"
    :id="field?.id"
    :name="field?.name"
    :aria-describedby="field?.description"
    @change="$emit('change')"
  />
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
