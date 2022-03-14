import { mapGetters } from 'vuex';
import { Element } from './../typing/index';


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

        //@ts-ignore
        return this.element({
          //@ts-ignore
          sid: this.sid,
          //@ts-ignore
          eid: this.eid,
          //@ts-ignore
          cid: this.cid
        })
      },
      column(): number {
        //@ts-ignore
        return Number(this.elementDetail?.options?.column[0]) || 1
      },
      gap(): number {
        //@ts-ignore

        return Number(this.elementDetail?.options?.column[0]) || 1
      },
      options() {
        //@ts-ignore
        return this.elementDetail?.options
      },
      fields() {
        //@ts-ignore
        return this.elementDetail?.fields
      }
    },
  }
}

export default dynamicElement
