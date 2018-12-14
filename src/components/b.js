import React, { Component } from 'react'
import A from './a';
class b extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    changeInput=(e)=> {        
        this.setState({
            value: e.target.value
        });
        console.log(this.state.value);
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.changeInput}/>
                <br />
                {this.props.name}
                <br />
                {this.props.age}
            </div>
        )
    }
}
export default A('left')(b);