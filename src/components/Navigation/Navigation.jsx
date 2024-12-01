import React from 'react';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>About us</li>
      <li className={s.item}>Tours</li>
      <li className={s.item}>Gallery</li>
      <li className={s.item}>Contacts</li>
    </ul>
  );
};

export default Navigation;
