import useFriendStatus from './useFriendStatus'

export default function FriendStatusString({friendObj}) {
    const isOnline=useFriendStatus(friendObj.id)
    if(isOnline===null){
        return 'loadding'
    }
    return isOnline?'在线':'离线'
}