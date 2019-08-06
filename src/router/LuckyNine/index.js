import React, { Component } from 'react'
import LuckyItem from './luckyitem' // 引入子组件
import styles from './index.module.scss';

export default class LuckyNine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 九宫格内容list
            list: [
                {id: 1, name: '现金5元'},
                {id: 2, name: '现金10元'},
                {id: 3, name: '小米电视'},
                {id: 4, name: '海尔冰箱'},
                {id: 5, name: '美的洗衣机'},
                {id: 6, name: '戴森吸尘器'},
                {id: 7, name: 'iPad'},
                {id: 8, name: '华为手机'},
            ],
            // 被选中的格子的ID
            activedId: '',
            // 中奖ID
            prizeId: null,
            // 获得prizeId之后计算出的动画次数
            times: 0,
            // 当前动画次数
            actTimes: 0,
            // 是否正在抽奖
            isRolling: false
        }
    }
    handleBegin() {
        // this.state.isRolling为false的时候才能开始抽，不然会重复抽取，造成无法预知的后果
        if (!this.state.isRolling) {
            // 点击抽奖之后，我个人做法是将于九宫格有关的状态都还原默认
            this.setState({
                activedId: '',
                prizeId: null,
                times: 0,
                actTimes: 0,
                isRolling: true
            }, () => {
                // 状态还原之后才能开始真正的抽奖
                this.handlePlay()
            })
        }
    }
    handlePlay() {
        // 中将id，可随机，可自己设定，我这里暂且定为4
        let prize = parseInt(Math.random()*(7+1),10);;
        console.log(prize)
        this.setState({
            prizeId: prize,
            activedId: 0
        })
        // 随机算出一个动画执行的最小次数，这里可以随机变更数值，按自己的需求来
        let times = this.state.list.length * Math.floor(Math.random() * 5 + 4)
        this.setState({
            times: times
        })
        // 抽奖正式开始
        this.begin = setInterval(() => {
            let num;

            if (this.state.activedId === this.state.prizeId && this.state.actTimes > this.state.times) {
                // 符合上述所有条件时才是中奖的时候，两个ID相同并且动画执行的次数大于(或等于也行)设定的最小次数
                clearInterval(this.begin)
                this.setState({
                    isRolling: false
                })
                return
            }

            // 以下是动画执行时对id的判断
            if (this.state.activedId === '') {
                num = 0
                this.setState({
                    activedId: num
                })
            } else {
                num = this.state.activedId
                if (num === 11) {
                    num = 0
                    this.setState({
                        activedId: num
                    })
                } else {
                    num = num + 1
                    this.setState({
                        activedId: num
                    })
                }
            }

            this.setState({
                actTimes: this.state.actTimes + 1
            })

        }, 100)
    }
    render() {
        const { list, activedId } = this.state;
        return (

            <div>
                <h2 >九宫格抽奖</h2>

                <div className={styles["demo"]}>
                    <div className={styles["start_button"]} onClick={() => this.handleBegin()}>开始</div>
                    <div className={styles["one"]}>
                        <LuckyItem content={list[0]} activedId={activedId}/>
                        <LuckyItem content={list[1]} activedId={activedId}/>
                        <LuckyItem content={list[2]} activedId={activedId}/>
                    </div>
                    <div className={styles["one"]}>
                        <LuckyItem content={list[7]} activedId={activedId}/>
                        <LuckyItem content={list[3]} activedId={activedId}/>
                    </div>
                    <div className={styles["one"]} style={{marginBottom:0}}>
                        <LuckyItem content={list[6]} activedId={activedId}/>
                        <LuckyItem content={list[5]} activedId={activedId}/>
                        <LuckyItem content={list[4]} activedId={activedId}/>
                    </div>
                </div>

            </div>
        );
    }
}

// export default LuckyNine;
