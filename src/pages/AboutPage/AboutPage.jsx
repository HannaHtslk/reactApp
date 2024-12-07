import React from 'react';
import s from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={s.container}>
      <img height="573px" src="/AboutUs/about.png" alt="about_us" />
      <div className={s.wrapper}>
        <h2 className={s.heading}>About us</h2>
        <ul className={s.list}>
          <li className={s.item}>
            <p className={s.txt}>
              Welcome to our travel agency in Ukraine! We are a locally owned
              and operated travel agency that specializes in creating unique and
              unforgettable travel experiences for our clients. Our team of
              experienced travel professionals is dedicated to providing
              personalized service to help you plan your dream vacation. We have
              extensive knowledge of Ukraine's culture, history, and geography,
              which allows us to create customized itineraries that showcase the
              best of our beautiful country.
            </p>
          </li>
          <li className={s.item}>
            <p className={s.txt}>
              We are committed to providing our clients with exceptional
              customer service and support throughout their travels. Our team is
              always available to assist you with any questions or concerns you
              may have before, during, and after your trip.
              <br /> <br /> Thank you for considering our travel agency for your
              travel needs. We look forward to helping you plan an unforgettable
              vacation in Ukraine or beyond!
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
