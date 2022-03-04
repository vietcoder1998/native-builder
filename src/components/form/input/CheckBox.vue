<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Field } from '../../../typing/fields';

export default defineComponent({
  name: 'checkbox-input',
  props: {
    field: {} as PropType<Field>
  },
  data() {
    check: this.$props.field?.required
  },
})
</script>
<template>
  <div class="form-group" required>
    <div v-for="(option, oid) in field?.options" :key="oid">
      <input
        type="checkbox"
        :name="field?.name"
        :value="option"
        :id="field?.name + option"
        @change="$emit('change', option, name)"
      />
      <label :for="field?.name + option">
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
