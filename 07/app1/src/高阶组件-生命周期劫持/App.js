import React, { Component } from 'react'
import CartPage from './CartPage.js'
import LoginPage from './LoginPage.js'
import HOC from './HOC.js'
const AuthLoginPage = HOC(LoginPage);
const AuthCartPage = HOC(CartPage);
export default class App extends Component {
    render() {
        return (
            <div>
                <AuthLoginPage />
                <hr/>
                <AuthCartPage />
            </div>
        )
    }
}