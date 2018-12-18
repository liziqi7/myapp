import React, { Component } from 'react'
import { createStore, combineReducers, bindActionCreators } from 'redux'


export default class pureRedux extends Component {
    run() {
        this.plusOnebind();
        // this.store.dispatch(this.plusOne())
        this.store.dispatch(this.minus_one())
        this.store.dispatch(this.customCount())
    }
    plusOne() {
        return { type: "PlUS_ONE" }
    }
    minus_one() {
        return { type: "MINUS_ONE" }
    }
    customCount() {
        return { type: "CUSTOM_COUNT", payload: { count: 5 } }
    }
    componentDidMount() {
        //Store initial state
        const initialSate = { count: 0 }
        // reducer
        const counter = (state = initialSate, action) => {
            switch (action.type) {
                case "PlUS_ONE":
                    return { count: state.count + 1 }
                case "MINUS_ONE":
                    return { count: state.count - 1 }
                case "CUSTOM_COUNT":
                    return { count: state.count + action.payload.count }
                default:
                    break;
            }
            return state;
        }
        const todos = (state = {}) => state;
        this.store = createStore(combineReducers({ counter, todos }));
        this.plusOnebind = bindActionCreators(this.plusOne, this.store.dispatch);

        this.store.subscribe(() => console.log(this.store.getState()))
    
    }
    render() {
        return (
            <div>
                <button onClick={() => this.run()}>Run</button>
                <p>*请打开控制台查看运行结果</p>
            </div>
        )
    }
}
