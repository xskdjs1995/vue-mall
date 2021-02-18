export default {
    test(state, payload) {
        // state
        // payload
        // this.$store.commit('name')
        console.log('state:',state,'test mutations',payload);
    },
    byAction(state,payload){
        console.log('state:',state);
        console.log('payload:',payload)

    }
}