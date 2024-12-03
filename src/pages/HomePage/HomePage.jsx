import React from 'react';
import s from './HomePgae.module.css';

import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Socials from '../../components/Socials/Socials';

const HomePage = () => {
  return (
    <div className={s.home}>
      <Header>
        <Navigation />
      </Header>
      <h1 className={s.subhead}>
        Unlock the Wonders of <span className={s.heading}>Ukraine</span>
      </h1>
      <Button />
      <Socials />
    </div>
  );
};

export default HomePage;
