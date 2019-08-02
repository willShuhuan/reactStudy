import React, { Component } from 'react'
import styles from './index.module.scss';

class LuckyItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { content, activedId } = this.props;
        return (
            <div className={activedId === content.id ? styles['row_item-active'] : styles['row_item']} id={`row_item_${content}`}>
                {content.name}
            </div>
        );
    }
}

export default LuckyItem;