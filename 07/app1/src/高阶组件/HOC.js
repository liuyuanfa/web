import React,{Component} from 'react'

export default (WrapedComponent)=>{
    class newComponent extends Component{
        constructor(){
            super()
            this.state={
                username:''
            }
        }
        componentWillMount(){
            let username=localStorage.getItem('username')
            this.setState({
                username
            })
        }
        render(){
            return <WrapedComponent username={this.state.username} />
        }
    }
    return newComponent
}