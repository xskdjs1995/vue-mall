import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:8080', 
        timeout: 2000
    })
    return instance(config)

}