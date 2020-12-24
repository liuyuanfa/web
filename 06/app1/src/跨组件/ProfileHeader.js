import React,{Component} from 'react'

export default class ProfileHeader extends Component{
    render(){
        return(
            <div>
                <h2>
                    名字：{this.props.nickname}
                </h2>
                <h2>
                    等级：{this.props.level}
                </h2>
            </div>
        )
    }
}