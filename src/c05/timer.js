import React, { Component } from 'react'

export default function (WrappedComponent) {
    return class timer extends Component {      
        state={time: new Date()}
        componentDidMount() {
            this.timerID = setInterval(() => this.tick(), 1000);
        }
        componentWillUnmount() {
            window.clearInterval(this.timerID);
            this.timerID = null;
        }
        tick() {
            this.setState({
                time: new Date()
            })
        }
        render() {
            return (
                <WrappedComponent time={this.state.time} {...this.props}></WrappedComponent>
            )
        }
    }
}