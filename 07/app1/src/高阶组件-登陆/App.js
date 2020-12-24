import React, { Component } from 'react'
import CartPage from './CartPage.js'
import HOC from './HOC.js'
const AuthCartPage = HOC(CartPage);
export default class App extends Component {
    render() {
        return (
            <div>
                <AuthCartPage isLogin={false}/>
                <hr/>
                <AuthCartPage isLogin={true}/>
            </div>
        )
    }
}