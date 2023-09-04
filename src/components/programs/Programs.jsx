import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgramsStyles.css';
import image from '../../assets/imgProgramm.png';
import { FaArrowRight } from 'react-icons/fa';
import ModalOverlayEnroll from '../ModalOverlayEnrollNow/ModalOverlayEnroll';
import { useTranslation } from 'react-i18next';

const Programs = () => {
  const [nav, setNav] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const handleClose = () => {
    setNav(!nav);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const navigate = useNavigate();
  const handleGoToBdp = () => {
    navigate('/blockchain');
  };

  return (
    <div name="programs" className="programs">
      <div className="contentPrograms">
        <h1 data-aos="fade-down" data-aos-duration="1000">{t('programs.titleSection')}</h1>
        <div id="container" data-aos="fade-right" data-aos-duration="1000">
          <div className="product-details" data-aos="fade-zoom-in" data-aos-duration="1000">
            <h1>{t('programs.title')}</h1>
            <p className="information">
              {t('programs.description')}
            </p>
            <div className="button-containerPrograms">
              <div>
                <button className="ctaPrograms" onClick={handleGoToBdp}>
                  <a href="#">
                    <span className="hover-underline-animation">{t('programs.button')}</span>
                  </a>
                  <FaArrowRight />
                </button>
                <a className="open-enrollment-link" onClick={() => setShowModal(true)}>
                  • {t('programs.buttonTwo')}
                </a>
              </div>
            </div>
          </div>
          <div className="product-image">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      {showModal && <ModalOverlayEnroll onClose={handleCloseModal} />}
    </div>
  );
};

export default Programs;
