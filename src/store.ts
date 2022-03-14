// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import  formContact from './data/form-contact'
import gallery from './data/gallery'
import slide from './data/slide'
import { ElementType, Option, Position, SelectorType } from './typing/index'
import { State } from './typing/store'

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
        options: {
          gap: [1, 'number'],
          column: [1, 'number']
        },
        columns: [
          {
            name: 'column1',
            options: {
              quantity: [1, 'number']
            },
            elements: [
              {
                name: 'gallery',
                type: ElementType.gallery,
                fields: gallery,
                // options define
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
            options: {
              gap: [1, 'number'],
              quantity: [1, 'number']
            },
            elements: [
              {
                name: 'form',
                options: {
                  type: [
                    ElementType.form,
                    'select',
                    ['gallery', 'slide', 'form']
                  ],
                  gap: [1, 'number'],
                  quantity: [1, 'number']
                },
                fields: formContact,
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
                options: {
                  gap: [1, 'number'],
                  pagination: ['on', 'radio', ['on', 'off']],
                  navigation: ['on', 'radio', ['on', 'off']],
                  itemsNumber: [3, 'number', ['on', 'off']]
                }
              }
            ]
          }
        ]
      }
    ]
  },
  mutations: {
    removeSection(state: State, id: number) { },
    onSelectUI(
      state: State,
      { type, position }: { type: SelectorType; position: Position }
    ) {
      console.log(type, position)
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
          value =
            state.sections[position[0]].columns[position[1]].elements[
              position[2]
            ].fields[position[3]]
          break

        default:
          break
      }

      state.selector = {
        type,
        value,
        position
      }
    },
    onUpdateSelector(state, nOptions: Option[]): void {
      try {
        const { position, type } = state.selector
        const options = nOptions.reduce((reactive, item: Option) => ({
          ...reactive,
          [Object.keys(item)[0]]: Object.values(item)[0]
        }))
        let selectorOp: Record<string, Option> | undefined = {}

        switch (type) {
          case SelectorType.section:
            selectorOp = state.sections[position[0]].options

            break
          case SelectorType.column:
            selectorOp = state.sections[position[0]].columns[position[1]]?.options
            break
          case SelectorType.element:
            selectorOp =
              state.sections[position[0]].columns[position[1]].elements[
                position[2]
              ].options
            break
          case 'field':
            selectorOp =
              state.sections[position[0]].columns[position[1]].elements[
                position[2]
              ].fields[position[3]].options
            break

          default:
            break
        }

        Object.assign(selectorOp, { ...options })
      } catch (error) {
        alert('error in update selector' + String(error))
      }
    }
  },
  getters: {
    // get value of fields in store
    element:
      (state) =>
        ({ sid, cid, eid }: { sid: number, cid: number, eid: number }) =>
          state.sections[sid].columns[cid].elements[eid],
    column:
      (state) =>
        ({ sid, cid }: { sid: number, cid: number }) =>
          state.sections[sid].columns[cid],
    section:
      (state) =>
        ({ sid }: { sid: number }) =>
          state.sections[sid],
    field:
      (state) =>
        ({ sid, cid, eid, fid }: { sid: number, cid: number, eid: number, fid: number }) =>
          state.sections[sid].columns[cid].elements[eid].fields[fid],
    selector: (state) => state.selector
  }
})
