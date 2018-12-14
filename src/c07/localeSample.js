import React, { Component } from 'react'

const cnLanguage = {
    "submit": "提交",
    "cancle": "取消"
}
const enLanguage = {
    "submit": "Submit",
    "cancle": "Cancle"
}


const LocaleContext = React.createContext(enLanguage);

class LocaleParent extends Component {
    state = {
        language: enLanguage
    }
   toggleLanguage=()=> {
    
        let language = this.state.language === enLanguage ? cnLanguage : enLanguage;
        this.setState({
            language: language
        })
    }
    render() {
        return (
            <LocaleContext.Provider value={this.state.language}>
                <button onClick={this.toggleLanguage}>切换语言</button>
                <br />
                <br />
                {this.props.children}
                <br />
                <br />
            </LocaleContext.Provider>
        )
    }
}
class LocaleChild extends Component {
    render(){
        return (
            <LocaleContext.Consumer>{language=>Object.keys(language).map((key)=><button key={key}>{language[key]}</button>)}</LocaleContext.Consumer>
        )
    }
}

export default class localeSample extends Component {
    render() {
        return (
            <div>
                <LocaleParent>
                    <LocaleChild />
                </LocaleParent>
                <LocaleChild />
            </div>
        )
    }
}
