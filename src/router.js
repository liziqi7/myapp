import React from 'react'
import { HashRouter as Router, Route,Switch,Redirect } from 'react-router-dom'
import App from './App'
import Index from './c01/index'
import Time from './c01/time'
import CommentBox from './c02/comments'
import SnapshotSample from './c04/snapshotSample'
import Func from './c05/func'
import Advanced_tab_select from './c05/advanced_tab_select'
import LocaleSample from './c07/localeSample'
import PureRedux from './c11/pureRedux'
import Counter from './c12/Counter'
import RouterSample from './c16/RouterSample'

const routeMap={
    "index":Index,
    "time":Time,
    "comment-box":CommentBox,
    "snapshpt-sample":SnapshotSample,
    "func":Func,
    "advanced-tab-select":Advanced_tab_select,
    'locale-sample':LocaleSample,
    'pure-Redux':PureRedux,
    'Counter':Counter,
    'RouterSample':RouterSample
}
export default class IRouter extends React.Component {
    render(){
        return (
            <div className="page">
             <Router>
             <App routeMap={routeMap}>
                 <Switch>
                     {Object.keys(routeMap).map(key=>(
                        <Route key={key} path={"/"+key} component={routeMap[key]}></Route>
                     ))}                     
                 </Switch>
             </App>
             </Router>
            </div>
        )
    }
}