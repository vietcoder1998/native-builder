<script lang="ts">
import { defineComponent } from 'vue'
import DynamicElement from '../components/layout/DynamicElement.vue'
import Accordion from '../components/ui/Accordion.vue'
import Tab from '../components/ui/Tab.vue'
import Tabs from '../components/ui/Tabs.vue'
import SectionSelector from '../components/layout/SectionSelector.vue'
import ElementSelector from '../components/layout/ElementSelector.vue'
import { Section, ElementType, SelectorType, Position } from '../typing/index'
import { mapMutations } from 'vuex'
export default defineComponent({
  setup() {},
  name: 'home-page',
  components: {
    Tabs,
    Tab,
    Accordion,
    DynamicElement,
    SectionSelector,
    ElementSelector
  },
  data(): {
    selectPropertiesId: Position
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
      return (sid: number, cid: number, eid: number, fid: number) => [
        sid,
        cid,
        eid,
        fid
      ]
    },
    selector(): any {
      return this.$store.state.selector
    }
  },
  methods: {
    onSelect(position: Position, type: SelectorType | string) {
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
              v-bind:cls="'ml-2 my-1'"
              v-bind:key="sid.toString()"
            >
              <Accordion
                v-for="(column, cid) in section.columns"
                v-bind:title="column.name"
                v-bind:cls="'ml-2 my-1'"
                v-bind:key="cid.toString()"
              >
                <Accordion
                  v-for="(element, eid) in column.elements"
                  v-bind:title="element.name"
                  v-bind:cls="'ml-2 my-1'"
                  v-bind:key="eid.toString()"
                  @open="onSelect([sid, cid, eid, -1], 'element')"
                >
                  <Accordion
                    v-for="(field, fid) in element.fields"
                    v-bind:key="fid.toString()"
                    v-bind:title="field.type + fid.toString()"
                    v-bind:class="'w-full rounded text-left hover:bg-slate-300'"
                    v-bind:cls="'ml-2 my-1'"
                    @open="onSelect([sid, cid, eid, fid], 'element')"
                  >
                  </Accordion>
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
        :class="selector.position[0] === sid && 'selected'"
      >
        <div v-for="(column, cid) in section.columns" :key="cid">
          <div v-for="(element, eid) in column.elements" :key="eid">
            <DynamicElement
              v-bind:position="position(sid, cid, eid, fid)"
              v-bind:type="element.type"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="w-250 p-2 bg-white ml-2">
      <button>{{ selector?.type }}</button>
      <hr />
      <SelectSelector />
      <ElementSelector />
    </div>
  </div>
</template>

<style>
.selected {
  border: solid blue 1px;
}
</style>
