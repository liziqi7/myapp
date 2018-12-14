import React, { Component } from 'react'
import './comments.css'
import CommnetList from './commentList'
import CommnetForm from './commentForm'
export default class Comments extends Component {
    
    constructor(props){
        super(props);
        this.state={
            count:0,
            list:[{
              "img":"https://static001.geekbang.org/account/avatar/00/11/bb/b9/ab47feda.jpg",
              "name":"Jack",
              "title":"You jump, I jump"
            },{
              "img":"https://static001.geekbang.org/account/avatar/00/11/55/df/f517304b.jpg",
              "name":"Kevin",
              "title":"Hello Redux!"
            },{
              "img":"https://static001.geekbang.org/account/avatar/00/11/bb/b9/ab47feda.jpg",
              "name":"Bood",
              "title":"Hello Rekit!"
            },{
              "img":"https://static001.geekbang.org/account/avatar/00/11/bb/b9/ab47feda.jpg",
              "name":"Jack",
              "title":"You jump, I jump"
            }]
        }
    }

  render() {
    return (
      <div className="commnet-box">
        <h1>Comments({this.state.count})</h1>
        <CommnetList list={this.state.list}></CommnetList>
        <CommnetForm></CommnetForm>
      </div>
    )
  }
}
