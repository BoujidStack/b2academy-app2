import React, { useState } from 'react';
import './EnrolltodayStyles.css';
import imgEnrolltoday from '../../assets/imgEnrolltoday.png';
import ModalOverlayEnroll from '../ModalOverlayEnrollNow/ModalOverlayEnroll';
import { useTranslation } from 'react-i18next';

const Enrolltoday = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div name='enrolltoday' className='enrolltoday'>
      <div className="containerEnrolltoday">
        <div className="content-sectionEnrolltoday">
          <button data-aos="fade-right" data-aos-duration="1000" id='Enrolltoday-btn' onClick={() => setShowModal(true)}>
            <span>{t('Enrolltoday.button')}</span>
          </button>
          <div className="content" data-aos="fade-right" data-aos-duration="1000">
            <h2>{t('Enrolltoday.title')}</h2>
          </div>
        </div>
        <div className="image-section" data-aos="zoom-in-up" data-aos-duration="1000">
          <img src={imgEnrolltoday} />
        </div>
      </div>
      {showModal && <ModalOverlayEnroll onClose={handleCloseModal} />}
    </div>
  );
};

export default Enrolltoday;
