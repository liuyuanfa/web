import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                昵称:{this.props.nickname} <br/>
                等级:{this.props.level} <br/>
            </div>
        )
    }
}
