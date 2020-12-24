import useFriendStatus from './useFriendStatus'

export default function FriendListItem({friendObj}) {
    const isOnline = useFriendStatus(friendObj.id)
    return(
        <li style={{color:isOnline?'green':'grey'}}>
            {friendObj.name}
        </li>
    )
}