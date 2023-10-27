import React from 'react';
import './ContactUs.css';
import { useTranslation } from 'react-i18next';

function ContactUs() {
  const { t } = useTranslation();

  return (
    <div className="ContactUs" name="contactUs">
      <h1 data-aos="fade-down" data-aos-duration="1000">{t('ContactUs.ContactUstitle')}</h1>
      <div className="modal-header">
        <h2 data-aos="fade-right" data-aos-duration="1000">{t('ContactUs.title')}</h2>
        <p data-aos="fade-left" data-aos-duration="1000">{t('ContactUs.description')}</p>
      </div>
      <form className='ContactUsform'>
        <div className="ContactUsform-group ContactUsname-inputs">
          <div className="ContactUsform-group">
            <input data-aos="fade" data-aos-duration="1000" type="text" id="firstName" name="firstName" placeholder={t('ContactUs.firstName')} className="ContactUsinput" />
          </div>
          <div className="ContactUsform-group">
            <input data-aos="fade" data-aos-duration="1000" type="text" id="lastName" name="lastName" placeholder={t('ContactUs.lastName')} className="ContactUsinput" />
          </div>
        </div>
        <div className="ContactUsform-group">
          <input data-aos="fade" data-aos-duration="1000" type="email" id="email" name="email" placeholder={t('ContactUs.email')} className="ContactUsinput" />
        </div>
        <div className="ContactUsform-group">
          <input data-aos="fade" data-aos-duration="1000" type="tel" id="phoneNumber" name="phoneNumber" placeholder={t('ContactUs.phoneNumber')} className="ContactUsinput" />
        </div>
        <div className="ContactUsform-group">
          <textarea data-aos="fade" data-aos-duration="1000" id="message" name="message" placeholder='Message' className="ContactUstextarea"></textarea>
        </div>
        <div className="ContactUsform-group" data-aos="fade" data-aos-duration="1000">
          <label htmlFor="terms" className="ContactUscheckbox-label">
            <input type="checkbox" id="terms" name="terms" className="ContactUscheckbox" />
            {t('ContactUs.Terms and Conditions')}
          </label>
        </div>
        <div className="form-group button-container">
          <button type="button" className="modal-overlay-btn" data-aos="fade-up" data-aos-duration="1000">
            <span>{t('ContactUs.button')}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
