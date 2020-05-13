import React, { Component } from 'react';
import A from "./A";

//代理方式的高阶组件
class C extends Component{

    constructor(props){
        super(props)
        this.state={
            value:''
        }
    }


    // getName(){
    //     return '这是C组件'
    // }

    render() {
        return(
            <div>
                {/*<input type='text' value={this.state.value} onInput={this.changeInput}/><br/>*/}

                这是被A包裹的C组件<br/>
                输入框：<input type='text' {...this.props}/><br/>
                名字叫：{this.props.name}<br/>
                年龄是：{this.props.age}<br/>
                性别是：{this.props.sex}
            </div>
        )
    }
}

export default A(C)