import React,{Component} from 'react'
import ProfileHeader from './ProfileHeader.js'

export default class Profile extends Component{
    render(){
        return(
        <div>
            <ProfileHeader />
            <ul>
                <li>aaa</li>
                <li>bbb</li>
                <li>ccc</li>
                <li>ddd</li>
            </ul>
        </div>
        )
    }
}