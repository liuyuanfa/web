import axios from 'axios'
import {BaseUrl,TIMEOUT} from './requestConfig'

const request = axios.create({
    baseURL:BaseUrl,
    timeout:TIMEOUT
})

request.interceptors.request.use(config=>{
    console.log('请求被拦截')
    return config
},err=>{
})
request.interceptors.response.use(res=>{
    console.log(res);
    return res.data;
})

export default request