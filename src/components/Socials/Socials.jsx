import React from 'react';
import s from './Socials.module.css';

const Socials = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <svg className={s.icon} width="24px" height="24px">
          <use href="/sprite.svg#icon-insta"></use>
        </svg>
      </li>
      <li className={s.item}>
        <svg className={s.icon} width="24px" height="24px">
          <use href="/sprite.svg#icon-fb"></use>
        </svg>
      </li>
      <li className={s.item}>
        <svg className={s.icon} width="24px" height="24px">
          <use href="/sprite.svg#icon-tg"></use>
        </svg>
      </li>
    </ul>
  );
};

export default Socials;
