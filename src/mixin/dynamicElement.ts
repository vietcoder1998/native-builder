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
        }) as Element
      },
      col(): number {
        return this.elementDetail.options.col[0] || 1
      },
      gap(): number {
        return this.elementDetail.options.col[0] || 1
      },
      options() {
        return this.elementDetail.options
      },
      fields() {
        return this.elementDetail.fields
      }
    }
  }
}

export default dynamicElement
