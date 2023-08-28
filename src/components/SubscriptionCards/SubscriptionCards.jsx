import React, { useEffect } from 'react';
import './SubscriptionCardsStyles.css';
import logo from '../../assets/logo.png';
import { useTranslation } from 'react-i18next';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Newsletter from '../newsletter/Newsletter';
import Fqa from '../FrequentlyAskedQuestions/Fqa';
import FooterTwo from '../footerForTalk&Bdp/FooterTwo';


function SubscriptionCards() {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className='SubscriptionCards'>
        <div className='cardd' data-aos="fade-right" data-aos-duration="1000">
          <div className='cardd__content'>
            <div className='cardd__logo' style={{ marginTop: '-10px' }}>
              <img src={logo} width={80} height={80} alt="Decentralized Learning" />
            </div>
            <div className='cardd__title'>
              <h3>{t('Subscription.cardd__title')}</h3>
              <p>{t('Subscription.cardd__title1')}</p>
              <div className='cardd__section'>IBAN: FR76 1695 8000 0163 2492 9120 493</div>
              <div className='cardd__section'>BIC/SWIFT: QNTOFRP1XXX</div>
              <div className='cardd__section'>{t('Subscription.cardd__section3')}</div>
            </div>
          </div>
        </div>
        <div className='cardd' data-aos="fade-left" data-aos-duration="1000">
          <div className='cardd__content'>
            <div className='cardd__logo' style={{ marginTop: '-10px' }}>
              <img src={logo} width={80} height={80} alt="Decentralized Learning" />
            </div>
            <div className='cardd__title'>
              <h3>{t('Subscription.cardd2__title')}</h3>
              <p>{t('Subscription.cardd2__title1')}</p>
              <div className='cardd__section'>{t('Subscription.cardd2__section1')}</div>
              <div className='cardd__section'>{t('Subscription.cardd2__section2')}</div>
              <div className='cardd__section cardd__section--margin-bottom'>{t('Subscription.cardd2__section3')}</div>
              <div><button className='SubscriptionCentered-button'>{t('Subscription.button2')}</button></div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Fqa />
      <FooterTwo />
    </>
  );
}

export default SubscriptionCards;
