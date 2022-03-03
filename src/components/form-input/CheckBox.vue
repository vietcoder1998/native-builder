<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Field, FieldType } from '../../typing/fields';

export default defineComponent({
  name: 'checkbox-input',
  props: {
    field: {} as PropType<Field>
  },
  data() {}
})
</script>
<template>
  <div>
    <div v-for="(option, oid) in field?.options" :key="oid">
      <input
        type="checkbox"
        @change="$emit('change', option, name)"
        :name="String(oid)"
        :value="option"
      />
      <label :for="option">
        {{ option }}
      </label>
    </div>
  </div>
</template>

<style>
.err-container {
  margin-bottom: 20px;
}
</style>
