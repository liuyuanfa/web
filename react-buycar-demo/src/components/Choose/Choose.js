import React from 'react';
import './Choose.css'
import List from './List'
class Choose extends React.Component{
    render(){
        const value = ['默认', '销量', '价格']
        const sort = this.props.sort;
        let bradns = null;
        let colors = null;
        // let def = null;
        
        return(
            <div className='list_control'>
                <List 
                    title='品牌' 
                    value={this.props.brands} 
                    style={{marginBottom:'16px'}} 
                    light={bradns} 
                    sortClick={this.props.brandsClick}
                    brand={this.props.brand} 
                />
                <List 
                    title='颜色' 
                    value={this.props.colors} 
                    style={{marginBottom:'16px'}} 
                    light={colors} 
                    sortClick={this.props.colorsClick}
                    color={this.props.color} 
                />
                <List 
                    title='排序' 
                    value={value} 
                    sortClick={this.props.sortClick} 
                    sort={sort} 
                />
            </div>
        )
    }
}

export default Choose;