export default {
    name: 'ultilities',
    computed: {
        convertJSONtoString(value: Object) {
            return JSON.stringify(value)
        }
    },
    methods: {
        coverStringtoJSON(value: string): Object {
            return JSON.parse(value)
         }
    },

}