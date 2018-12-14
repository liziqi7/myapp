import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'



export default class menu extends Component {
  render() {
      const {routeMap}=this.props;
    return (
      <div className="menu">
          <ul>
            {Object.keys(routeMap).map(key=>(
                <li key={key}>
                    <NavLink to={key} replace>{key}</NavLink>
                </li>
            ))}
        </ul>
      </div>
    )
  }
}
