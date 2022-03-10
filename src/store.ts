// store.ts
import { InjectionKey, StyleHTMLAttributes } from 'vue'
import { createStore, Store } from 'vuex'
import { State } from './typing/store'
import { Field } from './typing/fields';

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
          value: null,
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
          value: null,
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
          value: null,
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
          value: null,
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
          value: null,
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
          value: null,
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
      pagination: 'on',
      navigation: 'on',
      itemsNumber: 1,
      slides: [
        {
          src: 'https://picsum.photos/200',
          text: 'To get a square image, just add the size'
        },
        {
          src: 'https://picsum.photos/200',
          text: 'To get a square image, just add the size'
        },
        {
          src: 'https://picsum.photos/200',
          text: 'To get a square image, just add the size'
        },
        {
          src: 'https://picsum.photos/200',
          text: 'To get a square image, just add the size'
        },
        {
          src: 'https://picsum.photos/200',
          text: 'To get a square image, just add the size'
        }
      ]
    }
  },
  mutations: {
    setValue(state: State, { vl, keys }: { vl: any | State; keys: (keyof State)[] }) {
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
    changeSlideSrc(state: State, { id, vl }: { id: number, vl: string }) {
      console.log('change src', id, vl)
      state.slidePage.slides[id].src = vl
    },
    changeSlideText(state: State, { id, vl }: { id: number, vl: string }) {
      state.slidePage.slides[id].text = vl
    }
  }
})

function setValueFromMultipleKey(keys: (keyof typeof ob)[], ob: State, value: unknown) {
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
    //@ts-ingore
    temp[keys[len - 1]] = value
    return ob
  } catch (error) {
    console.log('error in temp')
  }
}
