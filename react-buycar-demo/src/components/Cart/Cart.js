import React from 'react'
import './Cart.css'
class Cart extends React.Component{
    
    render(){
        let sum = 0;
        const list = this.props.list.map((item, index) => {
            sum += item.nums*item.cost;
            return (
                <div className='cart' key={index}>
                    <div className='cart_info'>{item.name}</div>
                    <div className='cart_price'>¥{item.cost}</div>
                    <div className='cart_count'>
                        <span className='cart_control' onClick={() => this.props.sub(item.id)}>-</span>
                        {item.nums}
                        <span className='cart_control' onClick={() => this.props.add(item.id)}>+</span>
                    </div>
                    <div className='cart_cost'>¥{item.nums*item.cost}</div>
                    <div className='cart_delete'>
                        <span className='cart_control_delete' onClick={() => this.props.del(item.id)}>删除</span>
                    </div>
                </div>
            )
        })
        const num = this.props.list.length;
        return(
            <div>
                <div className='cart_title'>
                    <div className='cart_info'>商品信息</div>
                    <div className='cart_price'>单价</div>
                    <div className='cart_count'>数量</div>
                    <div className='cart_cost'>小计</div>
                    <div className='cart_delete'>删除</div>
                </div>
                {list}
                <div className='cart_foot'>
                    <div className='cart_footer_desc'>
                        共计
                        <span className='cart_footer_font'>{num}</span>
                        商品
                    </div>
                    <div className='cart_footer_desc'>
                        应付金额
                        <span className='cart_footer_font'>¥{sum}</span>
                    </div>
                    <div className='cart_footer_desc'>
                        <div className='cart_control_order' onClick={() => {this.props.submit();alert('已支付'+sum+'元,支付成功')}}>现在结算</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart;