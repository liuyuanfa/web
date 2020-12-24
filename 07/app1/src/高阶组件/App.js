import React,{Component} from 'react'
import Welcome from './Welcome'
import Goodbye from './Goodbye'

export default class App extends Component{
    render(){
        return(
            <div>
                <Welcome />
                <Goodbye />
            </div>
        )
    }
}