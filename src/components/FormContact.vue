<script lang="ts">
import { defineComponent, defineProps } from "vue";
import { Field } from "../typing/fields";
import ValidateField from "./form-input/ValidateField.vue";

export default defineComponent({
  name: "form-contact-view",
  components: { ValidateField },
  data() {
    return {
      fields: [
        {
          title: "Your name",
          type: "text",
          width: 120,
          required: true,
          placeholder: "must longer than 8",
          description: "please add your name",
        },
        {
          title: "Your Email",
          type: "text",
          width: 120,
          required: true,
          placeholder: "must longer than 8",
          description: "please add your name",
        },
        {
          title: "Time",
          type: "date",
          width: 120,
          required: true,
          placeholder: "must longer than 8",
          description: "please add your name",
        },
        {
          title: "Select",
          type: "dropdown",
          width: 120,
          required: true,
          placeholder: "must longer than 8",
          description: "please add your name",
          name: "Select",
          options: ["The title 1", "The title 2"] as String[],
        },
        {
          title: "Checkbox",
          type: "checkbox",
          width: 120,
          required: true,
          placeholder: "must longer than 8",
          description: "please add your name",
          options: ["The title 1", "The title 2"],
        },
        {
          title: "Radio",
          type: "radio",
          width: 120,
          required: true,
          placeholder: "must longer than 8",
          description: "please add your name",
          options: ["The title 1", "The title 2"],
          name: "radio",
        },
        {
          title: "Your message",
          type: "textarea",
          width: 120,
          required: true,
          placeholder: "must longer than 8",
          description: "please add your name",
        },
      ],
      validates: {} as { [key: string]: boolean },
    };
  },
  methods: {
    validateFormat: function() {

    }
  },
});
</script>
<template>
  <form class="grid grid-cols-2 gap-4 mx-3">
    <div v-for="(field, id) in fields" :key="id" class="relative">
      <validate-field
        v-bind:description="field.description"
        v-bind:name="field.name"
        v-bind:options="field.options"
        v-bind:required="field.required"
        v-bind:error-message="'Lỗi không xác định'"
        v-bind:title="field.title"
        v-bind:key="id"
        v-bind:placeholder="field.placeholder"
      ></validate-field>
    </div>
    <button type="submit" class="border w-20 h-14 bg-blue-500 text-blue-50">
      Submit
    </button>
  </form>
</template>

<style scoped></style>
