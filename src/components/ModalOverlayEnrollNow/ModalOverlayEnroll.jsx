import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import './ModalOverlayEnrollStyles.css';
import { useTranslation } from 'react-i18next';


function ModalOverlayEnroll({ onClose }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        const formData = JSON.parse(localStorage.getItem('formData'));
        if (formData) {
            setFirstName(formData.firstName);
            setLastName(formData.lastName);
            setEmail(formData.email);
            setPhoneNumber(formData.phoneNumber);
            setIsChecked(formData.isChecked);
        }
    }, []);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
        setErrorMessage('');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.classList.contains('modal-overlay')) {
                onClose();
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="modal-overlay">
            <div className="modal-content" data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="modal-header">
                    <h2>{t('ModalOverlayEnroll.title')}</h2>
                    <p>{t('ModalOverlayEnroll.description')}</p>
                    <br /><br />
                    <button className="close-icon" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>
                <form >
                    <div className="form-group">
                        <div className="name-inputs">
                            <input
                                className='input'
                                type="text"
                                id="firstName"
                                placeholder={t('ModalOverlayEnroll.firstName')}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                            <input
                                className='input'
                                type="text"
                                id="lastName"
                                placeholder={t('ModalOverlayEnroll.lastName')}
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            className='input'
                            type="email"
                            id="email"
                            placeholder={t('ModalOverlayEnroll.email')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className='input'
                            type="tel"
                            id="phoneNumber"
                            placeholder={t('ModalOverlayEnroll.phoneNumber')}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            className='textarea'
                            id="message"
                            placeholder={t('ModalOverlayEnroll.message')}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            {t('ModalOverlayEnroll.Terms and Conditions')}
                        </label>
                    </div>
                    {errorMessage && <p className={`error-message ${isChecked ? '' : 'red-text'}`}>{errorMessage}</p>}
                    <br />
                    <div className="form-group button-container">
                        <button type="button" className="modal-overlay-btn">
                            <span>{t('ModalOverlayEnroll.button')}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalOverlayEnroll;
