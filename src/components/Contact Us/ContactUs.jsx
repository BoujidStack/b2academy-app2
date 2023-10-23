import React from 'react';
import './ContactUs.css';
import { useTranslation } from 'react-i18next';

function ContactUs() {
  const { t } = useTranslation();

  return (
    <div className="ContactUs" name="contactUs">
      <h1>Contact Us</h1>
      <div className="modal-header">
        <h2>{t('ContactUs.title')}</h2>
        <p>{t('ContactUs.description')}</p>
      </div>
      <form className='ContactUsform'>
        <div className="form-group name-inputs">
          <div className="form-group">
            <input type="text" id="firstName" name="firstName" placeholder={t('ContactUs.firstName')} className="input" />
          </div>
          <div className="form-group">
            <input type="text" id="lastName" name="lastName" placeholder={t('ContactUs.lastName')} className="input" />
          </div>
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" placeholder={t('ContactUs.email')} className="input" />
        </div>
        <div className="form-group">
          <input type="tel" id="phoneNumber" name="phoneNumber" placeholder={t('ContactUs.phoneNumber')} className="input" />
        </div>
        <div className="form-group">
          <textarea id="message" name="message" placeholder='Message' className="textarea"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="terms" className="checkbox-label">
            <input type="checkbox" id="terms" name="terms" className="checkbox" />
            {t('ContactUs.Terms and Conditions')}
          </label>
        </div>
        <div className="form-group button-container">
          <button type="submit" className="modal-overlay-btn">
            <span>{t('ContactUs.button')}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
