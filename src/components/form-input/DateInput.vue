<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'date-input',
    props: {
        value: String,
        key: String,
        required: Boolean,
        placeholder: String,
        name: String,
        id: String,
    },
})
</script>
<template>
    <input
        class="w-full text-left"
        type="date"
        v-model="value"
        :key="key"
        :required="required"
        :placeholder="placeholder"
        :id="id"
        :name="name"
        @change="$emit('change')"
      />
</template>

<style>
.err-container {
    margin-bottom: 20px;

}
</style>