import React from 'react'

export default (wrappedComponent) => class d extends wrappedComponent {
    static displayName=`newComponent(${wrappedComponent.name})`
    render() {
        const element = super.render();
        const newStyle = {
            color: element.type === "div" ? "red" : "green"
        }
        const newProps = { ...this.props, style: newStyle }
        return React.cloneElement(element,newProps,element.props.children)
    }
}
