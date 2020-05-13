import React, {Component} from 'react';
import modifyPropsHOC from "./E";

@modifyPropsHOC
class F extends Component {
    render() {
        return (
            <div>
                我是div
            </div>
        );
    }
}

export default F;