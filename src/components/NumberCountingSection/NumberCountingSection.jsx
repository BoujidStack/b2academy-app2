import React, { useEffect, useRef, useState } from 'react';
import './NumberCountingSectionStyles.css';
import logoNumberCounting from '../../assets/logoNumberCounting.png';
import { saveFormDataToOtherFormEmails } from '../firebase/FirebaseUtils';
import { useTranslation } from 'react-i18next';

const NumberCountingSection = () => {
  const countingRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useTranslation();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    setErrorMessage('');
  };

  const handleDownloadButtonClick = async () => {
    if (isChecked && isValidEmail(email)) {
      const formData = {
        email,
      };

      try {
        await saveFormDataToOtherFormEmails(formData);

        const fileUrl = 'https://drive.google.com/file/d/1Je7bhms-JRtR0ARQIP6c7LYSMuTR8KkB/view?usp=sharing';
        window.open(fileUrl, '_blank');
      } catch (error) {
        console.error('Error saving email:', error);
        setErrorMessage('There was an error while processing your request. Please try again later.');
      }
    } else {
      setErrorMessage('Please accept the terms and conditions and provide a valid email address.');
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };




  useEffect(() => {
    const countingElement = countingRef.current;
    const countingItems = countingElement.querySelectorAll('.counting-item h2');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const startNumber = parseInt(target.getAttribute('data-start'), 10);
          const endNumber = parseInt(target.getAttribute('data-end'), 10);
          const duration = parseInt(target.getAttribute('data-duration'), 10);
          const increment = Math.ceil((endNumber - startNumber) / (duration / 16));

          let currentNumber = startNumber;
          const updateNumber = () => {
            if (currentNumber <= endNumber) {
              target.textContent = currentNumber;
              currentNumber += increment;
              requestAnimationFrame(updateNumber);
            } else {
              target.textContent = endNumber;
              if (endNumber === 100) {
                target.textContent += '%';
              } else if (endNumber === 10) {
                target.textContent = `+${endNumber}`;
              }
            }
          };

          updateNumber();
        }
      });
    }, options);

    countingItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="number-counting-section" ref={countingRef}>
        <div className="counting-item" data-aos="zoom-in-up" data-aos-duration="1000">
          <h2 data-start="0" data-end="100" data-duration="1000"></h2>
          <div>
            <p>{t('NumberCountingSection.counting-item1')}</p>
            <p>{t('NumberCountingSection.counting-item2')}</p>
          </div>
        </div>
        <div className="counting-item" data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={logoNumberCounting} width={80} height={80} />
          <div>
            <p>{t('NumberCountingSection.counting-item3')}</p>
            <p>{t('NumberCountingSection.counting-item4')}</p>
          </div>
        </div>
        <div className="counting-item" data-aos="zoom-in-up" data-aos-duration="1000">
          <h2 data-start="0" data-end="10" data-duration="1000"></h2>
          <div>
            <p>{t('NumberCountingSection.counting-item5')}</p>
            <p>{t('NumberCountingSection.counting-item6')}</p>
          </div>
        </div>
        <div className="counting-item" data-aos="zoom-in-up" data-aos-duration="1000">
          <h3>4-6</h3>
          <div>
            <p>{t('NumberCountingSection.counting-item7')}</p>
            <p>{t('NumberCountingSection.counting-item8')}</p>
          </div>
        </div>
      </div>

      <div className='Brochure'>
        <h1 className='Brochure-title' data-aos="fade-down" data-aos-duration="1000">{t('Brochure.title')}</h1>
        <p className='Brochure-text' data-aos="fade-down" data-aos-duration="1000">
          {t('Brochure.description')}
        </p>
        <p className='Brochure-text'  data-aos="fade-down" data-aos-duration="1000">
          {t('Brochure.description2')}
        </p>
        <div className='Brochure-input' data-aos="zoom-in" data-aos-duration="1000">
          <form>
            <input
              placeholder={t('Brochure.email')}
              className="input-Brochure"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="button-Brochure" onClick={handleDownloadButtonClick}>
              <span>{t('Brochure.button')}</span>
            </button>
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                {t('Brochure.Terms and Conditions')}

              </label>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>
      </div>
    </>

  );
};

export default NumberCountingSection;
