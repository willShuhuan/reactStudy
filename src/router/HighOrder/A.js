import React, { Component } from 'react';

function A(WrappedComponent) {
    return class A extends Component{

        refc(instance){
            // instance.getName&&alert(instance.getName())
        }

        constructor(props){
            super(props)
            this.state={
                value:''
            }
        }

        onInputChange=(e)=>{
            this.setState({
                value:e.target.value
            })
        }

        render() {
            const {age,...otherProps} = this.props
            const newProps ={
                value:this.state.value,
                onInput:this.onInputChange
            }
            return(
                <div >
                    <div >
                        外层A组件，A向被包裹组件提供属性
                    </div>
                    <div>
                        <WrappedComponent sex = {'男'}{...this.props} ref = {this.refc.bind(this)} {...newProps}/>
                        {/*删除了年龄属性*/}
                        {/*<WrappedComponent sex = {'男'}{...otherProps}/>*/}
                    </div>

                </div>
            )
        }
    }
}

export default A;