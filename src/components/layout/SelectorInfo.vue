<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import ulti from '../../mixin/ulti'
import { Option, OptionType } from '../../typing/index'
import Accordion from '../ui/Accordion.vue'
import TextArea from '../ui/input/TextArea.vue'
import TextInput from '../ui/input/TextInput.vue'
import DynamicInput from '../ui/input/DynamicInput.vue'

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
      const options: Record<OptionType, Option> = this.selector.options
      Array.from(
        //@ts-ignore
        this.$refs?.selectorRef?.getElementsByTagName(
          'input'
        ) as HTMLInputElement[],
        // Array.from(x, item => function)// that is item of x like for (int i = 0,i < x.lengtg, i++); item = x[o])
        (item: HTMLInputElement) => {
          console.log(item.name, item.value)
          const nOptions: Option = this.selector.options[item.name]
          Object.assign(options, {
            [item?.name]: [item?.value, nOptions[1], nOptions[2], nOptions[3]]
          })
        }
      )
      console.log(options)

      this.onUpdateSelector({ options })
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
          <DynamicInput
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
