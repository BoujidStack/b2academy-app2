import React from 'react';
import './OurMethodologyStyles.css';
import imgOurMethodology from '../../assets/imgOurMethodology.png';
import imgOurMethodology1 from '../../assets/imgOurMethodology1.png';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';

const OurMethodology = () => {
    const { t } = useTranslation();

    return (
        <div name='ourMethodology' className='ourMethodology'>
            <div className="section">
                <div className="titleOurMethodology" data-aos="fade-down" data-aos-duration="1000">
                    <h1>{t('methodology.title')}</h1>
                </div>
                <div className="containerOurMethodology">
                    <div className="content-section">
                        <div className="content">
                            <p data-aos="fade-right" data-aos-duration="1000" dangerouslySetInnerHTML={{ __html: t('methodology.description') }}></p>
                        </div>
                        <div className="content-point">
                            <img src={logo} width={35} height={35} alt="Decentralized Learning" data-aos="zoom-in-up" data-aos-duration="1000"/>
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <h5>DECENTRALIZED LEARNING :</h5>
                                <p>{t('methodology.DecentralizedLwarning')}</p>
                            </div>
                        </div>
                        <div className="content-point">
                            <img src={logo} width={35} height={35} alt="Decentralized Learning" data-aos="zoom-in-up" data-aos-duration="1000"/>
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <h5>METAVERSE :</h5>
                                <p>{t('methodology.Metaverse')}</p>
                            </div>
                        </div>
                        <div className="content-point">
                            <img src={logo} width={35} height={35} alt="Decentralized Learning" data-aos="zoom-in-up" data-aos-duration="1000"/>
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <h5>FLEXIBLE CURRICULUM :</h5>
                                <p>{t('methodology.FlexibleCurriculum')}<br />
                                    <strong> • {t('methodology.FlexibleCurriculum-point1')}</strong><br />
                                    <strong> • {t('methodology.FlexibleCurriculum-point2')}</strong>
                                </p>
                            </div>
                        </div>
                        <div className="content-point">
                            <img src={logo} width={35} height={35} alt="Decentralized Learning" data-aos="zoom-in-up" data-aos-duration="1000"/>
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <h5>MICROLEARNING : </h5>
                                <p>{t('methodology.MicroLearning')}</p>
                            </div>
                        </div>
                        <div className="content-point">
                            <img src={logo} width={35} height={35} alt="Decentralized Learning" data-aos="zoom-in-up" data-aos-duration="1000"/>
                            <div data-aos="fade-left" data-aos-duration="1000">
                                <h5>NFT CERTIFICATION : </h5>
                                <p>{t('methodology.NftCertification')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="image-section">
                        <div className="card">
                            <div className="card-inner" data-aos="zoom-in-up" data-aos-duration="1000">
                                <div className="card-front">
                                    <img src={imgOurMethodology} alt="Our Methodology" />
                                </div>
                                <div className="card-back">
                                    <img src={imgOurMethodology1} alt="Our Methodology" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMethodology;
