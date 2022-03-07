<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Field } from '../../../typing/fields';

export default defineComponent({
    name: 'date-input',
    props: {
        field: {} as PropType<Field>
    },
})
</script>
<template>
    <input
        :key="field?.customHTMLAttributes.key"
        class="w-full text-left"
        type="date"
        :value="field?.value"
        :required="field?.customHTMLAttributes.required"
        :placeholder="field?.customHTMLAttributes.placeholder"
        :id="field?.customHTMLAttributes.id"
        :name="field?.customHTMLAttributes.name"
        @change="$emit('change')"
      />
</template>

<style>
.err-container {
    margin-bottom: 20px;

}
</style>