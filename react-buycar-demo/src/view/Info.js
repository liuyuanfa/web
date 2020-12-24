import React from 'react';
import product_data from '../product';
import {
    useParams
} from "react-router-dom";

function Info(props) {
    let { id } = useParams();
    let product = product_data;
    product = product.find(item => parseInt(item.id) === parseInt(id))
    // console.log(product);
    return (
    <div className='product_id'>
        <div className='product_image'>
            <img src={product.image.default} alt='图片' />
        </div>
        <div className='product_info'>
            <h1>{product.name}</h1>
            <div className='product_cost'>¥{product.cost}</div>
            <div className='product_add_cart' onClick={(e) => props.Click(product.id,e)}>加入购物车</div>
        </div>
    </div>
    )

}
export default Info;