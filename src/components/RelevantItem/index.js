import React from 'react';

import styles from './index.module.scss';

const RelevantItem = ({ info, onClick }) => {
  return (
    <div className={styles['wrap']} onClick={() => onClick(info)}>
      <div
        className={styles['item-img']}
        style={{ background: `#ededed url('https://xinhuaapp-img.oss-cn-hangzhou.aliyuncs.com/caiyunnan/20161118/201611181554567577.jpg') no-repeat`,
             backgroundSize: 'cover', backgroundPosition: 'center'}}
      />
      <div
        className={styles['item-info']}
      >
        <div className={styles['top']}>
          <p className={styles['title']}>{info.Title}</p>
          <span className={styles['type']}>{info.Source}</span>
        </div>
        <div className={styles['bottom']}>
          <p className={styles['time']}>{info.IssueTime}</p>
        </div>
      </div>
    </div>
  );
};

RelevantItem.defaultProps = {
  info: {},
  onClick: function() {}
};

export default RelevantItem;
