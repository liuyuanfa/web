import React, { Component } from 'react'
import UserContext from './UserContext.js'
export default (WrapedComponent)=>{
    return function (props){
        return (
            <UserContext.Consumer>
            {
                user=>{
                    return <WrapedComponent {...props} {...user} />
                }
            }
            </UserContext.Consumer >
        )
    }
}