import { request } from '@/network/axios'
export default {

   async getCategoriesAction(context,playload){
        console.log('请求目录的action',playload);
        const response =  await request({url:'/categories'});
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