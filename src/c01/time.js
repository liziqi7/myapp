import React, { Component } from 'react'
import withTime from '../c05/timer'

export class time extends Component {   
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.time.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export default withTime(time)