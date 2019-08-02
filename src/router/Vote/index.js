import React, { Component } from 'react';
import styles from './index.module.scss';
import axios from "../../axios";


class Vote extends Component {

    state = {
        // query: getQueryString(this.props.location.search),
        voteInfo: {},
        VoteOptionsList:[],
        VoteOptionsListLeft:[],
        VoteOptionsListRight:[],
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
                VoteOptionsList:res.Data.VoteData.VoteOptionsList,

            }, () => {
                console.log("响应数据为"+res)
            });
        }).then(()=>{
            this.sortList()
        });


    }

    sortList(){
        let leftList=[];
        let rightList=[];
        this.state.VoteOptionsList.map((item,index)=>{
            if (index%2==0){
                leftList.push(item)
            }else {
                rightList.push(item)
            }
        });

        this.setState({
            VoteOptionsListLeft:leftList,
            VoteOptionsListRight:rightList,
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
                        <input className={styles["tp-section-search-input"]} placeholder="输入编号或姓名搜索投票信息"/>
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


                    {/*选项列表*/}
                    <div className={styles["tp-section-pbl"]}>
                        <ul className={styles["fn-left"]}>

                            {
                                this.state.VoteOptionsListLeft.map((item,i)=>(
                                    <li key = {i*2}>
                                        <div className={styles["imgbar"]}>
                                            <img src={item.Img.src}/>
                                        </div>
                                        <div className={styles["tp-section-pbl-info"]}>
                                            <span className={styles["tp-section-pbl-info-span1"]}>{item.Title}</span>
                                            <span className={styles["tp-section-pbl-info-span2"]}>{item.Code}</span>
                                            <span className={styles["tp-section-pbl-info-span3"]}>{item.Ballot}
                                                <span className={styles["tp-section-pbl-info-span5"]}> 票</span>
                                            </span>
                                            <span  className={styles["tp-section-pbl-info-span4"]} thisid="93">{item.States==4?'已结束':'进行中'}</span>
                                        </div>
                                    </li>
                                ))
                            }


                       </ul>

                        <ul className={styles["fn-right"]}>
                            {
                                this.state.VoteOptionsListRight.map((item,i)=>(
                                    <li key = {(i*2+1)}>
                                        <div className={styles["imgbar"]}>
                                            <img src={item.Img.src}/>
                                        </div>
                                        <div className={styles["tp-section-pbl-info"]}>
                                            <span className={styles["tp-section-pbl-info-span1"]}>{item.Title}</span>
                                            <span className={styles["tp-section-pbl-info-span2"]}>{item.Code}</span>
                                            <span className={styles["tp-section-pbl-info-span3"]}>{item.Ballot}
                                                <span className={styles["tp-section-pbl-info-span5"]}> 票</span>
                                            </span>
                                            <span  className={styles["tp-section-pbl-info-span4"]} thisid="93">{item.States==4?'已结束':'进行中'}</span>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>

                        {/*{*/}
                            {/*this.state.VoteOptionsList.map((item,i)=>(*/}

                                {/*<ul key={i} className={i%2 == 0?styles['fn-left']:styles['fn-right']}>*/}

                                    {/*<li >*/}
                                        {/*<div className={styles["imgbar"]}>*/}
                                            {/*<img src={item.Img.src}/>*/}
                                        {/*</div>*/}
                                        {/*<div className={styles["tp-section-pbl-info"]}>*/}
                                            {/*<span className={styles["tp-section-pbl-info-span1"]}>{item.Title}</span>*/}
                                            {/*<span className={styles["tp-section-pbl-info-span2"]}>{item.Code}</span>*/}
                                            {/*<span className={styles["tp-section-pbl-info-span3"]}>{item.Ballot}*/}
                                                {/*<span className={styles["tp-section-pbl-info-span5"]}> 票</span>*/}
                                            {/*</span>*/}
                                            {/*<span  className={styles["tp-section-pbl-info-span4"]} thisid="93">{item.States==4?'已结束':'进行中'}</span>*/}
                                        {/*</div>*/}
                                    {/*</li>*/}

                                {/*</ul>*/}

                            {/*))*/}

                        {/*}*/}




                    </div>
                </section>

            </div>
        )
    }


}

export default Vote;