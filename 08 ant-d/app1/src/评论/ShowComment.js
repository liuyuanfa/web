import React, { Component} from 'react'
import 'antd/dist/antd.css';
import moment from 'moment';
import { Comment, Tooltip, Avatar } from 'antd'
// import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';



export default class ShowComment extends Component {
    render() {
        // const [likes, setLikes] = useState(0);
        // const [dislikes, setDislikes] = useState(0);
        // const [action, setAction] = useState(null);
        
        // const like = () => {
        //     setLikes(1);
        //     setDislikes(0);
        //     setAction('liked');
        // };
        
        // const dislike = () => {
        //     setLikes(0);
        //     setDislikes(1);
        //    setAction('disliked');
        // };
        
        // const actions = [
        //     <Tooltip key="comment-basic-like" title="Like">
        //         <span onClick={like}>
        //             {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        //             <span className="comment-action">{likes}</span>
        //         </span>
        //     </Tooltip>,
        //     <Tooltip key="comment-basic-dislike" title="Dislike">
        //         <span onClick={dislike}>
        //             {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        //             <span className="comment-action">{dislikes}</span>
        //         </span>
        //     </Tooltip>,
        //     <span key="comment-basic-reply-to">Reply to</span>,
        // ]; 
        const { nickname, avatar, content, datatime } = this.props.comment
        return (
            <div>
                <Comment
                    // actions={actions}
                    author={<a href='/#'>{nickname}</a>}
                    avatar={
                        <Avatar
                            src={avatar}
                            alt={nickname}
                        />
                    }
                    content={
                        <p>
                            {content}
                        </p>
                    }
                    datetime={
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{datatime.fromNow()}</span>
                        </Tooltip>
                    }
                />
            </div>
        )
    }


}