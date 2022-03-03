<script lang="ts">
import { defineComponent, defineProps, ref } from "vue";
import { Field } from "../typing/fields";
import ValidateField from "./form-input/ValidateField.vue";

const form1 = ref("#form-1")
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
          name: "name",
          value: null,
        },
        {
          title: "Your Email",
          type: "text",
          width: 120,
          required: true,
          placeholder: "must longer than 8",
          description: "please add your name",
          name: "mail",
          value: null,
        },
        {
          title: "Time",
          type: "date",
          width: 120,
          required: true,
          placeholder: "must longer than 8",
          description: "please add your name",
          name: "select",
          value: null,
        },
        {
          title: "Select",
          type: "dropdown",
          width: 120,
          required: true,
          placeholder: "must longer than 8",
          description: "please add your name",
          name: "select",
          options: ["The title 1", "The title 2"] as String[],
          value: null,
        },
        {
          title: "Checkbox",
          type: "checkbox",
          width: 120,
          required: true,
          placeholder: "must longer than 8",
          description: "please add your name",
          options: ["The title 1", "The title 2"],
          name: "check-box",
          value: null,
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
          value: null,
        },
        {
          title: "Your message",
          type: "textarea",
          width: 120,
          required: true,
          placeholder: "must longer than 8",
          description: "please add your name",
          name: "msg",
          value: null,
        },
      ] as Field[],
      validates: {}
    };
  },
  methods: {
    validateFormat: function() {
      console.log(form1)
    }
  },
});

</script>
<template>
  <form id="form-1" class="grid grid-cols-2 gap-4 mx-3" @submit.prevent="validateFormat">
    <div v-for="(field, id) in fields" :key="id" class="relative">
      <validate-field
        v-bind:key="id"
        v-bind:description="field.description"
        v-bind:name="field.name"
        v-bind:options="field.options"
        v-bind:required="field.required"
        v-bind:error-message="'Lỗi không xác định'"
        v-bind:title="field.title"
        v-bind:type="field.type"
        v-bind:placeholder="field.placeholder"
      ></validate-field>
    </div>
    <button type="submit" class="border w-20 h-14 bg-blue-500 text-blue-50">
      Submit
    </button>
  </form>
</template>

<style scoped></style>
