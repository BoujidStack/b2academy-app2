import React, { useState } from 'react'
import './BdpStyles.css'
import Newsletter from '../newsletter/Newsletter'
import Fqa from '../FrequentlyAskedQuestions/Fqa'
import ModalOverlayEnroll from '../ModalOverlayEnrollNow/ModalOverlayEnroll'
import NumberCountingSection from '../NumberCountingSection/NumberCountingSection'
import Enrolltoday from '../Enrolltoday/Enrolltoday'
import Advantages from '../Advantages/Advantages'
import Business from '../B2AcademyForBusiness/Business'
import ProgramModules from '../programModules/ProgramModules'
import { useTranslation } from 'react-i18next';
import NavbarTwo from '../navbarForTalk&Bdp/NavbarTwo'
import FooterTwo from '../footerForTalk&Bdp/FooterTwo'

const Bdp = () => {
    const { t } = useTranslation();
    const [nav, setNav] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => {
        setNav(!nav);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <> <NavbarTwo />
            <div name='Bdp' className='Bdp'>
                <div className='content-Bdp'>
                    <div className='centered-content'>
                        <h1 className='title-Bdp' data-aos="fade-down" data-aos-duration="1000">{t('Bdp.title')}</h1>
                        <p className='text-Bdp' data-aos="zoom-in" data-aos-duration="1000">
                            {t('Bdp.description')}
                        </p>
                        <button onClick={() => setShowModal(true)} className='centered-button' data-aos="fade-up" data-aos-duration="1000">{t('Bdp.button')}</button>
                    </div>
                </div>
            </div>
            {showModal && <ModalOverlayEnroll onClose={handleCloseModal} />}
            <NumberCountingSection />
            <ProgramModules />
            <Enrolltoday />
            <Advantages />
            <Business />
            <Newsletter />
            <Fqa />
            <FooterTwo />
        </>
    )
}

export default Bdp