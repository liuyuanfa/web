import React, { Component,forwardRef } from 'react'

const Profile = forwardRef(function(props,ref){
    return <p ref={ref}>Profile</p>
})

export default Profile