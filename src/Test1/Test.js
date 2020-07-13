import React, {Component} from 'react'
import Test2 from './Test2';

class Test extends Component{

    state = {
        data1: 'data1'
    }

    modifyState = () => {
        //console.log('hello');
        this.setState({
            data1: 'modified',
            data2: 'modified',
            data3: 'data3'
        }
            
        )
    }
    render(){
        
        return (
            <div>
                <Test2 data={this.state} modifyState={this.modifyState}/>
            </div>
        )
    }
}

export default Test;