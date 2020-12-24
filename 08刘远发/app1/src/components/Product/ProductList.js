import React from 'react'
import Product from './Product'
class ProductList extends React.Component{
    render(){
        let list = null;
        if(this.props.list.length !== 0){
            list = this.props.list.map((item, index) => {
                return(
                    <div key={index}>
                        <Product value={item} Click={this.props.Click} />
                    </div>
                )
            })
        }else{
            list = <div className='not_found'>尚无相关商品</div>
        }
        
        return(
            <div>
                {list}
            </div>
        )
    }
}

export default ProductList;