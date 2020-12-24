import React from 'react';
import './List.css'
class List extends React.Component{
    render(){
        const sort = this.props.sort;
        let light = ''
        let icon = ''
        if(sort === 0){
            light = '默认'
        }else if(sort === 1){
            light = '销量'
            icon = '↑' 
        }else if(sort === 2){
            light = '销量'
            icon = '↓'
        }else if(sort === 3){
            light = '价格'
            icon = '↑'
        }
        else{
            light = '价格'
            icon = '↓'
        }
        if(this.props.brand){
            light = this.props.brand
        }
        if(this.props.color){
            light = this.props.color
        }
        const style = {
            color: '#fff',
            backgroundColor: 'red'
        }
        const btn = this.props.value.map((item, index) => {
            if(item === light && (this.props.brand || this.props.color)){
                return(
                <span key={index} className='btn' onClick={(e) => this.props.sortClick(item)} style={style}>{item}</span>
                )
            }else if(item === light){
                return(
                    <span key={index} className='btn' onClick={(e) => this.props.sortClick(item)} style={style}>{item}{icon}</span>
                    )
            }
            else{
                return(
                    <span key={index} className='btn' onClick={(e) => this.props.sortClick(item)}>{item}</span>
                )
            }
            
        })
        return(
            <div style={this.props.style}>
                <span>{this.props.title}：</span>
                {btn}
            </div>
        )
    }
}

export default List;