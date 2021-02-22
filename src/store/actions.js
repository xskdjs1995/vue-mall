import { request } from '@/network/axios'
export default {
    // ajax获得目录数据
   async getCategoriesAction(context,playload){
        console.log('请求目录的action',playload);
        let response 
        try {
            response =  await request({url:'/categories'});
        } catch (error) {
            console.log("数据请求失败,尝试在项目目录下执行", "npm run jsonserve");
            console.log(error.message)
        }
        
        console.log('异步的结果',response);

        context.commit({
            type:'getCategories',
            data:response.data
        })
   },

    // 这个是练习的
   async testAction(context, payload) {
        console.log('经过了action')
        console.log('context:', context)
        console.log('payload:', payload)

        console.log('这里可以写异步的操作')
        // request({url:'/comments'}).then((res) => console.log(res,'axios')).catch((err) => { console.log(err) })
       const response =  await request({url:'/comments'});

        context.commit({
            type: 'byAction',
            data: response.data
        })
    }
}