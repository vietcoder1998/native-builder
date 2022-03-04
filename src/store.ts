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
      column: 1,
      gap: 0,
      items: []
    },
    fields: [],
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
    }
  }
})
