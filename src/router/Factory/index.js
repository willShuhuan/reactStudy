// eslint-disable-next-line
import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Factory extends React.Component {

    render() {

        return(

            React.createElement("ul",
                null,
                React.createElement("li",null,"1 星巴克"),
                React.createElement("li",null,"2 星巴克"),
                React.createElement("li",null,"3 星巴克"),
                React.createElement("li",null,"4 星巴克"),
                React.createElement("li",null,"5 星巴克"),
                React.createElement("li",null,"6 星巴克"),
            )

        )
    }



}

export default Factory;