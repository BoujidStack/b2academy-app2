import React, { useEffect } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import './AppointmentStyles.css';
import { useTranslation } from 'react-i18next';

const Appointment = () => {
    const { t } = useTranslation();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div name='scheduling-appointment' className='appointment'>
            <div className="appointment-details">
                <h1 data-aos="fade-right" data-aos-duration="1000">{t('Appointment.title')}</h1>
                <p data-aos="fade-right" data-aos-duration="1000">{t('Appointment.description')} B<sup>2</sup>Academy</p>
                <div className="contact-info" data-aos="fade-right" data-aos-duration="1000">
                    <FaEnvelope style={{ marginRight: '10px' }} />
                    <span>{t('Appointment.email')}</span>
                </div>
            </div>
            <div className='schedulingAppointment'>
                <div data-aos="fade-left" data-aos-duration="1200" className="calendly-inline-widget" data-url="https://calendly.com/hamzaboujid24/hamzaboujid24" ></div>
            </div>
        </div>
    );
};

export default Appointment;
