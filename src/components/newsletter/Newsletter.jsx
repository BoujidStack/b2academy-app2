import React from 'react';
import './NewsletterStyles.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { saveFormDataToOtherFormEmails } from '../firebase/FirebaseUtils';
import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const { t } = useTranslation();

  const handleSubscribe = async () => {
    const emailInput = document.querySelector('.input-newsletter');
    const email = emailInput.value.trim();

    if (email === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your email!',
      });
    } else {
      try {
        const formData = {
          email,
        };
        await saveFormDataToOtherFormEmails(formData);
        Swal.fire({
          icon: 'success',
          title: 'Subscribed!',
          text: 'Thank you for subscribing!',
        }).then(() => {
          emailInput.value = '';
        });
      } catch (error) {
        console.error('Error saving email:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'There was an error while processing your request. Please try again later.',
        });
      }
    }
  };

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
        <button className="button-newsletter" onClick={handleSubscribe}><span>{t('newsletter.button')}</span></button>
      </div>
      <div className='social-media-icons' data-aos="zoom-in" data-aos-duration="1000">
        <div className="media-icons" >
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
