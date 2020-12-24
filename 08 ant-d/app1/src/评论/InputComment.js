import React,{Component} from 'react'
import {Input,Button} from 'antd'
import 'antd/dist/antd.css'
import moment from 'moment'

const { TextArea } = Input;

export default class InputComment extends Component{
constructor(props){
    super(props)
    this.state={
        content:''
    }
    this.submitComment=this.submitComment.bind(this)
    this.handleChange=this.handleChange.bind(this)
}
submitComment(){
 const commentObj={
     id:moment().valueOf(),
     avatar:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608184705961&di=772c37054d6fc6b0c8ba1df045630a6e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F06%2F20160306204517_i4Se8.jpeg',
     nickname:'yun',
     datatime:moment(),
     content:this.state.content
 }
 this.props.addComment(commentObj)
 this.setState({
     content:''
 })
}
handleChange(e){
    this.setState({
        content:e.target.value
    })
}
render(){
    return(
        <div style={{width:'400px'}}>
            <TextArea value={this.state.content} onChange={this.handleChange} rows={4} />
            <br />
            <Button type='primary' onClick={this.submitComment} >提交评论</Button>
        </div>
    )
}
}