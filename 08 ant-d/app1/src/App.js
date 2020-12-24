import React,{Component} from 'react';
import ShowComment from './评论/ShowComment'
import 'moment/locale/zh-cn'
import InputComment from './评论/InputComment'

export default class App extends Component{
constructor(){
    super()
    this.state={
        commentList:[]
    }
}
addComment(info){
    this.setState({
        commentList:[...this.state.commentList,info]
    })
}
render(){
    return(
        <div>
            {
                this.state.commentList.map((item,index)=>{
                    return <ShowComment key={item.id} comment={item} />
                    
                })
            }
            <InputComment addComment={this.addComment.bind(this)} />
        </div>
    )
}
}