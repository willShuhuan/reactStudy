import React from 'react';

import styles from './index.module.scss';

const BgLabel = ({ title }) => {
  return (
    <span className={styles['wrap']}>{ title }</span>
  );
};

BgLabel.defaultProps = {
  title: ''
};

export default BgLabel;
