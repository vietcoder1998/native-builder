// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import formContact from './data/form-contact'
import gallery from './data/gallery'
import slide from './data/slide'
import { ElementType, Option, Position, SelectorType, OptionType } from './typing/index';
import { State } from './typing/store'
import { CustomHTMLAttributes } from './typing/fields';

// define your typings for the store state

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()


let options: Record<OptionType, Option>
let customHTMLAttributes: CustomHTMLAttributes 

export const store = createStore<State>({
  state: {
    selector: {
      type: null,
      options: {},
      position: [-1, -1, -1, -1],
      customHTMLAttributes: {}
    },
    sections: [
      {
        name: 'section1',
        options: {
          gap: [1, 'input', 'number'],
          column: [1, 'input', 'number']
        },
        columns: [
          {
            name: 'column1',
            options: {
              quantity: [1, 'input', 'number']
            },
            elements: [
              {
                name: 'gallery',
                type: ElementType.gallery,
                fields: gallery,
                // options define
                options: {
                  // foo: [value, type, options]
                  gap: [1, 'input', 'number'],
                  column: [4, 'input', 'number'],
                  type: [
                    ElementType.gallery,
                    'select',
                    'text',
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
              gap: [1, 'input', 'number', undefined],
              quantity: [1, 'input', 'number', undefined]
            },
            elements: [
              {
                name: 'form',
                options: {
                  type: [
                    ElementType.form,
                    'select',
                    'text',
                    ['gallery', 'slide', 'form']
                  ],
                  gap: [1, 'input', 'number'],
                  quantity: [1, 'input', 'number']
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
                  gap: [1, 'input', 'number', []],
                  pagination: ['on', 'input', 'radio', ['on', 'off']],
                  navigation: ['on', 'input', 'radio', ['on', 'off']],
                  itemsNumber: [3, 'input', 'number', ['on', 'off']]
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


      switch (type) {
        case 'section':
          options = state.sections[position[0]].options

          break
        case 'column':
          options = state.sections[position[0]].columns[position[1]]?.options

          break
        case 'element':
          options =
            state.sections[position[0]].columns[position[1]]?.elements[
              position[2]
            ]?.options
          break
        case 'field':
          options =
            state.sections[position[0]].columns[position[1]].elements[
              position[2]
            ].fields[position[3]].options
          customHTMLAttributes = state.sections[position[0]].columns[position[1]].elements[
            position[2]
          ].fields[position[3]].customHTMLAttributes

          break
        default:
          break
      }

      state.selector = {
        type,
        options,
        position,
        customHTMLAttributes
      }
    },
    onUpdateSelector(state: State, nOptions: Option[]): void {
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
