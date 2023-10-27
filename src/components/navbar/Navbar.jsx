import React, { useState, useEffect } from 'react';
import { FaBars, FaFacebook, FaTimes, FaYoutube, FaLinkedin, FaChevronDown, FaInstagram } from 'react-icons/fa';
import './NavbarStyles.css';
import { Link } from 'react-scroll';
import logo from '../../assets/B2Academy-logo.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = ({ hideNavbarLinks }) => {
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
    window.scrollTo(0, 0);
  };

  const handleGoToHomePage = () => {
    navigate('/');
    window.scrollTo(0, 0);

  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.toLowerCase());

    // Save the selected language to local storage
    localStorage.setItem('selectedLanguage', language);
  };

  useEffect(() => {
    // Retrieve the selected language from local storage
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage.toLowerCase());
    }
  }, [setSelectedLanguage]);

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
            <img src={logo} onClick={handleGoToHomePage} alt="Logo" className="logo-img" />
          </Link>
        </div>

        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
          {!hideNavbarLinks && (
            <>
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
            </>
          )}
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
          {/*
            <div className="social-icons">
              <a className="icon" href="https://www.facebook.com/profile.php?id=61552695807806"><FaFacebook /></a>
              <a className="icon" href="#"><FaLinkedin /></a>
              <a className="icon" href="https://www.instagram.com/b2academys/"><FaInstagram /></a>
              <a className="icon" href="https://www.youtube.com/channel/UCY8XFWyBLeRNze3yhSp-7oA"><FaYoutube /></a>
            </div>
          */}
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
          {nav ? <FaTimes size={40} style={{ color: '#ffffff' }} /> : <FaBars style={{ color: '#211B59' }} size={40} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
