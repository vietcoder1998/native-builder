<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Field } from '../../../typing/fields';

export default defineComponent({
    name: 'text-input',
    props: {
       field: {} as PropType<Field>
    },
    emits: ['change']
})
</script>
<template>
    <textarea
        class="w-full text-left border"
        type="text"
        v-model="field.value"
        :key="field?.customHTMLAttributes.key"
        :placeholder="field?.customHTMLAttributes.placeholder"
        :id="field?.customHTMLAttributes.id"
        :name="field?.customHTMLAttributes.name"
        rows="3"
        :required="field?.customHTMLAttributes.required"
         @input="$emit('change')"
      >
      </textarea>
</template>

<style>
.err-container {
    margin-bottom: 20px;

}
</style>