import React from 'react';
import s from './HomePgae.module.css';

import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const HomePage = () => {
  return (
    <div className={s.home}>
      <Header>
        <Navigation />
      </Header>
      <div className={s.wrapper}>
        <h2 className={s.subhead}>Unlock the Wonders of</h2>
        <h1 className={s.heading}>Ukraine</h1>
      </div>
      <Button />
    </div>
  );
};

export default HomePage;
