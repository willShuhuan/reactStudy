import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import loadable from 'loadable-components';
// import ReactDOM from "react-dom";

const Hello = loadable(() => import('./router/HelloReact'));
const Food = loadable(() => import('./router/Food'));
const Factory = loadable(() => import('./router/Factory'));
const Vote = loadable(() => import('./router/Vote'));
const NEWS = loadable(() => import('./router/News'));


const history = createBrowserHistory();

function App() {
    // return React.createElement("h1",{id:'1',datatype:"title"},"ReactApp启动页");
    return (
        <Router history={history}>
            <Switch>
                <Route path="/hello/helloReact" component={Hello} />
                <Route path="/hello/helloFood" component={Food} />
                <Route path="/hello/helloFactory" component={Factory} />
                <Route path="/hello/vote" component={Vote} />
                <Route path="/hello/newsDetail" component={NEWS} />
            </Switch>
        </Router>
    );

}

export default App;