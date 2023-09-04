import React, { useState } from 'react';
import './TermsStyles.css';
import NavbarTwo from '../navbarForTalk&Bdp/NavbarTwo';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/B2Academy-logo.png';
import { Link } from 'react-scroll'
import ModalOverlayPrograms from '../ModalOverlayRquestPrograms/ModalOverlayPrograms';
import { useNavigate } from 'react-router-dom';

function Terms() {
    const { t } = useTranslation();
    const [nav, setNav] = useState(false);
    const [showModal, setShowModal] = useState(false);


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
        <div>
            <div name="Terms" className="Terms">
                <NavbarTwo />
                <div className="contentTerms">
                    <h1>{t('Terms&Conditions.title')}</h1>
                    <h2>{t('Terms&Conditions.titleText')}</h2>
                    <h2>{t('Terms&Conditions.Text')}</h2>
                    <p>{t('Terms&Conditions.textTitle1')}</p>
                    <h2>{t('Terms&Conditions.Text1')}</h2>
                    <h3>{t('Terms&Conditions.Text2')}</h3>
                    <p>{t('Terms&Conditions.textTitle2')}</p>
                    <h3>{t('Terms&Conditions.text3')}</h3>
                    <p>{t('Terms&Conditions.textTitle3')}</p>
                    <h3>{t('Terms&Conditions.text4')}</h3>
                    <p>{t('Terms&Conditions.textTitle4')}</p>
                    <h2>{t('Terms&Conditions.text5')}</h2>
                    <p>{t('Terms&Conditions.textTitle5')}</p>
                    <h2>{t('Terms&Conditions.text6')}</h2>
                    <p>{t('Terms&Conditions.textTitle6')}</p>
                    <h2>{t('Terms&Conditions.text7')}</h2>
                    <p>{t('Terms&Conditions.textTitle7')}</p>
                    <h2>{t('Terms&Conditions.text8')}</h2>
                    <p>{t('Terms&Conditions.textTitle8')}</p>
                    <h2>{t('Terms&Conditions.text9')}</h2>
                    <p>{t('Terms&Conditions.textTitle9')}</p>
                    <h2>{t('Terms&Conditions.text10')}</h2>
                    <p>{t('Terms&Conditions.textTitle10')}</p>
                    <h2>{t('Terms&Conditions.text11')}</h2>
                    <p>{t('Terms&Conditions.textTitle11')}</p>
                </div>
            </div>
            <footer>
                <div className="content">
                    <hr className='line' />
                    <div className="top">
                        <div className="logo-details">
                            <i className="fab fa-slack"></i>
                            <Link onClick={handleClose} activeClass="active" to="home" spy={true} smooth={true} duration={500}><img onClick={handleGoToHomePage} src={logo} alt='logo' className="logo_name" /></Link>
                        </div>
                        <div className="media-icons">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedin /></a>
                            <a href="#"><FaYoutube /></a>
                        </div>
                    </div>
                    <div className="link-boxesTwo">
                        <ul className="boxTwo">
                            <li className="link_name">Contact</li>
                            <li className='Contactlinks'><a href='#' className='animated-ligne'>Login</a></li>
                            <li className='Contactlinks' onClick={handleGoToTalkPage}><a>{t('footer.letsTalk')}</a></li>
                            <li className='Contactlinks' onClick={() => setShowModal(true)}><a>{t('footer.ContactUs')}</a></li>
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
        </div>
    );
}

export default Terms;
