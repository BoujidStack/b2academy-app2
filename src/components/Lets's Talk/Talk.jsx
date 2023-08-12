import React, { useState } from 'react'
import './TalkStyles.css';
import Newsletter from '../newsletter/Newsletter';
import Fqa from '../FrequentlyAskedQuestions/Fqa';
import Appointment from '../Appointment scheduling/Appointment';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next';
import FooterTwo from '../footerForTalk&Bdp/FooterTwo';
import NavbarTwo from '../navbarForTalk&Bdp/NavbarTwo';

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
            <NavbarTwo />
            <div name='talk' className='talk'>
                <div className='content-talk'>
                    <div className='centered-content'>
                        <h1 data-aos="fade-down" data-aos-duration="1000" className='title-talk'>{t('talk.title')}</h1>
                        <p data-aos="zoom-in" data-aos-duration="1000" className='text-talk' dangerouslySetInnerHTML={{ __html: t('talk.description') }}></p>
                        <div data-aos="fade-up" data-aos-duration="1000"><Link onClick={handleClose} activeClass="active" to="appointment" spy={true} smooth={true} duration={500}><button className='centered-button'> {t('talk.button')}</button></Link></div>
                    </div>
                </div>
            </div>
            <Appointment />
            <Newsletter />
            <Fqa />
            <FooterTwo />
        </>
    );
};

export default Talk;
