import React,{Component} from 'react'
import FriendListItemAndString from './FriendListItemAndString'

export default class App extends Component{
    constructor(){
        super()
        this.state={
            friends:[
                {id:1,name:'zhangsan'},
                {id:2,name:'Mary'},
                {id:3,name:'Jackson'},
                {id:4,name:'Jackey'}
            ]
        }
    }
    render(){
        return(
            <div>
                {
                this.state.friends.map((friend,index)=>{
                    return(
                        <div key={index}>
                            <h1>id:{friend.id}</h1>
                            <FriendListItemAndString friendObj={friend} />
                        </div>
                    )
                })
                }
            </div>
        )
    }
}