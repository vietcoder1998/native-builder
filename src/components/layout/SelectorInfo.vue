<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import ulti from '../../mixin/ulti'
import { Option, OptionType } from '../../typing/index'
import Accordion from '../ui/Accordion.vue'
import TextArea from '../ui/input/TextArea.vue'
import TextInput from '../ui/input/TextInput.vue'

export default defineComponent({
  name: 'selector-info',
  components: { Accordion, TextInput, TextArea },
  computed: {
    ...mapGetters(['selector']),
    optionLabels(): [string, Option][] {
      return Object.entries(this.selector.options)
    },
    options() {
      return this.selector.options
    }
  },
  mixins: [ulti],
  methods: {
    ...mapMutations(['onUpdateSelector']),
    onSaveOption() {
      // transform Form into Array<{[name, option]: value }>  => { [key: OptionType] : [value, tag, type, options[]]}
      console.log(this.selector)
      const nOptions: Record<OptionType, Option> = this.selector.options
      Array.from(
        //@ts-ignore
        this.$refs?.selectorRef?.getElementsByTagName(
          'input'
        ) as HTMLInputElement[],
        // Array.from(x, item => function)// that is item of x like for (int i = 0,i < x.lengtg, i++); item = x[o])
        (item: HTMLInputElement) => {
          const options: Option = this.selector.options[item.name]
          Object.assign(nOptions, {
            [item?.name]: [item?.value, options[1], options[2], options[3]]
          })
        }
      )
      console.log(nOptions)

      this.onUpdateSelector({ nOptions })
      alert('Alert success')
    }
  }
})
</script>
<template>
  <div>
    <div v-show="selector.position[1] !== -1">
      <form ref="selectorRef" @submit.prevent="onSaveOption">
        <div v-for="(option, key) in optionLabels" v-bind:key="key">
          <label>{{ option[0] }}</label>
          <input
            class="w-full"
            v-bind:type="option[1][2] || 'text'"
            v-bind:value="option[1][0]"
            v-bind:id="'element-selector' + key"
            v-bind:name="option[0]"
          />
        </div>
        <div v-if="selector.customHTMLAttributes">
          <label> customHTMLAttributes </label>
          <textarea
            class="w-full border"
            rows="8"
            v-bind:value="convertJSONtoString(selector?.customHTMLAttributes)"
          >
          </textarea>
        </div>
        <div class="text-right">
          <button class="bg-red-200 rounded p-2 mr-2">Cancel</button>
          <button class="bg-blue-400 rounded p-2" type="submit">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>
