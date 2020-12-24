import React,{Component} from 'react';
import HOC from './HOC'

class Goodbye extends Component{

    render(){
        return(
            <div>
                goodbye,{this.props.username}
            </div>
        )
    }
}
export default HOC(Goodbye)