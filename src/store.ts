import { ElementType, SelectorType } from './typing/home'
// store.ts
import { InjectionKey, StyleHTMLAttributes } from 'vue'
import { createStore } from 'vuex'
import { State } from './typing/store'
import { Field } from './typing/fields'
import { Store } from 'vuex'
import { BeaeCollection } from './typing/beae-element'
import collections from './data/collections'
import formContact from './data/form-contact'
import gallery from './data/gallery'
import slide from './data/slide'

// define your typings for the store state

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    selector: {
      type: null,
      value: {},
      position: [-1, -1, -1, -1]
    },
    sections: [
      {
        name: 'section1',
        gap: 3,
        quantity: 4,
        total: 12,
        columns: [
          {
            name: 'column1',
            elements: [
              {
                name: 'gallery',
                type: ElementType.gallery,
                fields: gallery,
                options: {
                  // foo: [value, type, options]
                  gap: [1, 'number'],
                  column: [1, 'number'],
                  type: [
                    ElementType.gallery,
                    'select',
                    ['gallery', 'slide', 'form']
                  ]
                }
              }
            ]
          }
        ]
      },
      {
        name: 'section2',
        columns: [
          {
            name: 'column1',
            gap: 3,
            quantity: 4,
            elements: [
              {
                name: 'form',
                type: ElementType.form,
                fields: formContact,
                gap: 1,
                column: 4
              }
            ]
          }
        ]
      },
      {
        name: 'section3',
        columns: [
          {
            name: 'column1',
            elements: [
              {
                name: 'slide',
                type: ElementType.slide,
                fields: slide,
                gap: 1,
                column: 4,
                options: {
                  pagination: 'on',
                  navigation: 'on',
                  itemsNumber: 3
                }
              }
            ]
          }
        ]
      }
    ]
  },
  mutations: {
    setValue(
      state: State,
      { vl, keys }: { vl: any | State; keys: (keyof State)[] }
    ) {
      console.log(vl, keys)
      if (!keys) {
        state = vl
      } else {
        state = setValueFromMultipleKey(keys, state, vl)
      }
    },
    pushFieldContact(state: State, item: Field) {
      state.formContact.fields.push(item)
    },
    changeItemsNumber(state: State, itemsNumber: number) {
      state.slidePage.itemsNumber = itemsNumber
    },
    changeNavigation(state: State, navigation: string) {
      state.slidePage.navigation = navigation
    },
    changePagination(state: State, pagination: string) {
      state.slidePage.pagination = pagination
    },
    changeSlideSrc(state: State, { id, vl }: { id: number; vl: string }) {
      console.log('change src', id, vl)
      state.slidePage.slides[id].src = vl
    },
    changeSlideText(state: State, { id, vl }: { id: number; vl: string }) {
      state.slidePage.slides[id].text = vl
    },
    pushCollection(state: State, collection: BeaeCollection) {
      console.groupCollapsed(collection)
      state.collections.items.push(collection)
    },
    addSection(state: State) {
      const section: Sections = {}
      state.sections.push(section)
    },
    removeSection(state: State, id: number) {},
    onSelectUI(
      state: State,
      {
        type,
        position
      }: { type: SelectorType; position: [number, number, number, number] }
    ) {
      let value = {}
      switch (type) {
        case 'section':
          value = state.sections[position[0]]

          break
        case 'column':
          value = state.sections[position[0]].columns[position[1]]

          break
        case 'element':
          value =
            state.sections[position[0]].columns[position[1]].elements[
              position[2]
            ]
          break
        case 'field':
          state.selector.value =
            state.sections[position[0]].columns[position[1]].elements[
              position[2]
            ].fields[position[2]]
          break

        default:
          break
      }

      state.selector = {
        type,
        value,
        position
      }
    }
  },
  getters: {
    // get value of fields in store
    element:
      (state) =>
      ({ sid, cid, eid }) =>
        state.sections[sid].columns[cid].elements[eid],
    column:
      (state) =>
      ({ sid, cid }) =>
        state.sections[sid].columns[cid],
    section:
      (state) =>
      ({ sid }) =>
        state.sections[sid],
    field:
      (state) =>
      ({ sid, cid, eid, fid }) =>
        state.sections[sid].columns[cid].elements[eid].fields[fid],
    selector: (state) => state.selector
  }
})

function setValueFromMultipleKey(
  keys: (keyof typeof ob)[],
  ob: State,
  value: unknown
) {
  try {
    var temp = ob
    let len = keys.length
    for (let i = 0; i < len - 1; i++) {
      const key = keys[i]
      if (!temp[key]) {
        console.log('no key')
      } else {
        //@ts-check
        temp = temp[key]
      }
    }
    //@ts-ignore
    temp[keys[len - 1]] = value
    return ob
  } catch (error) {
    console.log('error in temp')
  }
}
