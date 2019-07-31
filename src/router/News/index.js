import React, { Component } from 'react';
import ReactDOM from "react-dom";

import styles from './index.module.scss';
// import { getQueryString } from 'src/utils';
import $ from 'jquery';
import axios from '../../axios.js';
import BgLabel from '../../components/BgLabel';
import RelevantItem from '../../components/RelevantItem';

class News extends Component {

    state = {
        // query: getQueryString(this.props.location.search),
        detailInfo: {},
        relatedNews: [],
        InputValue : "",//输入框输入值
    }

    componentDidMount() {
        this.getDetailInfo();
    }

    // 获取新闻详情
    getDetailInfo() {
        var url = '/ContentSvr.svc/GetContentDetailByWebApi' ;
        axios.get(url, {
            params: {
                AppId: 136,
                ProjectId:1,
                AppKey:'d0779',
                contentId:57177,
                channelType:0
            }

        }).then(res => {
            this.setState({
                detailInfo: res.Data.Detail,
                relatedNews: res.Data.Relateds

            }, () => {
                console.log("响应数据为"+res)
            });
        });

    }

    handleGetInputValue = (event) => {
        this.setState({
            InputValue : event.target.value,
        })
    };


    handleClick(){
        const {InputValue} = this.state;
        alert("提交了"+InputValue)
        this.setState({
            InputValue : '',
        })
    }

    handleItemClick(){
        const {InputValue} = this.state;
        alert("提交了"+InputValue)
        this.setState({
            InputValue : '',
        })
    }


    render() {
        const { detailInfo} = this.state;
        return(
            <div className={styles['page-wrap']}>
                {/*正文*/}
                <h1 className={styles['news-title']}>{detailInfo.Title}</h1>
                <div className={styles['news-source']}>
                    <span  >来源:  <a href="#">{detailInfo.Source}</a></span>
                    <span className={styles['news-time']} > 发布时间：{detailInfo.IssueTime}</span>
                </div>

                <div className={styles['news-content']}>
                    <img src={detailInfo.ImgUrl}
                         alt="新闻图片"/>
                        <p> {detailInfo.Meno}</p>
                    <p>北京市纪委认定的严重道路交通安全违法行为主要有：<span>无驾驶证驾驶机动车辆，发生道路交通事故后逃逸、故意破坏现场或者冒名顶替，饮酒后或醉酒驾驶机动车辆，</span>因抗拒或阻碍道路交通管理而受到行政处罚，因交通安全违法行为受到行政拘留处罚。</p>
                        <p>本文来源：<a href="http://www.xinhuanet.com">{detailInfo.Source}</a> </p>
                </div>
                <div className={styles['news-reads']}>
                    <span  >阅读次数：16526</span><div className={styles['fabulous']}><img src={require('../../static/img/zan1.png')}/><span >2</span></div>
                </div>

                {/*分享*/}
                <div className={styles['mo-sharetitle']}>
                    <p>
                        <span>分享</span>
                    </p>
                </div>
                <div className={styles['mo-sharebtn']} >
                    <p  >
                        <em className={styles['share-em']}>
                            <span className={styles['qq']}/>
                            <span className={styles['text']}>QQ</span>
                        </em>
                    </p>
                    <p >
                        <em className={styles['share-em']}>
                            <span className={styles['pyq']}/>
                            <span className={styles['text']}>朋友圈</span>
                        </em>
                    </p>
                    <p >
                        <em className={styles['share-em']}>
                            <span className={styles['wx']}/>
                            <span className={styles['text']}>微信</span>
                        </em>
                    </p>
                    <p >
                        <em className={styles['share-em']}>
                            <span className={styles['xl']}/>
                            <span className={styles['text']}>新浪微博</span>
                        </em>
                    </p>
                </div>

                {/*相关新闻*/}
                {
                    this.state.relatedNews
                        ?
                        <div className={styles['relevant-wrap']}>
                            <BgLabel title="相关新闻" />
                            <div className={styles['news-con']}>
                                <RelevantItem
                                    info={this.state.relatedNews ? this.state.relatedNews[0] : {}}
                                    onClick={info=>{window.location.href=info.LinkUrl}}
                                />
                            </div>
                        </div>
                        :
                        ''
                }

                {/*评论*/}
                <div className={styles['comment-submit']}>
                    <div>
                        <textarea
                            value={this.state.InputValue}
                            onChange={this.handleGetInputValue}
                            placeholder="在此输入评论内容"/>
                    </div>
                    <div className={styles['btnwrap']}>
                        <span onClick={this.handleClick.bind(this)}>发表评论</span>
                    </div>
                </div>


            </div>
        )

    }
}

export default News;