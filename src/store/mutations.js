export default {

    getCategories(state,payload){
        // categories
        state.categories =payload.data
    },

    test(state, payload) {
        // state
        // payload
    
        console.log('state:',state,'test mutations',payload);
    },
    byAction(state,payload){
        console.log('state:',state);
        console.log('payload:',payload)

    }
}