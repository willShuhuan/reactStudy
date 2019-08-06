import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import loadable from 'loadable-components';
// import ReactDOM from "react-dom";

//基础入门
const Hello = loadable(() => import('./router/HelloReact'));
const Food = loadable(() => import('./router/Food'));
const Factory = loadable(() => import('./router/Factory'));


//实战页面
const Vote = loadable(() => import('./router/Vote'));//投票
const NEWS = loadable(() => import('./router/News'));//新闻详情
const FillScreen = loadable(() => import('./router/FillScreen'));//新闻详情2
const LuckyDraw = loadable(() => import('./router/LuckyDraw'));//抽奖
const Lucky2 = loadable(() => import('./router/LuckyNine'));//九宫格抽奖



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
                <Route path="/hello/lucky" component={LuckyDraw} />
                <Route path="/hello/lucky9" component={Lucky2} />
                <Route path="/hello/fillscreen" component={FillScreen} />
            </Switch>
        </Router>
    );

}

export default App;