import React,{Component} from 'react';

localStorage.setItem('username','zhangsan');

export default class Welcome extends Component{
    constructor(){
        super()
        this.state={
            username:''
        }
    }
    componentWillMount(){
        let username = localStorage.getItem('username')
        this.setState({
            username
        })
    }
    render(){
        return(
            <div>
                welcome,{this.state.username}
            </div>
        )
    }
}