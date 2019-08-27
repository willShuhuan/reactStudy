import React, { Component } from 'react';

import styles from './index.module.scss';
import axios from '../../axios.js';
import BgLabel from '../../components/BgLabel';
import RelevantItem from '../../components/RelevantItem';

class News extends Component {

    state = {
        // query: getQueryString(this.props.location.search),
        detailInfo: {},
        relatedNews: [],
        InputValue : "",//输入框输入值
        itemInfo:{},
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

        alert(this.state.itemInfo.Title)
        window.location.href=this.state.itemInfo.LinkUrl
    }




    render() {

        const detailInfo = this.state.detailInfo;
        console.log("data=="+detailInfo.Title);
        const ContentDetail = '<p>	<img src="https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/caiyunnan/20150828/201508281617125744.png" alt="" /> </p><p>	2015年北京田径世锦赛进入第七比赛日，女子20公里竞走决赛结束，<span style="color:#337FE5;">中国选手刘虹以1小时27分45秒夺冠，吕秀芝获银牌，这也是中国田径队在本次世锦赛上收获的首枚金牌。</span> </p><br />竞走是中国的传统优势项目，诞生过陈跃玲、王丽萍等奥运冠军，男选手陈定也曾震惊了世界。目前，该项目的世界纪录就是中国选手刘虹创造的，成绩为1小时24分38秒，这一成绩同时也是今年的世界最好成绩，她是在6月6日拉科鲁尼亚的比赛中创造出这一佳绩的。该项目的世锦赛纪录由俄罗斯选手伊万诺娃在2005年赫尔辛基创造，成绩为1小时25秒41。<br /><br />今天决赛中，中国队派出了刘虹、吕秀芝、聂晶晶三名选手出战，比赛开始后吕秀芝、刘虹和德拉荷托瓦就走在了最前面，赛程过了1/3之后，中国两名选手逐渐甩开其他选手，遥遥领先，而且不断将优势扩大。8公里处，刘虹被第一次警告，她很绅士的举手示意自己确实犯规，不过可能是压力过大，刘虹随后又接到了第二次警告。10公里时，刘虹的成绩为44分19秒排名第一，吕秀芝排名第二，两名中国选手形成了第一集团，互相换位，保持着领先的优势。<br /><br />刘虹随后被第三次警告，想夺金和破世界纪录的心情让她的技术动作有些变形。15公里处，吕秀芝和刘虹的成绩为1小时6分24秒，继续领先。随后乌克兰选手奥利亚诺夫斯卡越走越快，逐渐缩小了与两名中国选手的差距，在1公里中将差距就缩小了5秒，使得刘虹和吕秀芝也加快了步伐。<br /><br /><p>	两名中国选手在最后5公里顶住了压力，克服了体能消耗过大带来的不利，<span style="color:#337FE5;">最终刘虹以1小时27分45秒的成绩获得了金牌，吕秀芝获得了银牌，乌克兰选手奥利亚诺夫斯卡获得了铜牌。</span> </p><p>	<br /></p><p>	责编:戴炘含</p>';

        return(
            <div className={styles['page-wrap']}>
                {/*正文*/}
                <h1 className={styles['news-title']} >{detailInfo.Title}</h1>
                <div className={styles['news-source']}>
                    <span  >来源:  <a href="#">{detailInfo.Source}</a></span>
                    <span className={styles['news-time']} > 发布时间：{detailInfo.IssueTime}</span>
                </div>

                <div className={styles['news-content']}>
                    {/*<img src={detailInfo.ImgUrl}*/}
                         {/*alt="新闻图片"/>*/}
                    {/*<p> {detailInfo.Meno}</p>*/}
                    <div  dangerouslySetInnerHTML={{__html: ContentDetail}}/>
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
                                    value = {this.state.itemInfo=this.state.relatedNews[0]}
                                    // onClick={info=>{window.location.href=info.LinkUrl}
                                    onClick={this.handleItemClick.bind(this)}
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
                            // value={this.state.InputValue}
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