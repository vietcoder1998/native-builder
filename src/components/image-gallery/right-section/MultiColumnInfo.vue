<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { FieldName } from '../../../typing/fields'
import { GalleryItem } from '../../../typing/gallery'
import Add from '../../layout/Add.vue'

export default defineComponent({
  name: 'multi-column-info',
  computed: {
    len() {
      return this.$store.state.gallery.items.length
    },
    gap() {
      return this.$store.state.gallery.gap
    },
    column() {
      return this.$store.state.gallery.column
    },
    textField(): FieldName {
      return FieldName.text
    },
    radioField(): FieldName {
      return FieldName.radio
    }
  },
  components: {
    Add
  },
  methods: {
    column(): number {
      return this.$store.state.gallery.columns
    },
    setColumnValue(e: Event): void {
      this.$store.commit('setValue', {
        vl: (e.target as HTMLInputElement).value,
        keys: ['gallery', 'column']
      })
    },
    setGapValue(e: Event): void {
      this.$store.commit('setValue', {
        vl: (e.target as HTMLInputElement).value,
        keys: ['gallery', 'gap']
      })
    },
    onSubmitInfo(field: GalleryItem) {
      this.$store.commit('pushFieldContact', field)
    }
  }
})
</script>

<template>
  <div>
    <h2 class="text-bold">Multicolumn</h2>
    <label>Column</label>
    <input
      id="gap"
      type="number"
      class="w-full"
      @input="setColumnValue"
      v-bind:value="column"
      min="1"
      :max="len"
    />
    <p>
      <label>Gap</label>
    </p>
    <input
      id="columns"
      type="number"
      v-bind:value="gap"
      class="w-full"
      min="0"
      :max="len"
      @input="setGapValue"
    />
    <Add
      v-bind:field="{
        title: { name: 'title', type: textField, value: null },
        src: { name: 'src', type: textField, value: null },
        thumbnail: { name: 'thumbnail', type: textField, value: null }
      }"
      @on-submit-info="onSubmitInfo"
    ></Add>
  </div>
</template>
<style></style>
