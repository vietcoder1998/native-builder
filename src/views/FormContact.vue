<script lang="ts">
import { defineComponent, defineProps } from 'vue'
import FormContact from '../components/form-contact/FormContact.vue'

export default defineComponent({
  name: 'form-contact',
  components: {
    FormContact
  }
})
</script>
<template>
  <FormContact />
</template>

<style scoped></style>
