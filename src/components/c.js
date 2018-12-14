import React, { Component } from 'react'
import A from './a';
 class c extends Component {
  render() {
    return (
      <div>
          <input type="text" {...this.props} /> 
        c
      </div>
    )
  }
}
export default A('right')(c)