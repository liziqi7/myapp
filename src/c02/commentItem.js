import React, { Component } from 'react'

export default class commentItem extends Component {
  render() {
      const {img,name,title}=this.props.item;
    return (
      <div className="commentItem clearfix">
        <img src={img} />
        <div className="commentContent">
            <a href="javascript:;">{name}</a>
            <p>{title}</p>
        </div>
      </div>
    )
  }
}
