<script lang="ts">
import { defineComponent } from 'vue'
import DynamicElement from '../components/layout/DynamicElement.vue'
import Accordion from '../components/ui/Accordion.vue'
import Tab from '../components/ui/Tab.vue'
import Tabs from '../components/ui/Tabs.vue'
import SectionUI from '../components/layout/SectionUI.vue'
import ElementUI from '../components/layout/ElementUI.vue'
import { Section, ElementType, SelectorType } from '../typing/home'
import { mapMutations } from 'vuex'
export default defineComponent({
  setup() {},
  name: 'home-page',
  components: {
    Tabs,
    Tab,
    Accordion,
    DynamicElement,
    SectionUI,
    ElementUI
  },
  data(): {
    selectPropertiesId: [number, number, number, number]
  } {
    return {
      selectPropertiesId: [-1, -1, -1, -1]
    }
  },
  computed: {
    sections(): Section<any>[] {
      return this.$store.state.sections
    },
    position() {
      return (sid: number, cid: number, eid: number) => [sid, cid, eid]
    },
    selector(): any {
      console.log(this.$store.state.selector)
      return this.$store.state.selector
    }
  },
  methods: {
    onSelect(
      position: [number, number, number, number],
      type: SelectorType | string
    ) {
      console.log('ok', position, type)
      this.$store.commit('onSelectUI', { position, type })
    },
    ...mapMutations(['onSelectUI'])
  }
})
</script>
<template>
  <div class="flex p-2 bg-slate-100">
    <div class="w-250 bg-white">
      <Tabs>
        <Tab title="Navigator">
          <div class="p-3">
            <Accordion
              v-for="(section, sid) in sections"
              v-bind:title="section.name"
              v-bind:key="sid"
            >
              <Accordion
                v-for="(column, cid) in section.columns"
                v-bind:title="column.name"
                v-bind:key="cid"
              >
                <Accordion
                  v-for="(element, eid) in column.elements"
                  v-bind:title="element.name"
                  @open="onSelect([sid, cid, eid, -1], 'element')"
                  v-bind:key="eid"
                >
                  <div
                    v-for="(field, fid) in element.fields"
                    v-bind:title="element.name"
                    :key="fid"
                  >
                    {{ field.type }}
                  </div>
                </Accordion>
              </Accordion>
            </Accordion>
          </div>
        </Tab>
        <Tab title="Element">Element</Tab>
      </Tabs>
    </div>
    <div class="content bg-white mb-2">
      <div
        v-for="(section, sid) in sections"
        :key="sid"
        @click="onSelect([sid, -1, -1, -1], 'section')"
        :class="sid === selectPropertiesId[0] && 'selected'"
      >
        <div v-for="(column, cid) in section.columns" :key="cid">
          <div v-for="(element, eid) in column.elements" :key="eid">
            <DynamicElement
              v-bind:position="position(sid, cid, eid)"
              v-bind:type="element.type"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="w-250 p-2 bg-white ml-2">
      <button>{{ selector?.type }}</button>
      <SectionUI />
      <ElementUI />
    </div>
  </div>
</template>

<style>
.selected {
  border: solid blue 1px;
}
</style>
