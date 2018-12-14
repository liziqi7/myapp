import React, { Component } from 'react'
import './advanced_tab_select.css'
const SelectColor = [{
    "name": "Red",
    "value": "red"
}, {
    "name": "Blue",
    "value": "blue"
}, {
    "name": "Orange",
    "value": "orange"
}]

const SelectAnimal = [{
    "name": "Tiger",
    "value": "tiger"
}, {
    "name": "Elephant",
    "value": "elephant"
}, {
    "name": "Cow",
    "value": "cow"
}]

export class Advanced_tab_select_func extends Component {
    state = {
        color: "#fff"
    }
    render() {
        return (
            <div>
                {this.props.data.map((item) => (<button key={item.name} onClick={() => { this.props.onChange(item.value) }}>{item.name}</button>))}
                {this.props.value && this.props.children(this.props.value)}
            </div>
        )
    }
}

export default class advanced_tab_select extends Component {
    state = {
        color: '',
        animal: ''
    }
    render() {
        return (
            <div>
                <h1>Select Color</h1>
                <Advanced_tab_select_func data={SelectColor} value={this.state.color} onChange={c => this.setState({ "color": c })}>{(color) => (<div className="block" style={{ "backgroundColor": color }}></div>)}</Advanced_tab_select_func>
                <h1>Select Animal</h1>
                <Advanced_tab_select_func data={SelectAnimal} value={this.state.animal} onChange={c => this.setState({ "animal": c })}>{(animal) => (<p>{animal}</p>)}</Advanced_tab_select_func>
            </div >
        )
    }
}
