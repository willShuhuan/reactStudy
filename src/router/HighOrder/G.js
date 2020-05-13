import React, {Component} from 'react';
import modifyPropsHOC from "./E";

@modifyPropsHOC
class G extends Component {
    render() {
        return (
            <p>
                我是p
            </p>
        );
    }
}

export default G;