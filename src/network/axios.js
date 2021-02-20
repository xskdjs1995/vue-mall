import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:80', 
        timeout: 2000
    })
    return instance(config)

    
}