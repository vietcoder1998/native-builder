import { Store } from '@/store' // path to store file

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store
  }

  interface State {
    count: number
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

