import React, {Component} from 'react';

class Test2 extends Component {
    
    render(){
    

        return (
            <div>
                <p>data: {this.props.data.data1}</p>
                <button onClick={this.props.modifyState}>clickme</button>
                
            </div>
        )
    }
}

export default Test2