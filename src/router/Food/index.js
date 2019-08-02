import React, { Component } from 'react';



class Food extends React.Component {

    render() {

        return(


            //<div>
        //<h3>当代最受年轻人喜欢的饮品品牌</h3>
        //<ul>
        //<li>1 星巴克</li>
        //<li>2 可可</li>
        //<li>3 一点点</li>
        //<li>4 奈雪</li>
        //<li>5 喜茶</li>
        //<li>6 丧茶</li>
        //</ul>
        //</div>

            React.createElement(
                "div",
                null,
                React.createElement("h3",
                    null,
                    "年轻人最喜欢的饮品品牌"),
                React.createElement("ul",
                    null,
                    React.createElement("li",null,"1 星巴克"),
                    React.createElement("li",null,"2 星巴克"),
                    React.createElement("li",null,"3 星巴克"),
                    React.createElement("li",null,"4 星巴克"),
                    React.createElement("li",null,"5 星巴克"),
                    React.createElement("li",null,"6 星巴克"),
                ))


        )
    }



}

export default Food;