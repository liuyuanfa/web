import React,{Component} from 'react';

export default class Goodbye extends Component{
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
                goodbye,{this.state.username}
            </div>
        )
    }
}