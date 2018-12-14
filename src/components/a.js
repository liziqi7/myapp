import React, { Component } from 'react'

const Box = (title) => (WrappedComponent) => class a extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  onChangeInput = (e) => {
    this.setState({
      value: e.target.value
    });
  }
  render() {
    const { age, ...otherProps } = this.props;
    const newProps = {
      value: this.state.value,
      onChange: this.onChangeInput
    }
    return (
      <div className="box">
        <div>{title}</div>
        <WrappedComponent age={age} {...otherProps} {...newProps} />
      </div>
    )
  }

}


export default Box;