import React, { Component } from 'react'
import LoginPage from './LoginPage.js'

 const HOC = (WrapedComponent)=>{
    const newComonent = props=>{
        const {isLogin} = props;
        if (isLogin) {
            return <WrapedComponent {...props} />
        }
        else{
            return <LoginPage />
        }
    }
    return newComonent;
}

export default HOC