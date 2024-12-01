import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.css';

const Header = () => {
  return (
    <nav className={s.nav}>
      <Logo />
      <Navigation />
    </nav>
  );
};

export default Header;
