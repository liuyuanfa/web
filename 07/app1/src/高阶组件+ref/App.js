import { Component,createRef } from 'react'
import Home from './Home.js'
import Profile from './Profile.js'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.titleRef = createRef();
        this.homeRef = createRef();
        this.profileRef = createRef();
    }
    printfRef(){
        console.log(this.titleRef.current);
        console.log(this.homeRef.current);luoj
        console.log(this.profileRef.current);
    }
    render() {
        return (
            <div>
                <h2 ref = {this.titleRef} >Hello world</h2>
                <Home ref = {this.homeRef}/>
                <Profile ref = {this.profileRef} />
                <hr/>
                <button onClick={()=>this.printfRef()}>点击</button>
            </div>
        )
    }
}