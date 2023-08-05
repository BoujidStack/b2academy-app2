import React, { useState } from 'react';
import './RoadMapStyles.css';
import { FaHome, FaCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Roadmap = () => {
    const [stepIndex, setStepIndex] = useState(0);
    const { t } = useTranslation();

    const handleStepClick = (index) => {
        setStepIndex(index);
    };

    return (
        <div className='RoadMap'>
            <div className="process-wrapper">
                <h3 data-aos="fade-left" data-aos-duration="1000">ROADMAP</h3>
                <h1 data-aos="fade-right" data-aos-duration="1000">{t('roadmap.title')}</h1>
                <div id="progress-bar-container" data-aos="zoom-in-up" data-aos-duration="1000">
                    <ul>
                        <li className={`step step01 ${stepIndex === 0 ? 'active' : ''}`} onClick={() => handleStepClick(0)}>
                        </li>
                        <li className={`step step02 ${stepIndex === 1 ? 'active' : ''}`} onClick={() => handleStepClick(1)}>
                        </li>
                        <li className={`step step03 ${stepIndex === 2 ? 'active' : ''}`} onClick={() => handleStepClick(2)}>
                        </li>
                        <li className={`step step04 ${stepIndex === 3 ? 'active' : ''}`} onClick={() => handleStepClick(3)}>
                        </li>
                    </ul>

                    <div id="line">
                        <div id="line-progress" style={{ width: `${stepIndex * 33.3}%` }}></div>
                    </div>
                </div>

                <div id="progress-content-section" data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className={`section-content discovery ${stepIndex === 0 ? 'active' : ''}`}>
                        <h2><FaHome size={50} /></h2>
                        <p>{t('roadmap.progress-content1')}</p>
                    </div>

                    <div className={`section-content strategy ${stepIndex === 1 ? 'active' : ''}`}>
                        <h2><FaCode size={50} /></h2>
                        <p>{t('roadmap.progress-content2')}</p>
                    </div>

                    <div className={`section-content creative ${stepIndex === 2 ? 'active' : ''}`}>
                        <h2><FaGraduationCap size={50} /></h2>
                        <p>{t('roadmap.progress-content3')}</p>
                    </div>

                    <div className={`section-content production ${stepIndex === 3 ? 'active' : ''}`}>
                        <h2><FaBriefcase size={50} /></h2>
                        <p>{t('roadmap.progress-content4')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;