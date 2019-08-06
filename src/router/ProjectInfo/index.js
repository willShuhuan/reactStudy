import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';
import axios from "../../axios";

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

        }
        this.focusTab=this.focusTab.bind(this)
    }



    componentDidMount() {
        this.getProjectInfo();
    }

    // 获取项目详情
    // http://testwmapp.xinhuaapp.com/server/project/detail
    getProjectInfo() {
        var url = 'project/detail';
        axios.post(url, {

            id: 333,

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

        return(
            <div>
                {/*头部展示信息*/}
                <div className={styles['head']}>

                </div>

                <div>
                    <ul className={styles["tab"]}>
                        <li  className={this.state.tab1}  value={1} onClick={this.focusTab}>介绍</li>
                        <li  className={this.state.tab2} value={2} onClick={this.focusTab}>场次</li>
                        <li  className={this.state.tab3} value={3} onClick={this.focusTab}>评价</li>
                    </ul>
                </div>

                <div className="content">
                    <div  className={this.state.content1}><iframe src={'https://www.pgyer.com/x2wP'}/></div>
                    <div  className={this.state.content2}><h1>场次</h1></div>
                    <div  className={this.state.content3}><h1>评价</h1></div>
                </div>


            </div>
        )


    }

}

export default ProjectInfo;