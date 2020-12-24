import useFriendStatus from './useFriendStatus'

export default function FriendListItemAndString({friendObj}){
    const isOnline = useFriendStatus(friendObj.id)
    var str;
    if(isOnline ===null){
        str='暂未登录'
    }
    else if(isOnline){
        str='在线'
    }
    else{
        str='离线'
    }
    return(
        <li style={{color:isOnline?'green':'grey'}}>
            {friendObj.name}-----{str}
        </li>
    )
}