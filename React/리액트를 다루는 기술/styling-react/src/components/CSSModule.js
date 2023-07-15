import React from 'react';
import style from '../style/CSSModule.module.css';
import styles from '../style/CSSModule.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);
const cxss = classNames.bind(styles);
const CSSModule = () => {
  return (
    // <div className={`${style.wrapper} ${style.inverted}`}>
    //   안녕하세요, 저는 <span className="somthing">CSS Module!</span>
    // </div>
    <>
      <div className={cx('wrapper', 'inverted')}>
        안녕하세요, 저는 <span className="somthing">CSS Module!</span>
      </div>
      <div className={cxss('wrapper', 'inverted')}>
        안녕하세요, 저는 <span className="somthing">CSS Module!</span>
      </div>
    </>
  );
};

export default CSSModule;
