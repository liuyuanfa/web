import React,{Component} from 'react';
import {MyContext} from './context'

class ProfileHeader extends Component{
    render(){
        return(
            <div>
                {this.props.onClick && <button onClick={()=>this.props.onClick('Maria')}>点击</button>}
                <h2>名字：{this.context.nickname}</h2>
                <h2>等级：{this.context.level}</h2>
            </div>
        )
    }
}
ProfileHeader.contextType = MyContext;
export default ProfileHeader;