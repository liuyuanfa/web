import {useState,useEffect} from 'react'
export default function useFriendStatus(id) {
    const [isOnline,setIsOnline] = useState(null)
    function changeOnline(status) {
        setIsOnline(status)
    }
    useEffect(()=>{
        let status = [null,false,true][parseInt(Math.random()*3)]
        changeOnline(status)
    })
    return isOnline
}