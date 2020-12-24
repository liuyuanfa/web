import React,{Component} from 'react';
import Profile from './Profile';
import {MyContext} from './context';

class App extends Component{
    constructor(){
        super()
        this.state={
            nickname: 'Jackson',
            level:1234
        }
    }
    changeName(name){
        this.setState({
            nickname:name
        })
    }
    render(){
        return(
            <div>
                <MyContext.Provider value={this.state}>
                    <Profile onClick={(name)=>this.changeName(name)} />
                </MyContext.Provider>
                <hr />
                <Profile />
            </div>
        )
    }
}
export default App;