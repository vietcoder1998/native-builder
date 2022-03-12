import { ElementType } from './typing/home'
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
                gap: 1,
                column: 3
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
                  pagination: true,
                  navigation: true,
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
    }
  },
  getters: {
    // get value of fields in store
    element:
      (state) =>
      ({ sid, cid, eid }) => {
        console.log(sid, cid, eid)
        return state.sections[sid].columns[cid].elements[eid]
      }
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
