import { mapGetters } from 'vuex';
import { Element } from './../typing/index';


interface DinamicElement {
  props: any,
  computed: {
  },
  method: any
}
// T as Type of Opstion, T1 as 
function dynamicElement<T, T1, T2>() {
  return {
    props: {
      sid: Number,
      cid: Number,
      eid: Number
    },
    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters(['element']),
      elementDetail(): Element {
        return this.element({
          sid: this.sid,
          eid: this.eid,
          cid: this.cid
        })
      },
      column(): number {
        return Number(this.elementDetail?.options?.column[0]) || 1
      },
      gap(): number {
        return Number(this.elementDetail?.options?.column[0]) || 1
      },
      options() {
        return this.elementDetail?.options
      },
      fields() {
        return this.elementDetail?.fields
      }
    },
  }
}

export default dynamicElement
