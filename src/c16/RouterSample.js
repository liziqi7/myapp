import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {MemoryRouter} from "react-router"

const Home=()=><h1>Home</h1>;

export default class RouterSample extends Component {
  render() {
    return (
      <Router>
        <div>
            <ul>
                <li>
                    <Link to="/home">home</Link>
                </li>
            </ul>
            <div>
            <Route path="/home" component={Home}></Route>
            </div>
        </div>
      </Router>
    )
  }
}
