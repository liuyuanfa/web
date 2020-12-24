import React, { Component } from 'react'

const FancyButton = React.forwardRef((props,ref)=>{
    return (
        <button ref={ref}>
            {props.children}
        </button>
    )
})

export default FancyButton;