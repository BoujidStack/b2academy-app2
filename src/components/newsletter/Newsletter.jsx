import React from 'react';
import './NewsletterStyles.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const { t } = useTranslation();

  return (
    <div className='newsletter'>
      <h1 className='newsletter-title' data-aos="fade-down" data-aos-duration="1000">{t('newsletter.title')}</h1>
      <div className='newsletter-input' data-aos="zoom-in" data-aos-duration="1000">
        <input
          placeholder={t('newsletter.email')}
          className="input-newsletter"
          name="email"
          type="email"
          required
        />
        <button className="button-newsletter"><span>{t('newsletter.button')}</span></button>
      </div>
      <div className='social-media-icons' data-aos="zoom-in" data-aos-duration="1000">
        {/*
        <div className="media-icons" >
          <a href="https://www.facebook.com/profile.php?id=61552695807806"><FaFacebook /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="https://www.instagram.com/b2academys/"><FaInstagram /></a>
          <a href="https://www.youtube.com/channel/UCY8XFWyBLeRNze3yhSp-7oA"><FaYoutube /></a>
        </div>
        */}
      </div>
    </div>
  );
}

export default Newsletter;
