import React, { useState, useEffect } from 'react';
import { FaBars, FaFacebook, FaTimes, FaInstagram, FaLinkedin, FaGithub, FaChevronDown } from 'react-icons/fa';
import './NavbarStyles.css';
import { Link } from 'react-scroll';
import logo from '../../assets/B2Academy-logo.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [slide, setSlide] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('GB');
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
    setSlide(!slide);
  };

  const handleClose = () => {
    setNav(!nav);
  };

  const handleGoToTalkPage = () => {
    navigate('/Talk');
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.toLowerCase());
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
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>

        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a href="/">
              <Link
                onClick={handleClose}
                className="animated-ligne"
                activeClass="active"
                to="programs"
                spy={true}
                smooth={true}
                duration={500}
              >
                {t('navbar.programs')}
              </Link>
            </a>
          </li>
          <li>
            <a href="/">
              <Link
                onClick={handleClose}
                className="animated-ligne"
                activeClass="active"
                to="aboutUs"
                spy={true}
                smooth={true}
                duration={500}
              >
                {t('navbar.aboutUs')}
              </Link>
            </a>
          </li>
          <li>
            <a href="/">
              <Link
                onClick={handleClose}
                className="animated-ligne"
                activeClass="active"
                to="ourMethodology"
                spy={true}
                smooth={true}
                duration={500}
              >
                {t('navbar.ourMethodology')}
              </Link>
            </a>
          </li>
          <li>
            <a href="#" className="animated-ligne">
              {t('navbar.login')}
            </a>
          </li>
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
            <button onClick={handleGoToTalkPage} id="nav-menu-btn">
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
            <button onClick={handleGoToTalkPage} id="nav-menu-btn">
              <span>{t('navbar.letsTalk')}</span>
            </button>
          </li>
        </ul>

        <div className="hamburger" onClick={handleNav}>
          {nav ? <FaTimes size={20} style={{ color: '#ffffff' }} /> : <FaBars style={{ color: '#211B59' }} size={20} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
