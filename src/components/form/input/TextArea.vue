<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Field } from '../../../typing/fields';

export default defineComponent({
    name: 'text-input',
    props: {
       field: {} as PropType<Field>
    }
})
</script>
<template>
    <textarea
        class="w-full text-left border"
        type="text"
        :value="field?.value"
        :key="field?.customHTMLAttributes.key"
        :placeholder="field?.customHTMLAttributes.placeholder"
        :id="field?.customHTMLAttributes.id"
        :name="field?.customHTMLAttributes.name"
        rows="3"
        v-on:change="$emit('change')"
        :required="field?.customHTMLAttributes.required"
      >
      </textarea>
</template>

<style>
.err-container {
    margin-bottom: 20px;

}
</style>