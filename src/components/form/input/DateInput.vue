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
        :key="field?.key"
        class="w-full text-left"
        type="date"
        :value="field?.value"
        :required="field?.required"
        :placeholder="field?.placeholder"
        :id="field?.id"
        :name="field?.name"
        @change="$emit('change')"
      />
</template>

<style>
.err-container {
    margin-bottom: 20px;

}
</style>