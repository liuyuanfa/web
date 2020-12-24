import React,{Component} from 'react'
import Profile from './Profile'

class App extends Component{
    constructor(){
        super();
        this.state={
            nickname:'zhangsan',
            level:100
        }
    }
    render(){
        return(
            <div>
                <Profile {...this.state} />
            </div>
        )
    }
}
export default App;