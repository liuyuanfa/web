import React,{Component} from 'react'
import ProfileHeader from './ProfileHeader.js'

export default class Profile extends Component{
    render(){
        <div>
            <ProfileHeader {...this.props} />
            <ul>
                <li>aa</li>
                <li>bb</li>
                <li>cc</li>
                <li>dd</li>
            </ul>
        </div>
    }
}