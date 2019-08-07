import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';
import axios from "../../axios";
import Session from './session';
import Score from './score';


class ProjectInfo extends Component{

    constructor(props){
        super(props)

        this.state = {
            data: {},
            sessionList: [],
            scoreList: [],
            tab1:styles["focus"],
            tab2:styles["normal"],
            tab3:styles["normal"],
            content1:styles["show"],
            content2:styles["none"],
            content3:styles["none"],
            topTab:styles['tab'],
            isScrollTop:true,
            headerHeight:0
        }
        this.myRef = React.createRef();
        this.focusTab=this.focusTab.bind(this)
        this.windowOnScroll();
        // let isScrollTop = true;
    }

    windowOnScroll(){

        let _this = this;
        let isScrollTop = this.state.isScrollTop;
        window.onscroll = function(){
            //获取滚动条滚动的距离
            //浏览器兼容 chrome 不认识body safari不认识document
            let h =  document.body.scrollTop+document.documentElement.scrollTop;
            console.log(h);
            if(h > _this.state.headerHeight){
                if(isScrollTop){
                    console.log('111');
                    isScrollTop = false;
                    _this.setState({
                        topTab:styles['tab_top']
                    });
                }
            }else {
                if (!isScrollTop) {
                    console.log("333");
                    isScrollTop = true;
                    _this.setState({
                        topTab: styles['tab_normal']
                    });
            }

            }
        }
    };

    componentDidMount() {

        this.getProjectInfo();
        let viewId = this.myRef.current;
        let viewHeight = ReactDOM.findDOMNode(viewId).offsetHeight
        this.setState({
            headerHeight:viewHeight
        });
        console.log("head height=="+viewHeight)

    }

    // 获取项目详情
    // http://testwmapp.xinhuaapp.com/server/project/detail
    getProjectInfo() {
        var url = '/project/detail';
        axios.post(url, {
            id: 333,
            headers: {
                'token': '7271e6befea95aae1b0059dbef794d5b7460738f8f75484ff0d3c7f24799c46c2617be8e30d7d86036dd9acf54a194050d1d8929b1b34220971a168719c88dff1564984809012'
            }
        }).then(res => {
            this.setState({
                data: res.data,

            }, () => {
                console.log("响应数据为" + res)
            });
        }).then(() => {

        });


    }

    focusTab(event) {

        let ref = event.target.value

        if(ref==1){
            this.setState({
                tab1: styles["focus"],
                tab2: styles["normal"],
                tab3: styles["normal"],
                content1:styles["show"],
                content2:styles["none"],
                content3:styles["none"],
            })
        }else if(ref==2){
            this.setState({
                tab1: styles["normal"],
                tab2: styles["focus"],
                tab3: styles["normal"],
                content1:styles["none"],
                content2:styles["show"],
                content3:styles["none"],
            })
        }else {
            this.setState({
                tab1: styles["normal"],
                tab2: styles["normal"],
                tab3: styles["focus"],
                content1:styles["none"],
                content2:styles["none"],
                content3:styles["show"],
            })
        }


    }

    render(){
        const detailInfo = this.state.data
        return(
            <div>
                {/*头部展示信息*/}
                <div className={styles['head']} ref={this.myRef}>
                    <img  src={detailInfo.pictureUrl} />
                    <div className={styles['content']}>
                        <p className={styles['content_title']}>{detailInfo.name}</p>
                        <div className={styles['content_type']}>
                            <div>
                                <ul>
                                    <li className={styles['star']}/>
                                    <li className={styles['star']}/>
                                    <li className={styles['star']}/>
                                    <li className={styles['star']}/>
                                    <li className={styles['star']}/>
                                </ul>
                            </div>
                            <span className={styles['content_type_score']}>5分</span>
                            <div className={styles['divider']}/>
                            <span className={styles['content_type_name']}>{detailInfo.name}</span>
                            <div className={styles['content_type_like']}>
                                <span className={styles['checked']}/>
                                <span >{detailInfo.thumbsUpTimes}</span>
                            </div>
                        </div>

                        <div className={styles['content_source']}>
                            <div>
                                <span className={styles['calander']} />
                                <span>服务周期：{detailInfo.beginServiceTime}-{detailInfo.endServiceTime}</span>
                            </div>
                            <div>
                                <span className={styles['location']}/>
                                <span>来源：{detailInfo.deptName}</span>
                            </div>
                        </div>


                    </div>

                    <div className={styles['divider']}/>

                </div>

                    <div className={styles['tab_container']}>
                        <ul className={this.state.topTab} >
                            <li  className={this.state.tab1}  value={1} onClick={this.focusTab}>介绍</li>
                            <li  className={this.state.tab2} value={2} onClick={this.focusTab}>场次</li>
                            <li  className={this.state.tab3} value={3} onClick={this.focusTab}>评价</li>
                        </ul>

                    </div>

                    <div className={styles['footer']}>
                        {/*<div  className={this.state.content1}><iframe src={'https://www.pgyer.com/x2wP'}/></div>*/}
                        <div  className={this.state.content1}><iframe src={detailInfo.projectIntroduceLinkUrl}/></div>
                        <div  className={this.state.content2}><Session/></div>
                        <div  className={this.state.content3}><Score/></div>
                    </div>



            </div>
        )


    }

}

export default ProjectInfo;