<script lang="ts">
import { defineComponent } from 'vue'
import FormContact from './../components/form-contact/FormContact.vue'
import Gallery from './../components/image-gallery/ImageGallery.vue'
import SlidePage from './../components/slides/Slides.vue'
import Tabs from '../components/ui/Tabs.vue'
import Tab from '../components/ui/Tab.vue'
import Accordion from '../components/ui/Accordion.vue'
import { Section } from '../typing/home'

export default defineComponent({
  setup() {},
  name: 'home-page',
  components: {
    FormContact,
    Gallery,
    SlidePage,
    Tabs,
    Tab,
    Accordion
  },
  data(): { sections: Section[] } {
    return {
      sections: [
        {
          name: 'Section1',
          id: '1',
          columns: [
            {
              name: 'Column1',
              elements: [
                {
                  name: 'abc',
                  type: 'test'
                }
              ]
            }
          ]
        },
        {
          name: 'Section2',
          id: '2',
          columns: [
            {
              name: 'Column1',
              elements: [
                {
                  name: 'abc',
                  type: 'test'
                }
              ]
            },
            {
              name: 'Column2',
              elements: [
                {
                  name: 'abc',
                  type: 'test'
                }
              ]
            }
          ]
        },
        {
          name: 'Section3',
          id: '3',
          columns: [
            {
              name: 'Column1',
              elements: [
                {
                  name: 'abc',
                  type: 'test'
                }
              ]
            },
            {
              name: 'Column2',
              elements: [
                {
                  name: 'abc',
                  type: 'test'
                }
              ]
            }
          ]
        }
      ]
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
              :key="sid"
            >
              <Accordion
                v-for="(columns, cid) in section"
                v-bind:title="columns.name"
                :key="cid"
              >
              ASS
              </Accordion>
            </Accordion>
          </div>
        </Tab>
        <Tab title="Element">Element</Tab>
      </Tabs>
    </div>
    <div>
      <div class="bg-white">
        <Gallery></Gallery>
        <FormContact></FormContact>
        <SlidePage></SlidePage>
      </div>
    </div>
  </div>
  <div class="w-250 p-2">
    <!-- <MultiColumnInfo v-show="!selected" />
    <div v-show="selected">
      <SingleColumnInfoVue
        :items="imageFlexing[selected]"
        :title="'Column' + selected"
      />
    </div> -->
  </div>
</template>
