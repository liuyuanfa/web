import React, { Component } from 'react'
import HOC from './HOC.js'
class Welcome extends Component {
    render() {
        return (
            <div>
                welcome {this.props.username}
            </div>
        )
    }
}

export default HOC(Welcome)