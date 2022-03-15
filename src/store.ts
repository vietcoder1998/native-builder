import { Field } from './typing/index'
// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import formContact from './data/form-contact.json'
import gallery from './data/gallery.json'
import slide from './data/slide.json'
import { Option, Position, SelectorType, OptionType } from './typing/index'
import { State } from './typing/store'
import { CustomHTMLAttributes } from './typing/fields'

// define your typings for the store state
// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

let options: Record<OptionType, Option>
let customHTMLAttributes: CustomHTMLAttributes
interface DragItem {
  type: SelectorType
  position: Position
}

export const store = createStore<State>({
  state: {
    selector: {
      type: undefined,
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
                name: 'gallery1',
                type: 'gallery',
                fields: gallery as Field,
                // options define
                options: {
                  // foo: [value, type, options]
                  gap: [1, 'input', 'number'],
                  column: [4, 'input', 'number'],
                  type: [
                    'gallery',
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
                    'form',
                    'select',
                    'text',
                    ['gallery', 'slide', 'form']
                  ],
                  gap: [1, 'input', 'number', []],
                  quantity: [1, 'input', 'number', []]
                },
                fields: formContact
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
                name: 'slide1',
                type: 'slide',
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
    removeSection(state: State, id: number) {},
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
          customHTMLAttributes =
            state.sections[position[0]].columns[position[1]].elements[
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
    onUpdateSelector(state: State, nOptions: Record<OptionType, Option>): void {
      try {
        const { position, type } = state.selector
        let selectorOp: Record<string, Option> | undefined = {}

        switch (type) {
          case 'section':
            selectorOp = state.sections[position[0]].options

            break
          case 'column':
            selectorOp =
              state.sections[position[0]].columns[position[1]]?.options
            break
          case 'element':
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

        Object.assign(selectorOp, { ...nOptions })
      } catch (error) {
        alert('error in update selector' + String(error))
      }
    },
    onDragChangePosition(
      state: State,
      {
        dragOnItem,
        dropEnterItem
      }: { dragOnItem: DragItem; dropEnterItem: DragItem }
    ) {
      if (dragOnItem.type === dropEnterItem.type) {
        const position = dragOnItem.position
        const positionDrop = dropEnterItem.position
        const type = dragOnItem.type

        let temp: any
        switch (type) {
          case 'section':
            temp = state.sections[position[0]]
            state.sections[position[0]] = state.sections[positionDrop[0]]
            state.sections[positionDrop[0]] = temp

          case 'column':
            temp = state.sections[position[0]].columns[position[1]]
            //
            state.sections[position[0]].columns[position[1]] =
              state.sections[positionDrop[0]].columns[positionDrop[1]]
            //
            state.sections[positionDrop[0]].columns[positionDrop[1]] = temp

            break
          case 'element':
            temp =
              state.sections[position[0]].columns[position[1]].elements[
                position[2]
              ]

            //
            state.sections[position[0]].columns[position[1]].elements[
              position[2]
            ] =
              state.sections[positionDrop[0]].columns[positionDrop[1]].elements[
                positionDrop[2]
              ]
            //
            state.sections[positionDrop[0]].columns[positionDrop[1]].elements[
              positionDrop[2]
            ] = temp

            break
          case 'field':
            temp =
              state.sections[position[0]].columns[position[1]].elements[
                position[2]
              ].fields[position[3]]
            state.sections[position[0]] = state.sections[positionDrop[0]]
            state.sections[positionDrop[0]] = temp

            break
          default:
            break
        }
      }

      console.log('state update from drag & drop', state)
    }
  },
  getters: {
    // get value of fields in store
    element:
      (state) =>
      ({ sid, cid, eid }: { sid: number; cid: number; eid: number }) =>
        state.sections[sid].columns[cid].elements[eid],
    column:
      (state) =>
      ({ sid, cid }: { sid: number; cid: number }) =>
        state.sections[sid].columns[cid],
    section:
      (state) =>
      ({ sid }: { sid: number }) =>
        state.sections[sid],
    field:
      (state) =>
      ({
        sid,
        cid,
        eid,
        fid
      }: {
        sid: number
        cid: number
        eid: number
        fid: number
      }) =>
        state.sections[sid].columns[cid].elements[eid].fields[fid],
    selector: (state) => state.selector
  }
})
