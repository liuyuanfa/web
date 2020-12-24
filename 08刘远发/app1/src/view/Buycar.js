import React from 'react'
import Cart from '../components/Cart/Cart'

class Buycar extends React.Component {

  render() {
    
    let list = this.props.list;
    let show = null;
    if(list.length !== 0){
      show = <Cart list={list} {...this.props}/>
    }else{
      show = <div className='cart_empty'>购物车为空</div>
    }

    return (
      <div className='buy_car'>
        <div className='buy_car_title'>购物清单</div>
        {show}
      </div>
    );
  }
}
export default Buycar;