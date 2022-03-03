<script lang="ts">
import Vue, { defineComponent, defineProps } from 'vue'

defineProps({
    showError: Boolean,
    errorMessage: String,
})
</script>

<template>
    <div class="err-container">
        
    </div>
</template>

<style>
.err-container {
    margin-bottom: 20px;

}
</style>