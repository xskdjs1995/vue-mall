export default {

    getCategories(state,payload){
        // categories
        state.categories =payload.data
    },
    getitemList(state,payload){
        console.log("商品列表",payload);
        // state.itemList = payload.data
        // TODO 没有触发渲染 待研究
        // this.$set(state,"itemList",...payload.data)
        state.itemList.splice(0,...payload.data)
    },
// 以下是测试demo
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