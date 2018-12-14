import React, { PureComponent } from 'react'
import './index.css'
export default class snapshotSample extends PureComponent {
    state = {
        messages: []
    };
    handleNewMessage() {
        this.setState(prev => ({
            messages: [prev.messages.length, ...prev.messages]
        }))
    }
    componentDidMount() {
        for (let index = 0; index < 20; index++) {
            this.handleNewMessage();
        }
        this.itime = setInterval(() => {
            if (this.state.messages >= 200) {
                window.clearInterval(this.itime);
                this.itime = null;
            }
            this.handleNewMessage();
        }, 1000)
    }
    componentWillUnmount() {
        window.clearInterval(this.itime);
        this.itime = null;
    }
    getSnapshotBeforeUpdate() {
        return this.rootNode.scrollHeight;
    }

    componentDidUpdate(prevProps, prevState, prevScrollHeight) {
        const scrollTop = this.rootNode.scrollTop;
        if (scrollTop < 5) return;
        this.rootNode.scrollTop =
            scrollTop + (this.rootNode.scrollHeight - prevScrollHeight);
    }
    render() {
        return (
            <div className="snapshot-sample" ref={n => (this.rootNode = n)}>
                {this.state.messages.map(item => (<div key={item}>msg {item}</div>))}
            </div>
        )
    }
}
