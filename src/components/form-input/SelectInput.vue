<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        value: String,
        name: String,
        options: [],
    }

})


</script>

<template>
    <select
        :value="value"
        class="w-full p-3 border"
        :name="name"
        v-on:change="$emit('change')"
      >
        <option
          v-for="(option, oid) in options"
          :key="oid"
          v-bind:value="option"
          :for="name"
        >
          {{ option }}
        </option>
      </select>
</template>
