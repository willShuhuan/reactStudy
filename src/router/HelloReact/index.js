import React, { Component } from 'react';

let smallSize = {fontSize:'30pt'}

class HelloReact extends Component {
    render() {
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