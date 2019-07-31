import React, { Component } from 'react';
import ReactDOM from "react-dom";
import styles from './index.module.scss';
import axios from "../../axios";


class Vote extends Component {




    state = {
        // query: getQueryString(this.props.location.search),
        voteInfo: {},
        InputValue : "",//输入框输入值
    }

    componentDidMount() {
        this.getVoteInfo();
    }

    // 获取投票详情
    // http://ynparty.api.xinhuaapp.com:81/Service/ActSvr.svc/GetActivityWebApi?id=167&projectId=5&appId=110096&pageNo=1&objId=&keyWords=
    getVoteInfo() {
        var url = '/ActSvr.svc/GetActivityWebApi' ;
        axios.get(url, {
            params: {
                id: 167,
                projectId:5,
                appId:110096,
                pageNo:1,
                objId:1000000,
                keyWords:'',
            }

        }).then(res => {
            this.setState({
                voteInfo: res.Data.VoteData,

            }, () => {
                console.log("响应数据为"+res)
            });
        });

    }


    render() {
        const { voteInfo} = this.state;
        return(
            <div className={styles['fn-contain']}>
                <header className={styles["tp-header"]}>
                    <div className={styles["tp-header-time"]}>2019.8.1-2019.10.1</div>
                    <img className={styles["tp-header-img"]} src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/28/2017122821062848942150.jpg?x-oss-process=image/crop,x_0,y_-3,w_997,h_494/quality,q_80/format,jpg"/>
                        <div className={styles["tp-header-nav"]}>
                            <div className={styles["tp-header-nav-child"]}>
                                <div className={styles["icon1"]}>
                                    <img src={require('../../static/img/icon1.png')}/>
                                </div>
                                <span className={styles["font1"]}>投票</span>
                            </div>
                            <div className={styles["tp-header-nav-child"]}>
                                <div className={styles["icon2"]}>
                                    <img src={require('../../static/img/icon2.png')}/>
                                </div>
                                <span className={styles["font2"]}>排行</span>
                            </div>
                            <div className={styles["tp-header-nav-child"]}>
                                <div className={styles["icon3"]}>
                                    <img src={require('../../static/img/icon3.png')}/>
                                </div>
                                <span className={styles["font3"]}>规则</span>
                            </div>
                        </div>
                </header>

                <section className={styles["tp-section"]}>
                    <div className={styles["tp-section-search"]}>
                        <input className={styles["tp-section-search-input"]} placeholder="输入编号或姓名搜索投票信息..."/>
                            <img className={styles["tp-section-search-icon"]} src={require('../../static/img/search.png')}/>
                                <div className={styles["tp-section-search-button"]}>搜索</div>
                    </div>
                    <div className={styles["tp-section-info"]}>
                        <div className={styles["tp-section-info-detail"]}>
                            <span className={styles["tp-section-info-span1-color1"]}>{voteInfo.ActorNo}</span>
                            <span className={styles["tp-section-info-span2-color1"]}>位</span>
                            <span className={styles["tp-section-info-span3"]}>参赛选手</span>
                        </div>
                        <div className={styles["tp-section-info-detail"]}>
                            <span className={styles["tp-section-info-span1-color2"]}>{voteInfo.AllBallot}
                            <span className={styles["tp-section-info-span2-color2"]}>票</span></span>
                            <span className={styles["tp-section-info-span3"]}>累积投票</span>
                        </div>
                        <div className={styles["tp-section-info-detail"]}>
                            <span className={styles["tp-section-info-span1-color3"]}>{voteInfo.UserNo/10000}
                            <span className={styles["tp-section-info-span2-color3"]}>万</span></span>
                            <span className={styles["tp-section-info-span3"]}>参与投票人数</span>
                        </div>
                    </div>
                    {/*<div id="tp-section-pbl" className={styles["fn-clear">*/}
                        {/*<ul className={styles["fn-left" id="j-list-left"><li><div className={styles["imgbar" style="height:192px;"><img onclick="goToHtml(93,0,1,10,'')" src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/29/2017122910302819253072.jpg?x-oss-process=image/crop,x_0,y_0,w_500,h_500/quality,q_80/format,jpg"></div><div className={styles["tp-section-pbl-info"><span className={styles["tp-section-pbl-info-span1">001</span><span className={styles["tp-section-pbl-info-span2">01号</span><span className={styles["tp-section-pbl-info-span3">133<span className={styles["tp-section-pbl-info-span5"> 票</span></span><span onclick="isUnVote(1)" className={styles["tp-section-pbl-info-span4 tp-section-pbl-color2" thisid="93">已结束</span></div></li><li><div className={styles["imgbar" style="height:192px;"><img onclick="goToHtml(98,0,1,10,'')" src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/29/2017122910414541806898.jpg?x-oss-process=image/crop,x_0,y_0,w_500,h_500/quality,q_80/format,jpg"></div><div className={styles["tp-section-pbl-info"><span className={styles["tp-section-pbl-info-span1">006</span><span className={styles["tp-section-pbl-info-span2">06号</span><span className={styles["tp-section-pbl-info-span3">128<span className={styles["tp-section-pbl-info-span5"> 票</span></span><span onclick="isUnVote(1)" className={styles["tp-section-pbl-info-span4 tp-section-pbl-color2" thisid="98">已结束</span></div></li><li><div className={styles["imgbar" style="height:192px;"><img onclick="goToHtml(99,0,1,10,'')" src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/29/2017122910421643282096.jpg?x-oss-process=image/crop,x_0,y_0,w_500,h_500/quality,q_80/format,jpg"></div><div className={styles["tp-section-pbl-info"><span className={styles["tp-section-pbl-info-span1">007</span><span className={styles["tp-section-pbl-info-span2">07号</span><span className={styles["tp-section-pbl-info-span3">115<span className={styles["tp-section-pbl-info-span5"> 票</span></span><span onclick="isUnVote(1)" className={styles["tp-section-pbl-info-span4 tp-section-pbl-color2" thisid="99">已结束</span></div></li><li><div className={styles["imgbar" style="height:192px;"><img onclick="goToHtml(104,0,1,10,'')" src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/29/2017122910444927176904.jpg?x-oss-process=image/crop,x_0,y_0,w_500,h_500/quality,q_80/format,jpg"></div><div className={styles["tp-section-pbl-info"><span className={styles["tp-section-pbl-info-span1">012</span><span className={styles["tp-section-pbl-info-span2">12号</span><span className={styles["tp-section-pbl-info-span3">99<span className={styles["tp-section-pbl-info-span5"> 票</span></span><span onclick="isUnVote(1)" className={styles["tp-section-pbl-info-span4 tp-section-pbl-color2" thisid="104">已结束</span></div></li><li><div className={styles["imgbar" style="height:192px;"><img onclick="goToHtml(109,0,1,10,'')" src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/29/2017122910472478915541.jpg?x-oss-process=image/crop,x_0,y_0,w_500,h_500/quality,q_80/format,jpg"></div><div className={styles["tp-section-pbl-info"><span className={styles["tp-section-pbl-info-span1">017</span><span className={styles["tp-section-pbl-info-span2">17号</span><span className={styles["tp-section-pbl-info-span3">86<span className={styles["tp-section-pbl-info-span5"> 票</span></span><span onclick="isUnVote(1)" className={styles["tp-section-pbl-info-span4 tp-section-pbl-color2" thisid="109">已结束</span></div></li><li><div className={styles["imgbar" style="height:192px;"><img onclick="goToHtml(101,0,1,10,'')" src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/29/2017122910431979775695.jpg?x-oss-process=image/crop,x_0,y_0,w_500,h_500/quality,q_80/format,jpg"></div><div className={styles["tp-section-pbl-info"><span className={styles["tp-section-pbl-info-span1">009</span><span className={styles["tp-section-pbl-info-span2">09号</span><span className={styles["tp-section-pbl-info-span3">78<span className={styles["tp-section-pbl-info-span5"> 票</span></span><span onclick="isUnVote(1)" className={styles["tp-section-pbl-info-span4 tp-section-pbl-color2" thisid="101">已结束</span></div></li><li><div className={styles["imgbar" style="height:192px;"><img onclick="goToHtml(97,0,1,10,'')" src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/29/2017122910411449614218.jpg?x-oss-process=image/crop,x_0,y_0,w_500,h_500/quality,q_80/format,jpg"></div><div className={styles["tp-section-pbl-info"><span className={styles["tp-section-pbl-info-span1">005</span><span className={styles["tp-section-pbl-info-span2">05号</span><span className={styles["tp-section-pbl-info-span3">53<span className={styles["tp-section-pbl-info-span5"> 票</span></span><span onclick="isUnVote(1)" className={styles["tp-section-pbl-info-span4 tp-section-pbl-color2" thisid="97">已结束</span></div></li><li><div className={styles["imgbar" style="height:192px;"><img onclick="goToHtml(107,0,1,10,'')" src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/29/2017122910462481593036.jpg?x-oss-process=image/crop,x_0,y_0,w_500,h_500/quality,q_80/format,jpg"></div><div className={styles["tp-section-pbl-info"><span className={styles["tp-section-pbl-info-span1">015</span><span className={styles["tp-section-pbl-info-span2">15号</span><span className={styles["tp-section-pbl-info-span3">22<span className={styles["tp-section-pbl-info-span5"> 票</span></span><span onclick="isUnVote(1)" className={styles["tp-section-pbl-info-span4 tp-section-pbl-color2" thisid="107">已结束</span></div></li><li><div className={styles["imgbar" style="height:192px;"><img onclick="goToHtml(105,0,1,10,'')" src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/29/2017122910452643198591.jpg?x-oss-process=image/crop,x_0,y_0,w_500,h_500/quality,q_80/format,jpg"></div><div className={styles["tp-section-pbl-info"><span className={styles["tp-section-pbl-info-span1">013</span><span className={styles["tp-section-pbl-info-span2">13号</span><span className={styles["tp-section-pbl-info-span3">15<span className={styles["tp-section-pbl-info-span5"> 票</span></span><span onclick="isUnVote(1)" className={styles["tp-section-pbl-info-span4 tp-section-pbl-color2" thisid="105">已结束</span></div></li></ul>*/}
                        {/*<ul className={styles["fn-right" id="j-list-right"><li><div className={styles["imgbar" style="height:192px;"><img onclick="goToHtml(94,0,1,10,'')" src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/29/2017122910313641253015.jpg?x-oss-process=image/crop,x_0,y_0,w_500,h_500/quality,q_80/format,jpg"></div><div className={styles["tp-section-pbl-info"><span className={styles["tp-section-pbl-info-span1">002</span><span className={styles["tp-section-pbl-info-span2">02号</span><span className={styles["tp-section-pbl-info-span3">132<span className={styles["tp-section-pbl-info-span5"> 票</span></span><span onclick="isUnVote(1)" className={styles["tp-section-pbl-info-span4 tp-section-pbl-color2" thisid="94">已结束</span></div></li><li><div className={styles["imgbar" style="height:192px;"><img onclick="goToHtml(96,0,1,10,'')" src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/29/2017122910335722816598.jpg?x-oss-process=image/crop,x_0,y_0,w_500,h_500/quality,q_80/format,jpg"></div><div className={styles["tp-section-pbl-info"><span className={styles["tp-section-pbl-info-span1">004</span><span className={styles["tp-section-pbl-info-span2">04号</span><span className={styles["tp-section-pbl-info-span3">117<span className={styles["tp-section-pbl-info-span5"> 票</span></span><span onclick="isUnVote(1)" className={styles["tp-section-pbl-info-span4 tp-section-pbl-color2" thisid="96">已结束</span></div></li><li><div className={styles["imgbar" style="height:192px;"><img onclick="goToHtml(103,0,1,10,'')" src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/29/2017122910441222688567.jpg?x-oss-process=image/crop,x_0,y_0,w_500,h_500/quality,q_80/format,jpg"></div><div className={styles["tp-section-pbl-info"><span className={styles["tp-section-pbl-info-span1">011</span><span className={styles["tp-section-pbl-info-span2">11号</span><span className={styles["tp-section-pbl-info-span3">111<span className={styles["tp-section-pbl-info-span5"> 票</span></span><span onclick="isUnVote(1)" className={styles["tp-section-pbl-info-span4 tp-section-pbl-color2" thisid="103">已结束</span></div></li><li><div className={styles["imgbar" style="height:192px;"><img onclick="goToHtml(100,0,1,10,'')" src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/29/2017122910424711343270.jpg?x-oss-process=image/crop,x_0,y_0,w_500,h_500/quality,q_80/format,jpg"></div><div className={styles["tp-section-pbl-info"><span className={styles["tp-section-pbl-info-span1">008</span><span className={styles["tp-section-pbl-info-span2">08号</span><span className={styles["tp-section-pbl-info-span3">87<span className={styles["tp-section-pbl-info-span5"> 票</span></span><span onclick="isUnVote(1)" className={styles["tp-section-pbl-info-span4 tp-section-pbl-color2" thisid="100">已结束</span></div></li><li><div className={styles["imgbar" style="height:192px;"><img onclick="goToHtml(106,0,1,10,'')" src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/29/2017122910455947602638.jpg?x-oss-process=image/crop,x_0,y_0,w_500,h_500/quality,q_80/format,jpg"></div><div className={styles["tp-section-pbl-info"><span className={styles["tp-section-pbl-info-span1">014</span><span className={styles["tp-section-pbl-info-span2">14号</span><span className={styles["tp-section-pbl-info-span3">85<span className={styles["tp-section-pbl-info-span5"> 票</span></span><span onclick="isUnVote(1)" className={styles["tp-section-pbl-info-span4 tp-section-pbl-color2" thisid="106">已结束</span></div></li><li><div className={styles["imgbar" style="height:192px;"><img onclick="goToHtml(95,0,1,10,'')" src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/29/2017122910331576719788.jpg?x-oss-process=image/crop,x_0,y_0,w_500,h_500/quality,q_80/format,jpg"></div><div className={styles["tp-section-pbl-info"><span className={styles["tp-section-pbl-info-span1">003</span><span className={styles["tp-section-pbl-info-span2">03号</span><span className={styles["tp-section-pbl-info-span3">63<span className={styles["tp-section-pbl-info-span5"> 票</span></span><span onclick="isUnVote(1)" className={styles["tp-section-pbl-info-span4 tp-section-pbl-color2" thisid="95">已结束</span></div></li><li><div className={styles["imgbar" style="height:192px;"><img onclick="goToHtml(108,0,1,10,'')" src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/29/2017122910470644959100.jpg?x-oss-process=image/crop,x_0,y_0,w_500,h_500/quality,q_80/format,jpg"></div><div className={styles["tp-section-pbl-info"><span className={styles["tp-section-pbl-info-span1">016</span><span className={styles["tp-section-pbl-info-span2">16号</span><span className={styles["tp-section-pbl-info-span3">50<span className={styles["tp-section-pbl-info-span5"> 票</span></span><span onclick="isUnVote(1)" className={styles["tp-section-pbl-info-span4 tp-section-pbl-color2" thisid="108">已结束</span></div></li><li><div className={styles["imgbar" style="height:192px;"><img onclick="goToHtml(102,0,1,10,'')" src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/Party/5/110096/act/2017/12/29/2017122910434077917709.jpg?x-oss-process=image/crop,x_0,y_0,w_500,h_500/quality,q_80/format,jpg"></div><div className={styles["tp-section-pbl-info"><span className={styles["tp-section-pbl-info-span1">010</span><span className={styles["tp-section-pbl-info-span2">10号</span><span className={styles["tp-section-pbl-info-span3">21<span className={styles["tp-section-pbl-info-span5"> 票</span></span><span onclick="isUnVote(1)" className={styles["tp-section-pbl-info-span4 tp-section-pbl-color2" thisid="102">已结束</span></div></li></ul>*/}
                    {/*</div>*/}
                </section>

            </div>
        )
    }


}

export default Vote;