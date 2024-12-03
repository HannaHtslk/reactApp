import React from 'react';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <a>About us</a>
      </li>
      <li className={s.item}>
        <a>Tours</a>
      </li>
      <li className={s.item}>
        <a>Gallery</a>
      </li>
      <li className={s.item}>
        <a>Contacts</a>
      </li>
    </ul>
  );
};

export default Navigation;
