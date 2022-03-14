import {Store} from 'vuex'
import { Element, Section } from './typing/index';
import { Selector } from './typing/store';
declare module '@vue/runtime-core' {

  interface State {
    sections: Section[],
    selector: Selector[],
    getters: {
      element: Element
    }
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}


declare module '@fortawesome/*';
