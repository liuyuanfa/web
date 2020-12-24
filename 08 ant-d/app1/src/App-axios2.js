import React,{Component} from 'react';
import axios from './Untils/request'  //使用封装过的axios，也方便于批量更换网络请求方式（此时为axios请求）

export default class Appaxios2 extends Component{
    constructor(){
        super()
        this.state={
            product:[]
        }
    }
    componentDidMount(){
        axios({
            url:'/get',
            params:{
                name:"Mary",
                age:42
            }
        }).then(res=>console.log(res)).catch(err=>console.error(err))

        axios.post('/post',{
            data:{name:'Jack',age:53}
        }).then(res=>console.log(res)).catch(err=>console.error(err))
    }

    render(){
        return(
            <div>封装版axios</div>
        )
    }
}