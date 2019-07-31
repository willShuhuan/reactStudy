import React, { Component } from 'react';
import ReactDOM from "react-dom";

let smallSize = {fontSize:'30pt'}

class HelloReact extends Component {
    render() {
        var dish = React.createElement("h1",null,"reactDom渲染")
        return(
            //react元素创建
            React.createElement("p",{id:'1',datatype:"title",style:smallSize},"ReactApp")
            //reactDom渲染

        // ReactDOM.render(dish,document.getElementById("root2"))
            // <div>
            //     <h1>Hello World</h1>
            // </div>

        )
    }
}

export default HelloReact;