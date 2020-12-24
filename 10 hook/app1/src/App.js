import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Example from './hook/hook'

export default class App extends Component{
  componentWillUnmount(){
    console.log('component')
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  render(){
    return(
      <div>
        <Example />
        <button onClick={()=>this.unmount()}>卸载组件</button>
      </div>
    )
  }
}