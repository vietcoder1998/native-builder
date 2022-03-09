<script lang="ts">
import { defineComponent, PropType } from 'vue'
import TextInput from '../form/input/TextInput.vue'

export default defineComponent({
  setup() {},
  props: {
    fields: Array as PropType<String[]>,
    initSelected: String,
    initSearchKey: String,
    title: String
  },
  data() {
    return {
      selected: this.initSelected,
      searchkey: this.initSearchKey
    }
  },
  computed: {
    filterKey(): String[] {
      return this.searchkey
        ? this.fields.filter((item) => item.includes(this.searchkey))
        : this.fields
    }
  },
  methods: {
    onSelect(key: String)  {
      this.selected = String(key)
      this.$emit('on-select', key)
    }
  }
})
</script>

<template>
  <div class="p-2">
    <div>
      {{ title }}
    </div>
    <input
      v-model="searchkey"
      class="w-full "
      type="search"
      placeholder="Search..."
    />
    <div>
      <div v-for="item in filterKey" :key="item" class="p-2">
        <button
          :class="selected === item ? 'bg-blue-200 p-1 rounded' : 'p-1'"
          @click="onSelect(item)"
        >
          {{ item }} >>
        </button>
      </div>
    </div>
  </div>
</template>
