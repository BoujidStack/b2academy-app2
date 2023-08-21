import React, { useEffect, useRef } from 'react';
import './ProgramModulesStyles.css';
import planet1 from '../../assets/planet1.png';
import planet2 from '../../assets/planet2.png';
import lignes from '../../assets/lignes.png';
import { useTranslation } from 'react-i18next';

const ProgramModules = () => {
  const { t } = useTranslation();
  const rocketRef = useRef(null);
  const flameRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const createSVGElement = (s) => document.createElementNS('http://www.w3.org/2000/svg', s);
    const randomRange = (min, max) => Math.random() * (max - min) + min;

    const createCircle = () => {
      const $circle = createSVGElement('circle');
      $circle.setAttribute('r', randomRange(0.5, 2));
      $circle.setAttribute('fill', '#211B59');
      $circle.setAttribute('cx', randomRange(0, 75));
      $circle.setAttribute('cy', randomRange(0, 75));
      return $circle;
    };

    const flicker = Array.from({ length: 20 }).map(() => ({
      transform: `scale(${randomRange(0.9, 1.2)}, ${randomRange(0.9, 1.2)})`,
    }));

    const animateFlame = () => {
      flameRef.current.animate(flicker, { duration: 750, iterations: Infinity });
    };

    const animateStars = () => {
      const across = [
        { cx: '75px', fillOpacity: 0 },
        { fillOpacity: 1 },
        { cx: '0', fillOpacity: 0 },
      ];

      starsRef.current.forEach(($star) => {
        const duration = randomRange(1000, 2000);
        $star.animate(across, { duration, iterations: Infinity });
      });
    };

    const $rocket = rocketRef.current;
    const $flame = flameRef.current;
    const $stars = Array.from({ length: 10 }).map(() => createCircle());

    $stars.forEach(($star) => {
      $rocket.insertBefore($star, $rocket.firstChild);
    });

    starsRef.current = $stars;

    animateFlame();
    animateStars();
  }, []);

  return (
    <div name="programModules" className="programModules">
      <div data-aos="fade-down" data-aos-duration="1000"><img src={planet1} alt="planet1" width={300} height={300} className="programModulesImage" /></div>
      <div data-aos="fade-left" data-aos-duration="1000"><img src={planet2} alt="planet2" width={700} height={700} className="programModulesImageRight" /></div>
      <img src={lignes} alt="lignes" width={2000} height={1000} className="programModuleslignes" data-aos="zoom-in" data-aos-duration="1000" />
      <div data-aos="zoom-in" data-aos-duration="1000">
        <svg id="rocket-icon" viewBox="0 0 75 75" ref={rocketRef} >
          <polygon fill="#0277B5" points="18 21 35 21 44 30 27 30" />
          <polygon fill="#0277B5" points="27 45 44 45 35 54 18 54" />
          <path fill="#0277B5" d="M30.94 47.7c-3.79-.93-6.98-2.35-9.25-4.07a14.88 14.88 0 0 0 0-12.26c2.27-1.72 5.46-3.14 9.25-4.08A14.72 14.72 0 0 1 35 37.5c0 3.98-1.55 7.59-4.06 10.2z" />
          <path fill="#0580C2" d="M30.94 27.3c-3.79.93-6.98 2.35-9.25 4.07.84 1.86 1.31 3.94 1.31 6.13h12c0-3.98-1.55-7.59-4.06-10.2z" />
          <path fill="#0277B5" d="M57.06 30.13C62.5 33.1 66 36.73 66 37.5c0 .77-3.49 4.4-8.94 7.37A14.83 14.83 0 0 0 59 37.5c0-2.7-.7-5.21-1.94-7.37z" />
          <path fill="#0580C2" d="M57.06 30.13C62.5 33.1 66 36.73 66 37.5h-7c0-2.7-.7-5.21-1.94-7.37z" />
          <path fill="#ECFAFF" d="M57.06 44.87C52.94 47.12 47.7 49 42 49c-3.99 0-7.75-.47-11.06-1.3A14.72 14.72 0 0 0 35 37.5c0-3.98-1.55-7.59-4.06-10.2C34.25 26.46 38.01 26 42 26c5.7 0 10.94 1.88 15.06 4.13A14.83 14.83 0 0 1 59 37.5c0 2.7-.7 5.21-1.94 7.37z" />
          <path fill="#FCFEFF" d="M57.06 30.13C52.94 27.88 47.7 26 42 26c-3.99 0-7.75.47-11.06 1.3A14.72 14.72 0 0 1 35 37.5h24c0-2.7-.7-5.21-1.94-7.37z" />
          <circle cx="49.5" cy="37.5" r="3.5" fill="#0277B5" />
          <path fill="#0580C2" d="M46 37.5h7a3.5 3.5 0 0 0-7 0z" />
          <path fill="#0277B5" d="M21 37.5c0-10.04-11 0-12 0 1 0 12 10.04 12 0" ref={flameRef} />
        </svg>
      </div>
      <div className='contentModules' data-aos="zoom-in" data-aos-duration="1000">
        <h1>{t('ProgramModules.module1')}</h1>
        <p>{t('ProgramModules.module1-description')}</p>
      </div>

      <div className='contentModulesTwo' data-aos="zoom-in" data-aos-duration="1000">
        <h1>{t('ProgramModules.module2')}</h1>
        <p>{t('ProgramModules.module2-description')}</p>
      </div>

      <div className='contentModulesThree' data-aos="zoom-in" data-aos-duration="1000">
        <h1>{t('ProgramModules.module3')}</h1>
        <p>{t('ProgramModules.module3-description')}</p>
      </div>

      <div className='contentModulesFourth' data-aos="zoom-in" data-aos-duration="1000">
        <h1>{t('ProgramModules.module4')}</h1>
        <p>{t('ProgramModules.module4-description')}</p>
      </div>

      <div className='contentModulesFive' data-aos="zoom-in" data-aos-duration="1000">
        <h1>{t('ProgramModules.module5')}</h1>
        <p>{t('ProgramModules.module5-description')}</p>
      </div>

      <div className='contentModulessix' data-aos="zoom-in" data-aos-duration="1000">
        <h1>{t('ProgramModules.module6')}</h1>
        <p>{t('ProgramModules.module6-description')}</p>
      </div>
    </div>
  );
};

export default ProgramModules;
