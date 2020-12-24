import React,{Component} from 'react';
import axios from 'axios';
export default class Appaxios extends Component{
    constructor(){
        super()
        this.state={
            product:[]
        }
    }

    componentDidMount(){
        //axios原生get请求
        // axios({
        //     url:'https://httpbin.org/get',
        //     method:'get',
        //     params:{
        //         name:'zhangsan',
        //         age:11
        //     }
            
        // }).then(res=>console.log(res)).catch(err=>{console.error(err)})

        //axios post请求
        axios.post('https://httpbin.org/post',{
                data:{
                    name:'lisi',
                    age:21
                }
            }).then(res=>console.log(res)).catch(err=>console.error(err))
        
    }

    render(){
        return(
            <div>axios</div>
        )
    }
}