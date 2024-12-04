import React from 'react';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <a className={s.link} href="/">
      <svg className={s.svg} width="64px" height="46px">
        <use href="/sprite.svg#icon-ua"></use>
      </svg>
      <svg className={s.svg2} width="20px" height="15px">
        <use href="/sprite.svg#icon-W"></use>
      </svg>
    </a>
  );
};

export default Logo;
