// store.ts
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { State } from './typing/store'

// define your typings for the store state

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    gallery: {
      column: 4,
      gap: 0,
      items: [
        {
          src: 'https://picsum.photos/200/220',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/100',
          alt: 'Just add your desired'
        },
        {
          src: 'https://picsum.photos/200/120',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/110',
          alt: 'Just add your desired'
        },
        {
          src: 'https://picsum.photos/200/270',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/150'
        },
        {
          src: 'https://picsum.photos/200/300',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/170'
        },
        {
          src: 'https://picsum.photos/200/80',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/40'
        },
        {
          src: 'https://picsum.photos/200/100',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/90'
        },
        {
          src: 'https://picsum.photos/200/70',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/40'
        },
          {
          src: 'https://picsum.photos/200/90',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/40'
        },
          {
          src: 'https://picsum.photos/200/320',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/40'
        },
        {
          src: 'https://picsum.photos/200/320',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/40'
        },
        {
          src: 'https://picsum.photos/200/320',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/40'
        },
        {
          src: 'https://picsum.photos/200/320',
          title: 'Just add your desired ',
          thumbnail: 'https://picsum.photos/200/40'
        }
      ]
    },
    formContact: {
      fields: [
        {
          title: 'Your name',
          type: 'text',
          index: 0,
          customHTMLAttributes: {
            width: 120,
            required: true,
            placeholder: 'must longer than 8',
            description: 'please add your name',
            name: 'name',
            showError: false,
            error: ''
          }
        },
        {
          title: 'Your Email',
          type: 'text',
          index: 1,
          customHTMLAttributes: {
            width: 120,
            required: true,
            placeholder: 'must longer than 8',
            description: 'please add your name',
            name: 'mail',
            error: ''
          }
        },
        {
          title: 'Time',
          type: 'date',
          width: 120,
          index: 2,
          customHTMLAttributes: {
            required: true,
            placeholder: 'must longer than 8',
            description: 'please add your name',
            name: 'Time',
            error: ''
          }
        },
        {
          title: 'Select',
          type: 'dropdown',
          index: 3,
          customHTMLAttributes: {
            width: 120,
            required: true,
            placeholder: 'please chose 1',
            description: 'please add your name',
            name: 'select',
            options: ['The title 1', 'The title 2'] as String[],
            error: ''
          }
        },
        {
          title: 'Checkbox',
          type: 'checkbox',
          index: 4,
          customHTMLAttributes: {
            width: 120,
            required: true,
            placeholder: 'must longer than 8',
            description: 'please add your name',
            options: ['The title 1', 'The title 2'],
            name: 'check-box',
            error: ''
          }
        },
        {
          title: 'Radio',
          type: 'radio',
          width: 120,
          index: 5,
          customHTMLAttributes: {
            required: true,
            placeholder: 'must longer than 8',
            description: 'please add your name',
            options: ['The title 1', 'The title 2'],
            name: 'radio',
            error: ''
          }
        },
        {
          title: 'Your message',
          type: 'textarea',
          value: '',
          index: 6,
          customHTMLAttributes: {
            width: 120,
            required: true,
            placeholder: 'must longer than 8',
            description: 'please add your name',
            name: 'msg',
            error: ''
          }
        },
        {
          title: 'Upload',
          type: 'upload',
          value: '',
          index: 7,
          customHTMLAttributes: {
            width: 120,
            required: true,
            placeholder: 'must longer than 8',
            description: 'please add your name',
            name: 'msg',
            error: ''
          }
        }
      ]
    },
    slidePage: {
      pagination: true,
      navigation: true,
      itemsNumber: 1,
      slides: []
    }
  },
  mutations: {
    changeGap(state, nGap) {
      state.gallery.gap = nGap
    },
    changeColumn(state, nColumn) {
      state.gallery.column = nColumn
    },
    fixGalleryItem(state, index, nField) {
      const temp = state.gallery.items[nField.index]
      state.gallery.items[nField.index] = {
        src: nField.src,
        title: nField.title,
        thumbnail: nField.thumbnail
      }
      state.gallery.items[lastIndex] = temp
    },
    addNewImage(state, nImage) {
      state.gallery.items.push(nImage)
    },
    changeFields(state, index, key, nValue) {
      state.field[index][key] = nValue
    },
    pushNewField(state, nField) {
      state.field.push(nField)
    },
    changeSlideNavigation(state) {
      state.slidePage.navigation != state.slidePage.navigation
    },
    setValue(state: State, { vl, keys }: { vl: unknown; keys?: string[] }) {
      console.log(vl, keys)
      if (!keys) {
        state = vl
      } else {
        state = setValueFromMultipleKey(keys, state, vl)
      }
    }
  }
})

function getValueFromMultipleKey(params: string[], ob: Object) {
  if (params.length === 1) {
    return ob[params[0]]
  } else {
    let param = params[0]
    const nParams = params.pop()
    return getValueFromMultipleKey(nParams, ob[param])
  }
}

function setValueFromMultipleKey(keys: string[], ob: Object, value: unknown) {
  var temp = ob
  let len = keys.length
  for (let i = 0; i < len - 1; i++) {
    const key = keys[i]
    if (!temp[key]) {
      console.log('no key')
    } else {
      temp = temp[key]
    }
  }

  temp[keys[len - 1]] = value
  return ob
}

function obLastKey(ob: Object, keys: string[]) {
  if (k > 0) {
    return this
  }
  return obLastKey
}
