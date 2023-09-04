import React, { useState, useEffect } from 'react';
import { FaBars, FaFacebook, FaTimes, FaInstagram, FaLinkedin, FaGithub, FaChevronDown } from 'react-icons/fa';
import logo from '../../assets/B2Academy-logo.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './NavbarTwoStyles.css';

import { Link } from 'react-scroll';

function NavbarTwo() {
  const [nav, setNav] = useState(false);
  const [slide, setSlide] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('GB');

  const handleNav = () => {
    setNav(!nav);
    setSlide(!slide);
  };

  const handleClose = () => {
    setNav(!nav);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.toLowerCase());
  };
  const navigate = useNavigate();

  const handleGoToHomePage = () => {
    navigate('/');
  };

  const handleGoToTalkPage2 = () => {
    navigate('/Talk');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrollPosition > 0 ? 'scrolled' : ''}`}>
      <div className="container">
        <div className={slide ? 'logo slide-right bigger-logo' : 'logo'}>
          <Link onClick={handleClose} activeClass="active" to="home" spy={true} smooth={true} duration={500}>
            <img onClick={handleGoToHomePage} src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>

        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>

          <li>
            <div className="language-dropdown">
              <div className="selected-language" onClick={handleLanguageSelect}>
                <span>{selectedLanguage}</span>
                <FaChevronDown />
              </div>
              <ul className="language-options">
                <li onClick={() => handleLanguageSelect('GB')}>{t('navbar.gbEnglish')}</li>
                <li onClick={() => handleLanguageSelect('FR')}>{t('navbar.frFrancais')}</li>
              </ul>
            </div>
          </li>

          <div className="mobile-menu">
            <button onClick={handleGoToTalkPage2} id="nav-menu-btn">
              <span>{t('navbar.letsTalk')}</span>
            </button>
            <div className="social-icons">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaLinkedin className="icon" />
              <FaGithub className="icon" />
            </div>
          </div>
        </ul>

        <ul className="nav-menu hide">
          <li>
            <button onClick={handleGoToTalkPage2} id="nav-menu-btn">
              <span>{t('navbar.letsTalk')}</span>
            </button>
          </li>
        </ul>

        <div className="hamburger" onClick={handleNav}>
          {nav ? <FaTimes size={40} style={{ color: '#ffffff' }} /> : <FaBars style={{ color: '#211B59' }} size={40} />}
        </div>
      </div>
    </div>
  );
}

export default NavbarTwo;
