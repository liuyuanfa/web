import React from 'react';
import './Product.css'
class Product extends React.Component{
    render(){
        const value = this.props.value
        return(
            <div className='product_main'>
                <a href={'./product/'+value.id} className='product'>
                    <img src={value.image.default} alt='图片' />
                    <h4 className='product_name'>{value.name}</h4>
                    <span className='product_value'>¥{value.cost}</span>
                    <span className='product_value'>销量：{value.sales}</span>
                    <div className="product-add-cart" onClick={(e) => this.props.Click(value.id,e)}>加入购物车</div>
                </a>
            </div>
        )
    }
}

export default Product;