<script lang="ts">
import { defineComponent, defineProps } from "vue";
import { Field } from "../typing/fields";


type FormValidate = {

}

defineProps({
  props: {},
});


export default defineComponent({
  name: "formcontact-view",
  components: {},
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
          options: ["The title 1", "The title 2"],
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
      ] as Field[],
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
      <label :for="field.name" class="w-full relative">
        {{ field.title }}
        <span v-show="field.required" class="text-red-500 absolute top-0 -right-2"
          >*</span
        >
      </label>
      <input
        class="w-full text-left"
        v-if="
          field.type !== 'checkbox' &&
          field.type !== 'radio' &&
          field.type !== 'dropdown' &&
          field.type !== 'textarea'
        "
        :type="field.type"
        v-model="field.value"
        :key="field.type + '_' + id"
        v-bind:required="field.required"
        :placeholder="field.placeholder"
        :id="String(id)"
        :name="field.name"
      />
      <select
        v-else-if="field.type === 'dropdown'"
        v-bind:value="field.value"
        class="w-full p-3 border"
        :name="field.name"
      >
        <option
          v-for="(option, oid) in field"
          :key="oid"
          v-bind:value="option"
          :for="field.name"
        >
          {{ option }}
        </option>
      </select>
      <div
        v-else-if="field.type === 'checkbox'"
        v-for="(options, oid) in field.options"
        :key="options + oid"
      >
        <input :type="field.type" :id="options + oid" :name="options" />
        <label :id="options + oid">
          {{ options }}
        </label>
      </div>
      <div
        v-show="field.type === 'radio'"
        v-for="(options, oid) in field.options"
        :key="options + oid"
      >
        <input :type="field.type" :id="options + oid" :name="field.name" />
        <label :id="options + oid" :for="field.name">
          {{ options }}
        </label>
      </div>
      <textarea
        v-show="field.type === 'textarea'"
        rows="3"
        class="border rounded w-full"
        :placeholder="field.placeholder"
      ></textarea>
    </div>
    <button type="submit" class="border w-20 h-14 bg-blue-500 text-blue-50">
      Submit
    </button>
  </form>
</template>

<style scoped></style>
