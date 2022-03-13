import { mapGetters } from 'vuex'

function selector() {
  return {
    created() {},
    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters(['selector'])
    },
    methods: {}
  }
}

export default selector
