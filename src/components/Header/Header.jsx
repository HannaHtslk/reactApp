import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.nav}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
