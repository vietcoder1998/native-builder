<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import DynamicElement from '../components/layout/DynamicElement.vue'
import SelectorInfo from '../components/layout/SelectorInfo.vue'
import Accordion from '../components/ui/Accordion.vue'
import Item from '../components/ui/Item.vue'
import List from '../components/ui/List.vue'
import Tab from '../components/ui/Tab.vue'
import Tabs from '../components/ui/Tabs.vue'
import { Position, Section, SelectorType } from '../typing/index'

export default defineComponent({
  setup() {},
  name: 'home-page',
  components: {
    Tabs,
    Tab,
    Accordion,
    DynamicElement,
    SelectorInfo,
    List,
    Item
  },
  data() {
    return {
      selectPropertiesId: [-1, -1, -1, -1],
      dragItem: {
        type: '',
        position: [-1, -1, -1, -1]
      },
      dropItem: {
        type: '',
        position: [-1, -1, -1, -1]
      }
    }
  },
  watch: {
    sections: {
      handler() {
        console.log('sections change')
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters(['selector']),
    sections(): Section[] {
      return this.$store.state.sections
    },
    itemNavigatorClass() {
      return (position: Position) =>
        position === this.selector.position
          ? ' bg-blue-300 '
          : ' error ' +
            'rounded text-left hover:bg-slate-300 p-1 mt-1 ml-2 w-full '
    },
    selectorPosition(): string {
      //@ts-ingore
      return (
        this.selector.type +
        this.selector.position.reduce(
          (rs: string, item: string) => rs + '_' + item
        )
      )
    }
  },
  methods: {
    ...mapMutations(['onSelectUI', 'onDragChangePosition', 'addSection']),
    onSelect(position: Position, type: string) {
      this.onSelectUI({
        position,
        type
      })
    },
    onDragStart(type: string, position: Position) {
      this.dragItem = { type, position }
      console.log('dragItem ->', { type, position })
    },
    onDrop(type: string, position: Position) {
      this.dropItem = { type, position }
      console.log('drop ->', type, position)
      this.onDragChangePosition({
        dragOnItem: this.dragItem,
        dropEnterItem: { type, position }
      })
    },
    onDragOver() {
      console.log('yes, it`s over')
    }
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
              v-bind:id="'section_' + sid"
              v-bind:position="[sid, -1, -1, -1]"
              v-bind:type="'section'"
              @on-drag-start="onDragStart"
              @on-drop="onDrop"
            >
              <Accordion
                v-for="(col, cid) in section.columns"
                v-bind:title="col.name"
                v-bind:cls="'ml-2 my-1'"
                v-bind:key="cid.toString()"
                v-bind:id="'column_' + sid + '_' + cid"
                v-bind:position="[sid, -1, -1, -1]"
                v-bind:type="'column'"
                @on-drag-start="onDragStart"
                @on-drop="onDrop"
              >
                <Accordion
                  v-for="(element, eid) in col.elements"
                  v-bind:title="element.name"
                  v-bind:cls="'ml-2 my-1'"
                  v-bind:key="eid.toString()"
                  @on-select="onSelect([sid, cid, eid, -1], 'element')"
                  v-bind:id="'column_' + sid + '_' + cid"
                  v-bind:position="[sid, -1, -1, -1]"
                  v-bind:type="'element'"
                  @on-drag-start="onDragStart"
                  @on-drop="onDrop"
                >
                  <Item
                    v-for="(field, fid) in element.fields"
                    v-bind:itemClass="itemNavigatorClass([sid, cid, eid, fid])"
                    v-bind:item="field"
                    v-bind:label="field?.tag"
                    v-bind:position="[sid, cid, eid, fid]"
                    v-bind:key="sid + cid + eid + fid"
                    @click="onSelect([sid, cid, eid, fid], 'field')"
                  >
                  </Item>
                  <button class="append-el" @click="addSection">
                    + Add Item
                  </button>
                </Accordion>
                <button class="append-el" @click="addSection">
                  + Add Element
                </button>
              </Accordion>
              <button class="append-el" @click="addSection">
                + Add Column
              </button>
            </Accordion>
            <button class="append-el" @click="addSection">+ Add section</button>
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
        <div v-for="(col, cid) in section.columns" :key="cid">
          <div v-for="(element, eid) in col.elements" :key="eid">
            <DynamicElement
              v-bind:position="[sid, cid, eid, -1]"
              v-bind:type="element.type"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="w-250 p-2 bg-white ml-2">
      <button>{{ selectorPosition }}</button>
      <hr />
      <SelectorInfo />
    </div>
  </div>
</template>

<style>
.selected {
  border: solid blue 1px;
}
.append-el {
  border: solid gray 1px;
  border-radius: 5px;
  padding: 3px;
}
</style>
