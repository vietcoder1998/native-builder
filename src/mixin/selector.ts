import { mapGetters } from 'vuex'

const selector = {
  created() {},
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters(['selector'])
  },
  methods: {}
}

export default selector
