import { request } from '@/network/axios'
export default {
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