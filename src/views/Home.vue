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
  computed: {
    ...mapGetters(['selector']),
    sections(): Section[] {
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
    ...mapMutations(['onSelectUI', 'onDragChangePosition']),
    onSelect(position: Position, type: string) {
      this.onSelectUI({
        position,
        type
      })
    },
    onDragStart(type: string, position: Position) {
      this.dragItem = { type, position }
      console.log('dragItem ->', this.dragItem)
    },
    onDragEnter(type: string, position: Position) {
      // setTimeout(() => {
      //   this.dropItem = { type, position }
      //   console.log('dragItem enter ->', this.dragItem)
      // }, 1000)
    },
    onDrop(type: string, position: Position) {
      this.dropItem = { type, position }
      console.log('drop ->', this.dropItem)
      this.onDragChangePosition({
        dragOnItem: this.dragItem,
        dropEnterItem: this.dropItem
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
              @on-drag-enter="onDragEnter"
              @on-drag-over="onDragOver"
            >
              <Accordion
                v-for="(column, cid) in section.columns"
                v-bind:title="column.name"
                v-bind:cls="'ml-2 my-1'"
                v-bind:key="cid.toString()"
                v-bind:id="'column_' + sid + '_' + cid"
                v-bind:position="[sid, -1, -1, -1]"
              >
                <Accordion
                  v-for="(element, eid) in column.elements"
                  v-bind:title="element.name"
                  v-bind:cls="'ml-2 my-1'"
                  v-bind:key="eid.toString()"
                  @on-select="onSelect([sid, cid, eid, -1], 'element')"
                  v-bind:id="'column_' + sid + '_' + cid"
                  v-bind:position="[sid, -1, -1, -1]"
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
              v-bind:position="position(sid, cid, eid, -1)"
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
</style>
