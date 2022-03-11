import { mapGetters } from 'vuex'

export default {
  props: {
    sid: Number,
    cid: Number,
    eid: Number
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters(['items', 'gap', 'col', 'options'])
  }
}
