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
const LuckyDraw = loadable(() => import('./router/LuckyDraw'));//圆盘抽奖
const Lucky2 = loadable(() => import('./router/LuckyNine'));//九宫格抽奖
const Project = loadable(() => import('./router/ProjectInfo'));//新文明活动详情



const history = createBrowserHistory();


function handleClick(event) {
    //todo 搞清楚为何value只能设置为数字
    let value = event.target.value;
    switch (value){
        case 1:
            //另起一个窗口的写法
            // var tempwindow=window.open('_blank');
            // tempwindow.location='/hello/project';
            //或 window.open('/hello/project');
            window.location.href='/hello/newsDetail';
            break;
        case 2:
            window.location.href='/hello/vote';
            break;
        case 3:
            window.location.href='/hello/lucky9';
            break;
        case 4:
            window.location.href='/hello/project';
            break;
        default:
            window.location.href='#';
            break;
    }
}

function App() {
    
    return (

        <div>
            <article>
                <h4 style={{fontSize:'24px',textAlign:'center',paddingTop:'0px'}}>ReactApp启动页</h4>
                <ul style={{fontSize:'20px',lineHeight:'40px',color:'#237cda',marginLeft:'10px',paddingTop:'0px'}}>
                    <li value={1}  onClick={handleClick}>新闻详情</li>
                    <li value={2}  onClick={handleClick}>投票详情</li>
                    <li value={3}  onClick={handleClick}>九宫格抽奖</li>
                    <li value={4}  onClick={handleClick}>吸顶多tab项目详情</li>
                </ul>
            </article>

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
                    <Route path="/hello/project" component={Project} />
                </Switch>
            </Router>
        </div>

    );

}

export default App;