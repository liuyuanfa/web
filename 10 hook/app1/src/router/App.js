import React,{Component} from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom'

const Home=()=>(
    <div>
        <h2>Home</h2>
    </div>
)
const About=()=>(
    <div>
        <h2>About</h2>
    </div>
)
const Product=()=>(
    <div>
        <h2>Product</h2>
    </div>
)
//
export default class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Link to='/' >Home</Link>
                    <Link to='/About'>About</Link>
                    <Link to='/Product'>Product</Link>
                    <hr />
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/About' component={About}></Route>
                    <Route path='/Product' component={Product}></Route>
                </div>
            </Router>
        )
    }
}