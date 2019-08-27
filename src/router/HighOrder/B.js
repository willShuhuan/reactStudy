import React, { Component } from 'react';
import d from "./D";

@d
class B extends Component{
    render() {
        return(
            <div>
                这是B组件
            </div>
        )
    }
}

export default B