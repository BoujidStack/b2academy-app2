import React, { useState } from 'react';
import './BusinessStyles.css';
import person1 from '../../assets/personImg1.png'
import person2 from '../../assets/personImg2.png'
import person3 from '../../assets/personImg3.png'
import ModalOverlayBusinesses from '../ModalOverlayRquestBusinesses/ModalOverlayBusinesses';
import { useTranslation } from 'react-i18next';

const Business = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="business-section">
      <div className='business-content'>
        <div className="images-container">
          <img data-aos="zoom-in-up" data-aos-duration="1000" src={person1} alt="Image 1" width={250} height={250} />
          <img data-aos="zoom-in-up" data-aos-duration="1000" src={person2} alt="Image 2" width={250} height={250} />
          <img data-aos="zoom-in-up" data-aos-duration="1000" src={person3} alt="Image 3" width={250} height={250} />
        </div>
        <div className="business-info">
          <h2 data-aos="fade-left" data-aos-duration="1000" dangerouslySetInnerHTML={{ __html: t('Business.title') }}></h2>
          <p data-aos="fade-left" data-aos-duration="1000">{t('Business.description')}</p>
          <button data-aos="fade-left" data-aos-duration="1000" id='business-info-btn' onClick={() => setShowModal(true)}><span>{t('Business.button')}</span></button>
        </div>
      </div>
      {showModal && <ModalOverlayBusinesses onClose={handleCloseModal} />}
    </div>
  );
};

export default Business;
