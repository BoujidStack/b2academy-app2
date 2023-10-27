import React, { useState, useEffect } from 'react';
import './HomeStyles.css';
import image from '../../assets/design1.png';
import { FaArrowRight } from 'react-icons/fa';
import design1 from '../../assets/design2.png';
import design2 from '../../assets/design3.png';
import design3 from '../../assets/design4.png';
import design4 from '../../assets/design5.png';
import design5 from '../../assets/design6.png';
import design6 from '../../assets/design7.png';
import design7 from '../../assets/design8.png';
import design8 from '../../assets/design9.png';
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const [nav, setNav] = useState(false);
    const { t } = useTranslation();

    const handleClose = () => {
        setNav(!nav);
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div name='home' className='home'>
            <div className='left' data-aos="fade-right" data-aos-duration="1000">
                <h1 className='b'>B<h1 className='bbc'>lockchain</h1></h1>
                <h1 className='b'>B<h1 className='bbc'>usiness</h1></h1>
                <h1 className='b'>A<h1 className='bbc'>cademy</h1></h1>
                <h3 className='titleHome'>{t('home.title')}</h3>
                <br />
                <p className='paragraphHome'>{t('home.description')}</p>
                <br />
                <div className="button-container">
                    <Link onClick={handleClose} activeClass="active" to="programs" spy={true} smooth={true} duration={500}><button id='btn-home'><span>{t('home.button')}</span></button></Link>
                    <Link onClick={handleClose} activeClass="active" to="aboutUs" spy={true} smooth={true} duration={500}><button className="cta">
                        <span className="hover-underline-animation">{t('home.buttonTwo')}</span>
                        <FaArrowRight />
                    </button></Link>
                </div>
            </div>
            <div className='right' data-aos="fade-left" data-aos-duration="1000">
                <div className="logo-container">
                    <img src={design1} alt='Design 1' className='logoDesign1' />
                    <img src={design2} alt='Design 2' className='logoDesign2' />
                    <img src={design3} alt='Design 3' className='logoDesign3' />
                    <img src={design4} alt='Design 4' className='logoDesign4' />
                    <img src={design5} alt='Design 5' className='logoDesign5' />
                    <img src={design6} alt='Design 6' className='logoDesign6' />
                    <img src={design7} alt='Design 7' className='logoDesign7' />
                    <img src={design8} alt='Design 8' className='logoDesign8' />
                </div>
                <img src={image} alt='Blockchain Business Academy' className='logoHome' />
            </div>
        </div>
    );
};


export default Home;
