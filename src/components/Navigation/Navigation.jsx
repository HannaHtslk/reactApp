import React from 'react';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={s.list}>
      <NavLink to="/about" className={s.item}>
        About us
      </NavLink>
      <NavLink to="/tours" className={s.item}>
        Tours
      </NavLink>
      <NavLink to="/gallery" className={s.item}>
        Gallery
      </NavLink>
      <NavLink to="/contacts" className={s.item}>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
