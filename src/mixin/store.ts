import { Element } from './../typing/home'
import { mapGetters } from 'vuex'

function storeMixin({ sid, cid, eid }) {
  return {
    props: {},
    created() {},
    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters(['element']),
      elementDetail(): Element {
        let detail = this.element({ sid, cid, eid })
        return detail
      },
      column(): number {
        return this.elementDetail.column
      },
      gap(): number {
        return this.elementDetail.column
      }
    },
    methods: {}
  }
}

export default storeMixin
