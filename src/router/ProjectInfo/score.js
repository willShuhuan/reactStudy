import React, { Component } from 'react';
import styles from './score.module.scss';

class Score extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // 九宫格内容list
            records: [
                {
                    "activityPoints": 3,
                    "content": "听说大家都在过节？不重要～今天还是工作+工作",
                    "createTime": "2019/08/08",
                    "deptName": "上城区实践所",
                    "id": 0,
                    "picUrls": ['https://wx2.sinaimg.cn/mw690/6ba7ecc9ly1g5qputey2nj20u00u043l.jpg',
                                'https://wx4.sinaimg.cn/mw690/005QjCkRly1g5r7ot2ug5j30u0140qc6.jpg',
                                'https://wx1.sinaimg.cn/mw690/9caf55f1gy1g5r5rs79yfj20rs0ijjys.jpg',
                                'https://wx2.sinaimg.cn/mw690/6ba7ecc9ly1g5qput8ydnj20u00u0n1t.jpg',
                                'https://wx4.sinaimg.cn/mw690/6ba7ecc9ly1g5qput18tkj20u00u0di5.jpg'],
                    "videoUrls": []
                },
                {
                    "activityPoints": 4,
                    "content": "英超新赛季即将开启，在老板阿布接手球队至今，盘点我们过往的积分，我们仍在英超占有优势。 ​​​​",
                    "createTime": "2019/08/07",
                    "deptName": "下城区实践所",
                    "id": 0,
                    "picUrls": ['https://wx2.sinaimg.cn/mw690/6ba7ecc9ly1g5qputey2nj20u00u043l.jpg',
                                'https://wx4.sinaimg.cn/mw690/005QjCkRly1g5r7ot2ug5j30u0140qc6.jpg',
                                'https://wx1.sinaimg.cn/mw690/9caf55f1gy1g5r5rs79yfj20rs0ijjys.jpg',
                                'https://wx2.sinaimg.cn/mw690/6ba7ecc9ly1g5qput8ydnj20u00u0n1t.jpg',
                                'https://wx4.sinaimg.cn/mw690/6ba7ecc9ly1g5qput18tkj20u00u0di5.jpg'],
                    "videoUrls": []
                },
                {
                    "activityPoints": 5,
                    "content": "这个七夕，人工智能都开始撒狗粮了...\n" +
                    "今天，NOMI和大疆Osmo Pocket相约要一起出发去看世界。\n" +
                    "这是他们的浪漫之旅！那你的呢？",
                    "createTime": "2019/08/06",
                    "deptName": "江干区实践所",
                    "id": 0,
                    "picUrls": ['https://wx2.sinaimg.cn/mw690/6ba7ecc9ly1g5qputey2nj20u00u043l.jpg',
                                'https://wx4.sinaimg.cn/mw690/005QjCkRly1g5r7ot2ug5j30u0140qc6.jpg',
                                'https://wx1.sinaimg.cn/mw690/9caf55f1gy1g5r5rs79yfj20rs0ijjys.jpg',
                                'https://wx2.sinaimg.cn/mw690/6ba7ecc9ly1g5qput8ydnj20u00u0n1t.jpg',
                                'https://wx4.sinaimg.cn/mw690/6ba7ecc9ly1g5qput18tkj20u00u0di5.jpg'],
                    "videoUrls": []
                }

            ],

        }
    }

    render(){

        let score = 4.2;
        let lis = [];
        for(let i=0;i<5;i++){
            if(i+1<=score){
                lis.push(<li key={i} className={styles['star']}/>)
            }else {
                if(score-i<0.5){
                    lis.push(<li key={i} className={styles['star_empty']}/>)
                }else {
                    lis.push(<li key={i} className={styles['star_half']}/>)
                }
            }
        }

        return (

            <div className={styles['top']}>
                {
                    this.state.records.map((item,i)=>(
                        <div key = {i} className={styles['container']}>
                            <div >
                                <span className={styles['title']}>{item.deptName}</span><br/>
                                <div className={styles['content_type']}>
                                    <div>
                                        <ul>
                                            {lis}
                                            {/*<li className={styles['star']}/>*/}
                                            {/*<li className={styles['star']}/>*/}
                                            {/*<li className={styles['star']}/>*/}
                                            {/*<li className={styles['star']}/>*/}
                                            {/*<li className={styles['star']}/>*/}
                                        </ul>
                                    </div>
                                    <span className={styles['content_type_score']}>{score}分</span>
                                    <div className={styles['divider']}/>
                                    <span className={styles['content_type_name']}>{item.createTime}</span>
                                </div>
                                <p className={styles['content']}>{item.content}</p>
                                <div className={styles['photo']}>
                                    {
                                        item.picUrls.map((v,j)=>(
                                            <img key={j} className={styles['photo_item']} src={v}/>
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default Score;