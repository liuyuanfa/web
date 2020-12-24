import React,{Component} from 'react'
import {MyContext} from './context.js'

 class ProfileHeader extends Component{
    render(){
        // console.log(this.props)
        return(
            <div>
                <h2>
                    名字：{this.context.nickname}
                </h2>
                <h2>
                    等级：{this.context.level}
                </h2>
            </div>
        )
    }
}
ProfileHeader.contextType=MyContext;

export default ProfileHeader