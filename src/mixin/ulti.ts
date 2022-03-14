export default {
    name: 'ultilities',
    computed: {
        convertJSONtoString() {
            return (value: object) => JSON.stringify(value)
        },
        coverStringtoJSON() {
            return (value: string) => JSON.parse(value)
        }
    },
    methods: {

    },

}