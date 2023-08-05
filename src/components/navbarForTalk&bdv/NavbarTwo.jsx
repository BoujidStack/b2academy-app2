import React, { useState, useEffect } from 'react';
import { FaBars, FaFacebook, FaTimes, FaInstagram, FaLinkedin, FaGithub, FaChevronDown } from 'react-icons/fa';
import logo from '../../assets/B2Academy-logo.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './NavbarTwoStyles.css';

function NavbarTwoComponent() {
  const [nav, setNav] = useState(false);
  const [slide, setSlide] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('GB');

  const handleNav = () => {
    setNav(!nav);
    setSlide(!slide);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.toLowerCase());
  };
  const navigate = useNavigate();

  const handleGoToTalkPage = () => {
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
    <div className={`navbarTwo ${scrollPosition > 0 ? 'scrolled' : ''}`}>
      <div className="containerTwo">
        <div className={slide ? 'logo slide-right bigger-logo' : 'logo'}>
          <img src={logo} alt="Logo" className="logo-img" onClick={handleGoToTalkPage} />
        </div>

        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <div className="language-dropdownTwo">
              <div className="selected-language" onClick={handleLanguageSelect}>
                <span>{selectedLanguage}</span>
                <FaChevronDown />
              </div>
              <ul className="language-options">
                <li onClick={() => handleLanguageSelect('GB')}>GB English</li>
                <li onClick={() => handleLanguageSelect('FR')}>FR Francais</li>
              </ul>
            </div>
          </li>

          <div className='mobile-menu'>
            <button  id='nav-menu-btn' onClick={handleGoToTalkPage2}><span>{t('navbar.letsTalk')}</span></button>
            <div className="social-icons">
              <FaFacebook className='icon' />
              <FaInstagram className='icon' />
              <FaLinkedin className='icon' />
              <FaGithub className='icon' />
            </div>
          </div>
        </ul>

        <ul className='nav-menu hide'>
          <li>
            <button  id='nav-menu-btn'>
              <span onClick={handleGoToTalkPage2}>{t('navbar.letsTalk')}</span>
            </button>
          </li>
        </ul>

        <div className="hamburger" onClick={handleNav}>
          {nav ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars style={{ color: '#211B59' }} size={20} />)}
        </div>
      </div>
    </div>
  );
}

export default NavbarTwoComponent;
