import React, { Component } from 'react';
import d from "./D";
import modifyPropsHOC from "./E";
import C from "./C";
import style from "./index.module.scss"
import F from "./F";
import G from "./G";

//@d 等效 export default d(B)

// @d

// @modifyPropsHOC
class B extends Component{

    getName(){
        return '这是B组件'
    }
    render() {
        return(
            <div className={style['fontSize']}>
                这是最外层B组件<br/>
                {/*代理方式高阶组件*/}
                {/*<C name={'帅哥'} age={18} />*/}

                ---继承方式高阶组件---
                <F/>
                <G/>
            </div>
        )
    }
}

export default B