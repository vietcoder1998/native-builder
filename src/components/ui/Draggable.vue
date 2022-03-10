<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        items: Array,
    }
})
</script>

<template>
    <div class="draggable">
        <div draggable="true">
            <div></div>
        </div>
    </div>
</template>
