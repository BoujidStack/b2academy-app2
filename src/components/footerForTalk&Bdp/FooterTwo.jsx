import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './FooterTwoStyles.css';
import logo from '../../assets/B2Academy-logo.png';
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom';
import ModalOverlayPrograms from '../ModalOverlayRquestPrograms/ModalOverlayPrograms';
import { useTranslation } from 'react-i18next';

const FooterTwo = () => {
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

    const handleGoToHomePage = () => {
        navigate('/');
    };

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
                        <Link onClick={handleClose} activeClass="active" to="home" spy={true} smooth={true} duration={500}><img onClick={handleGoToHomePage} src={logo} alt='logo' className="logo_name" /></Link>
                    </div>
                    <div className="media-icons">
                        <a href="https://www.facebook.com/profile.php?id=61552695807806"><FaFacebook /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="https://www.youtube.com/channel/UCY8XFWyBLeRNze3yhSp-7oA"><FaYoutube /></a>
                    </div>
                </div>
                <div className="link-boxesTwo">
                    <ul className="boxTwo">
                        <li className="link_name">Contact</li>
                        <li className='Contactlinks'><a href='#' className='animated-ligne'>Login</a></li>
                        <li className='Contactlinks' onClick={handleGoToTalkPage}><a>{t('footer.letsTalk')}</a></li>
                        <li className='Contactlinks'><Link onClick={handleClose} activeClass="active" to="fqa" spy={true} smooth={true} duration={500}><a>FQA</a></Link></li>
                        <li className='Contactlinks' onClick={() => setShowModal(true)}><Link onClick={handleClose} activeClass="active" to="contactUs" spy={true} smooth={true} duration={500}><a>{t('footer.ContactUs')}</a></Link></li>
                    </ul>
                    <ul className="boxTwo Legal">
                        <li className="link_name">Legal</li>
                        <li className='Contactlinks' onClick={handleGoToTermsPage}><a>{t('footer.terms and conditions')}</a></li>
                        <li className='Contactlinks' onClick={handleGoToPrivacyPage}><a>{t('footer.Privacy policy')}</a></li>
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

export default FooterTwo;
