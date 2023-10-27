import React from 'react';
import './AdvantagesStyles.css';
import passionIcon from '../../assets/icons-Advantages/1.png'
import incomeIcon from '../../assets/icons-Advantages/2.png'
import workIcon from '../../assets/icons-Advantages/3.png'
import projectIcon from '../../assets/icons-Advantages/4.png'
import timeIcon from '../../assets/icons-Advantages/5.png'
import moneyIcon from '../../assets/icons-Advantages/6.png'
import nftImg from '../../assets/nftImg.png'
import { useTranslation } from 'react-i18next';

const Advantages = () => {
    const { t } = useTranslation();
    return (
        <div className="advantages-container">
            <div className='content-advantages'>
                <h1 className="advantages-title" data-aos="fade-down" data-aos-duration="1000">{t('advantages.title')}</h1>
                <h2 className="advantages-subtitle" data-aos="fade-down" data-aos-duration="1000">{t('advantages.subtitle')}</h2>
                <div className="advantages-cards">
                    <div className="advantages-card" data-aos="fade-right" data-aos-duration="1000">
                        <h3>{t('advantages.advantages-card')}</h3>
                        <ul>
                            <li>
                                <img src={passionIcon} alt="passionIcon" />
                                <h4>{t('advantages.advantages-card-point1')}</h4>
                            </li>
                            <li>
                                <img src={incomeIcon} alt="incomeIcon" />
                                <h4>{t('advantages.advantages-card-point2')}</h4>
                            </li>
                            <li>
                                <img src={workIcon} alt="workIcon" />
                                <h4>{t('advantages.advantages-card-point3')}</h4>
                            </li>
                        </ul>
                    </div>
                    <div className="advantages-card" data-aos="fade-left" data-aos-duration="1000">
                        <h3>{t('advantages.advantages-card2')}</h3>
                        <ul>
                            <li>
                                <img src={projectIcon} alt="projectIcon" />
                                <h4>{t('advantages.advantages-card2-point1')}</h4>
                            </li>
                            <li>
                                <img src={timeIcon} alt="timeIcon" />
                                <h4>{t('advantages.advantages-card2-point2')}</h4>
                            </li>
                            <li>
                                <img src={moneyIcon} alt="moneyIcon" />
                                <h4>{t('advantages.advantages-card2-point3')}</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <h2 className="advantages-subtitle" data-aos="fade-down" data-aos-duration="1000">{t('advantages.subtitle2')}</h2>
                <div className="advantages-cards">
                    <div className="advantages-card" data-aos="fade-right" data-aos-duration="1000">
                        <h2>{t('advantages.advantages-card3-point1')}</h2>
                        <h4>{t('advantages.advantages-card3-point2')}</h4>
                    </div>
                    <div className="advantages-card" data-aos="fade-left" data-aos-duration="1000">
                        <h2>{t('advantages.advantages-card4-point3')}</h2>
                        <h4>{t('advantages.advantages-card4-point4')}</h4>
                    </div>
                </div>

                <div className="advantages-cards">
                    <div className="advantages-card" data-aos="fade-right" data-aos-duration="1000">
                        <h2>{t('advantages.advantages-card5-point5')}</h2>
                        <h4>{t('advantages.advantages-card5-point6')}</h4>
                    </div>
                    <div className="advantages-card" data-aos="fade-left" data-aos-duration="1000">
                        <h2>{t('advantages.advantages-card6-point7')}</h2>
                        <h4>{t('advantages.advantages-card6-point8')}</h4>
                    </div>
                </div>
                <h2 className="advantages-subtitle" data-aos="fade-down" data-aos-duration="1000">{t('advantages.subtitle3')}</h2>
                <div className="advantages-card-NFT" data-aos="fade-up" data-aos-duration="1000">
                    <img src={nftImg} alt="nftImg" height={300} width={300} />
                    <h4>
                        {t('advantages.advantages-card-NFT')}
                    </h4>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default Advantages;
