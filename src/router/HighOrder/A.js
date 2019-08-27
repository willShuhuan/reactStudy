import React, { Component } from 'react';

function A(WrappedComponent) {
    return class A extends Component{
        render() {
            return(
                <div >
                    <div >
                        <div>提示</div>
                        <div>x</div>
                    </div>
                    <div>
                        <WrappedComponent/>
                    </div>

                </div>
            )
        }
    }
}

export default A;