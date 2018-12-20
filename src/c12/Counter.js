import React, { Component } from 'react'
import { bindActionCreators, createStore } from "redux";
import { Provider, connect } from "react-redux";

const initialSate = { count: 0 };

const counter = (state = initialSate, action) => {
    switch (action.type) {
        case 'PLUG_ONE':
            return { count: state.count + 1 }
        case 'MINUS_ONE':
            return { count: state.count - 1 }
        default:
            break;
    }
    return state;
}

const store = createStore(counter);
function plusOne() {
    return { type: "PLUG_ONE" }
}
function minusOne() {
    return { type: "MINUS_ONE" }
}
export class Counter extends Component {
    render() {
        const { count, plusOne, minusOne } = this.props;
        return (
            <div>
                <button onClick={minusOne}>-</button>
                {this.props.count}
                <button onClick={plusOne}>+</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ plusOne, minusOne }, dispatch);
}

const ConnectComponent=connect(mapStateToProps,mapDispatchToProps)(Counter)

export default class CounterSample extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectComponent />
            </Provider>
        )
    }
}
