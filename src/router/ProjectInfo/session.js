import React, { Component } from 'react';
import styles from './session.module.scss';

class Session extends Component{

    constructor(props) {
        super(props);
        this.state = {
            // 九宫格内容list
            records: [
                {
                    "activityLinkUrl": "",
                    "id": 0,
                    "projectName": "玉皇山业主七夕活动",
                    "providers": [],
                    "providersName": "玉皇山物业",
                    "servicePlace": "新移课堂",
                    "serviceTime": "2019/08/07 14:00"
                },
                {
                    "activityLinkUrl": "",
                    "id": 0,
                    "projectName": "三门县排舞大赛",
                    "providers": [],
                    "providersName": "文化生活服务队",
                    "servicePlace": "三门县镇中心小学",
                    "serviceTime": "2019/05/27 13:00"
                },
                {
                    "activityLinkUrl": "",
                    "id": 0,
                    "projectName": "宁波市农业科普讲座",
                    "providers": [],
                    "providersName": "宁波农业服务队",
                    "servicePlace": "宁波市体育馆",
                    "serviceTime": "2019/05/26 11:00"
                },
                {
                    "activityLinkUrl": "",
                    "id": 0,
                    "projectName": "玉皇山业主七夕活动",
                    "providers": [],
                    "providersName": "玉皇山物业",
                    "servicePlace": "新移课堂",
                    "serviceTime": "2019/08/07 14:00"
                },
                {
                    "activityLinkUrl": "",
                    "id": 0,
                    "projectName": "三门县排舞大赛",
                    "providers": [],
                    "providersName": "文化生活服务队",
                    "servicePlace": "三门县镇中心小学",
                    "serviceTime": "2019/05/27 13:00"
                }

            ],

        }
    }

    render(){
        return (

            <div className={styles['top']}>
                {
                    this.state.records.map((item,i)=>(
                        <div key = {i} className={styles['container']}>
                            <div className={styles['content']}>
                                <span className={styles['title']}>{item.projectName}</span><br/>
                                <span className={styles['team']}>{item.providersName}</span>

                                <div className={styles['when_where']}>
                                    <div className={styles['where']}>
                                        <span>地点</span>
                                        <span className={styles['text_right']}>{item.servicePlace}</span>
                                    </div>
                                    <div className={styles['when']}>
                                        <span>时间</span>
                                        <span className={styles['text_right']}>{item.serviceTime}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>

        )
    }

}

export default Session;