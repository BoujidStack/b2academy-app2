import './SubscriptionStyles.css';
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next';
import SubscriptionCards from '../SubscriptionCards/SubscriptionCards';
import Navbar from '../navbar/Navbar';

function Subscription() {
    const [nav, setNav] = useState(false)
    const { t } = useTranslation();
    const handleClose = () => {
        setNav(!nav)
    }

    return (
        <>
            <Navbar hideNavbarLinks={true} />
            <div name='Subscription' className='Subscription'>
                <div className='content-Subscription'>
                    <div className='SubscriptionCentered-content '>
                        <h1 data-aos="fade-down" data-aos-duration="1000" className='title-Subscription'>{t('Subscription.title')}</h1>
                        <div data-aos="fade-up" data-aos-duration="1000"><Link onClick={handleClose} activeClass="active" to="SubscriptionCards" spy={true} smooth={true} duration={500}><button className='SubscriptionCentered-button'>{t('Subscription.button')}</button></Link></div>
                    </div>
                </div>
            </div>
            <SubscriptionCards />
        </>

    )
}

export default Subscription