import React,{Component} from 'react';
import Profile from './Profile.js';
import {MyContext} from './context.js';

class App extends Component{
    constructor(){
        super();
        this.state={
            nickname:'lisi',
            level:123
        }
    }
    render(){
        console.log(MyContext)
        return(
            <div>
                <MyContext.Provider value={this.state}>
                    <Profile />
                </MyContext.Provider>
                <Profile />
            </div>
        )
    }
}

export default App;
