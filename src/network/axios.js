import axios from 'axios'
export function request(config) {
    // 可以创建多个实例 每个都可以 有自己的baseurl
    const instance = axios.create({
        baseURL: 'http://localhost:80', 
        timeout: 2000
    })

    //TODO: 拦截器
    instance.interceptors.request.use((config)=>{
        // 对请求进行操作
        console.log('对请求进行拦截了')
        return config
    },err=>{
        console.log(err)
    })
    instance.interceptors.response.use(response=>{
        //对返回的数据进行拦截
        console.log('对返回的数据进行拦截处理');
        return response
    })
    return instance(config)

    
}