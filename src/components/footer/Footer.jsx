import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './FooterStyle.css';
import logo from '../../assets/B2Academy-logo.png';
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom';
import ModalOverlayPrograms from '../ModalOverlayRquestPrograms/ModalOverlayPrograms';
import { useTranslation } from 'react-i18next';

const Footer = () => {
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

    const handleGoToTalkPage = () => {
        navigate('/Talk');
    };

    const handleGoToTermsPage = () => {
        navigate('/Terms&Conditions');
    };

    const handleGoToPrivacyPage = () => {
        navigate('/Privacy&Policy');
    };
    return (
        <footer>
            <div className="content">
                <hr className='line' />
                <div className="top">
                    <div className="logo-details">
                        <i className="fab fa-slack"></i>
                        <Link onClick={handleClose} activeClass="active" to="home" spy={true} smooth={true} duration={500}><img src={logo} alt='logo' className="logo_name" /></Link>
                    </div>
                    <div className="media-icons">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaYoutube /></a>
                    </div>
                </div>
                <div className="link-boxes">
                    <ul className="box">
                        <li className="link_name">B<sup>2</sup>Academy</li>
                        <li><Link onClick={handleClose} activeClass="active" to="home" spy={true} smooth={true} duration={500}><a href="#">{t('footer.Home')}</a></Link></li>
                        <li><Link onClick={handleClose} activeClass="active" to="programs" spy={true} smooth={true} duration={500}><a href="#">{t('footer.programs')}</a></Link></li>
                        <li><Link onClick={handleClose} activeClass="active" to="aboutUs" spy={true} smooth={true} duration={500}><a href="#">{t('footer.aboutUs')}</a></Link></li>
                        <li><Link onClick={handleClose} activeClass="active" to="ourMethodology" spy={true} smooth={true} duration={500}><a href="#">{t('footer.ourMethodology')}</a></Link></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Contact</li>
                        <li><a href='#' className='animated-ligne'>Login</a></li>
                        <li onClick={handleGoToTalkPage}><a>{t('footer.letsTalk')}</a></li>
                        <li><Link onClick={handleClose} activeClass="active" to="fqa" spy={true} smooth={true} duration={500}><a href="#">FQA</a></Link></li>
                        <li onClick={() => setShowModal(true)}><a>{t('footer.ContactUs')}</a></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Legal</li>
                        <li onClick={handleGoToTermsPage}><a href="#">{t('footer.terms and conditions')}</a></li>
                        <li onClick={handleGoToPrivacyPage}><a href="#">{t('footer.Privacy policy')}</a></li>
                    </ul>

                </div>
            </div>
            <div className="bottom-details">
                <div className="bottom_text">
                    <span className="copyright_text">
                        {t('footer.Copyright')}
                    </span>
                </div>
            </div>
            {showModal && <ModalOverlayPrograms onClose={handleCloseModal} />}
        </footer>
    );
};

export default Footer;
