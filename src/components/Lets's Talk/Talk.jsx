import React, { useState } from 'react'
import './TalkStyles.css';
import Newsletter from '../newsletter/Newsletter';
import Fqa from '../FrequentlyAskedQuestions/Fqa';
import Footer from '../footer/Footer';
import Appointment from '../Appointment scheduling/Appointment';
import { FaBars, FaFacebook, FaTimes, FaInstagram, FaLinkedin, FaGithub, FaChevronDown } from 'react-icons/fa'
import logo from '../../assets/B2Academy-logo.png'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next';
import NavbarTwoComponent from '../navbarForTalk&bdv/NavbarTwo';

const Talk = () => {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)
    const { t } = useTranslation();



    const handleClose = () => {
        setNav(!nav)
    }


    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }


    const [selectedLanguage, setSelectedLanguage] = useState('GB');
    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };


    const navigate = useNavigate();

    const handleGoToTalkPage = () => {
        navigate('/');
    };

    return (
        <>
            <div name='talk' className='talk'>
                <NavbarTwoComponent/>
                <div className='content-talk'>
                    <div className='centered-content'>
                        <h1 data-aos="fade-down" data-aos-duration="1000" className='title-talk'>{t('talk.title')}</h1>
                        <p data-aos="zoom-in" data-aos-duration="1000" className='text-talk' dangerouslySetInnerHTML={{ __html: t('talk.description') }}></p>
                        <div data-aos="fade-up" data-aos-duration="1000"><Link  onClick={handleClose} activeClass="active" to="appointment" spy={true} smooth={true} duration={500}><button className='centered-button'> {t('talk.button')}</button></Link></div>
                    </div>
                </div>
            </div>
            <Appointment />
            <Newsletter />
            <Fqa />
            <Footer />
        </>
    );
};

export default Talk;
