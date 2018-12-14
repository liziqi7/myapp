import React, { Component } from 'react'
import CommentItem from './commentItem'
export default class commnetList extends Component {


    render() {       
        return (
            <div className="commentList">  
                <ul>
                    {this.props.list.map((item,i)=><CommentItem key={i} item={item}></CommentItem>)}
                </ul>
            </div>
        )
    }
}
