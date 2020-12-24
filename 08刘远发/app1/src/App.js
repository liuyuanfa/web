import React from 'react'
import './App.css';
import Index from './view/index'
import Buycar from './view/Buycar'
import Info from './view/Info'
import product_data from './product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buycar: [

      ]
    }
  }
  addClick(id, e) {
    let buycar = [...this.state.buycar];
    let food = product_data.find(item => item.id === id)
    let flag = false;
    for (let i = 0; i < buycar.length; i++) {
      if (buycar[i].id === food.id) {
        buycar[i].nums += 1;
        flag = true;
        break;
      }
    }
    if (!flag) {
      buycar.push(food)
    }
    buycar = buycar.map(item => {
      return {
        id: item.id,
        name: item.name,
        image: item.image,
        cost: item.cost,
        nums: item.nums || 1
      }
    })
    this.setState({
      buycar
    })
    e.preventDefault()
  }
  addnum(id){
    console.log('add'+id);
    let buycar = [...this.state.buycar];
    for(let i = 0; i < buycar.length; i++){
      if(id === buycar[i].id){
        buycar[i].nums += 1;
      }
    }
    this.setState({
      buycar
    })
  }
  subnum(id){
    console.log('sub'+id);
    let buycar = [...this.state.buycar];
    for(let i = 0; i < buycar.length; i++){
      if(id === buycar[i].id){
        if(buycar[i].nums === 1){
          buycar.splice(i,1)
        }else{
          buycar[i].nums -= 1;
        }
        
      }
    }
    this.setState({
      buycar
    })
  }
  delClick(id){
    console.log('del');
    let buycar = [...this.state.buycar];
    for(let i = 0; i < buycar.length; i++){
      if(id === buycar[i].id){
        buycar.splice(i,1)
      }
    }
    this.setState({
      buycar
    })
  }
  submit(){
    let buycar = [];
    this.setState({
      buycar
    })

  }
  render() {
    let num = ''
    if(this.state.buycar.length !== 0){
      num = <span className='num'>{this.state.buycar.length}</span>
    }
    return (
      <Router>
        <div>
          <div className='header'>
            <NavLink to='/index' className='header_title' activeStyle={{ color: 'red' }}>
              <span>电商网站示例</span>
            </NavLink>

            <div className='header_buycar_block'>
              <NavLink to='/buycar' className='header_buycar' activeStyle={{ color: 'red' }}>
                <span>购物车</span>{num}
              </NavLink>
            </div>
          </div>
          <Switch>
            <Route exact path="/">
              <Redirect to={{ pathname: "/index" }} />
            </Route>
            <Route path="/index">
              <Index Click={this.addClick.bind(this)} />
            </Route>
            <Route path="/buycar">
              <Buycar 
                list={this.state.buycar} 
                add={this.addnum.bind(this)} 
                sub={this.subnum.bind(this)} 
                del={this.delClick.bind(this)}  
                submit={this.submit.bind(this)} 
              />
            </Route>
            <Route path="/product/:id">
              <Info Click={this.addClick.bind(this)} />
            </Route>
          </Switch>

        </div>
      </Router>

    );
  }


}

export default App;
