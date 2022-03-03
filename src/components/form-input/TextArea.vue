<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'text-input',
    props: {
        value: String,
        key: String,
        required: Boolean,
        placeholder: String,
        name: String,
        id: String,
    }
})
</script>
<template>
    <textarea
        class="w-full text-left border"
        type="text"
        v-model="value"
        :key="key"
        :required="required"
        :placeholder="placeholder"
        :id="id"
        :name="name"
        rows="3"
        v-on:change="$emit('change')"
      >
      </textarea>
</template>

<style>
.err-container {
    margin-bottom: 20px;

}
</style>