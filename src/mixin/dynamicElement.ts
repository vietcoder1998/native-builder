import { Element } from './../typing/home'
import { mapGetters } from 'vuex'

interface Dynamic<T, T1, T2> {
  computed: { elementDetail: () => T; options: () => T1; items: () => T2[] }
}
function dynamicElement<T, T1, T2>(): Dynamic<T, T1, T2> {
  return {
    props: {
      sid: Number,
      cid: Number,
      eid: Number
    },
    created() {
      console.log(this.items)
    },
    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters(['element']),
      elementDetail(): Element & T {
        let detail = this.element({
          sid: this.$props.sid,
          eid: this.$props.eid,
          cid: this.$props.cid
        })
        return detail
      },
      column(): number {
        console.log(this.elementDetail)
        return this.elementDetail.column || 1
      },
      gap(): number {
        return this.elementDetail.gap || 1
      },
      options(): () => T1 {
        return this.elementDetail.options || {}
      },
      items(): () => T2[] {
        return this.elementDetail.fields || []
      }
    },
    methods: {}
  }
}

export default dynamicElement
