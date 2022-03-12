import { GalleryItem } from './../typing/gallery'
import { Element } from './../typing/home'
import { mapGetters } from 'vuex'

const storeMixin = {
  props: {
    sid: Number,
    cid: Number,
    eid: Number
  },
  created() {
    console.log(this.$props)
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters(['element']),
    elementDetail<T>(): Element<T> {
      let detail = this.element({
        sid: this.$props.sid,
        eid: this.$props.eid,
        cid: this.$props.cid
      })
      return detail
    },
    column(): number {
      console.log(this.elementDetail)
      return this.elementDetail.column
    },
    gap(): number {
      return this.elementDetail.gap
    }
  },
  methods: {}
}

export default storeMixin
