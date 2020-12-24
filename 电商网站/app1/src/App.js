import React,{Component} from 'react'
import {HashRouter as Router,Route, Switch} from 'react-router-dom'
import {Routes} from './routes'
import Frame from './view/Frame'
import './App.css'



export default class App extends Component{

  render(){
    return(
      <Frame>
        <Router>
          <div id='nav'>
            {/* <Link to='/List'>商城首页</Link> | <Link to='/Cart'>购物车</Link> */}
            {/* <hr/> */}
          <Switch>
            {Routes.map(route=>{
              return <Route key={route.path} path={route.path} exact={route.exact} render={routeProps=>{
                return <route.component {...routeProps} />
              }} />
            })}
          </Switch>
          </div>
        </Router>
      </Frame>
    )
  }
}