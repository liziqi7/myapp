import React, { Component } from 'react'

 class Func extends Component {
  render() {
    return (
      <div>
          {this.props.children('Nate wang')}
      </div>
    )
  }
}
export default class MyComponet extends Component{
    render(){
        return (
            <div>
                <Func>
                    {(name)=>(<div>{name}</div>)}
                </Func>

            </div>
        )
    }
}
