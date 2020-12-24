import React from 'react'
// import Header from '../components/Header/Header'
import Choose from '../components/Choose/Choose'
import ProductList from '../components/Product/ProductList'
import product_data from '../product';

class Index extends React.Component {
  constructor(){
    super();
    this.state = {
      product_data:[],
      sort_product:[],
      sort: 0, //0为默认，1-2为销量排序，3-4为价格排序
      color: '',
      brand: ''
    }
  }
  componentDidMount(){
    this.setState({
      product_data
    })
  }
  sortClick(e){
    let sort = this.state.sort;
    if(e === '销量'){
      if(sort === 1){
        sort = 2;
      }else{
        sort = 1;
      }
    }else if(e === '价格'){
      if(sort === 3){
        sort = 4;
      }else{
        sort = 3;
      }
    }else{
      sort = 0;
    }
    this.setState({
      sort
    })
  }
  colorsClick(e){
    console.log(e);
    let color = e;
    if(e === this.state.color){
      color=''
    }
    this.setState({
      color
    })
  }
  brandsClick(e){
    console.log(e);
    let brand = e;
    if(e === this.state.brand){
      brand=''
    }
    this.setState({
      brand
    })
  }
  
  render() {
    let list = [...this.state.product_data];
    const brand_choose = this.state.product_data.map((item) => item.brand);
    const colors_choose = this.state.product_data.map((item) => item.color);
    const brands = Array.from(new Set(brand_choose));
    const colors = Array.from(new Set(colors_choose));
    const sort = this.state.sort
    if(sort === 1){
      list.sort(byField("sales",false))
    }else if(sort === 2){ 
      list.sort(byField("sales",true))
    }
    else if(sort === 3){ 
      list.sort(byField("cost",false))
    }
    else if(sort === 4){ 
      list.sort(byField("cost",true))
    }else{
      list = [...this.state.product_data]
    }

    if(this.state.brand !== ''){
      list = list.filter(item => {
        return item.brand === this.state.brand;
      })
    }
    if(this.state.color !== ''){
      list = list.filter(item => {
        return item.color === this.state.color;
      })
    }

    return (
      <div>
        
        <Choose 
          brands={brands} 
          colors={colors} 
          sort={this.state.sort} 
          sortClick={this.sortClick.bind(this)} 
          colorsClick={this.colorsClick.bind(this)} 
          brandsClick={this.brandsClick.bind(this)}  
          brand={this.state.brand} 
          color={this.state.color} 
        />
        <div className='list'>
          <ProductList list={list} Click={this.props.Click} />
        </div>
      </div>
    );
  }
}
function byField(attr, rev) {
  if (rev === undefined) {
      rev = 1;
  } else {
      rev = (rev) ? 1 : -1;
  }
  return function (a, b) {
      a = a[attr];
      b = b[attr];
      if (a < b) {
          return rev * -1;
      }
      if (a > b) {
          return rev * 1;
      }
      return 0;
  }
}
export default Index;