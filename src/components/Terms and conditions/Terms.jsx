import React, { useState } from 'react';
import './TermsStyles.css';
import NavbarTwo from '../navbarForTalk&Bdp/NavbarTwo';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/B2Academy-logo.png';
import { Link } from 'react-scroll'
import ModalOverlayPrograms from '../ModalOverlayRquestPrograms/ModalOverlayPrograms';
import { useNavigate } from 'react-router-dom';
import FooterTwo from '../footerForTalk&Bdp/FooterTwo';

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
            <FooterTwo/>
        </div>
    );
}

export default Terms;
