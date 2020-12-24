import React, { Component } from 'react'
import Home from "./Home"
import About from "./About"
import HOC from './HOC.js'
import UserContext from './UserContext.js'
const UserHome = HOC(Home)
const UserAbout = HOC(About)

export default class App extends Component {
    render() {
        return (
            <div>
                <UserContext.Provider value={{nickname:'Jack',level:1}}>
                    <UserHome />
                </UserContext.Provider>     
                <hr />
                <UserAbout/>
                
            </div>
        )
    }
}