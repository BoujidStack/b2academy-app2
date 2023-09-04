import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './ModalOverlayBusinessesStyles.css';
import { saveFormDataToOtherForm } from '../firebase/FirebaseUtils';
import { useTranslation } from 'react-i18next';



function ModalOverlayBusinesses({ onClose }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isChecked) {
            if (firstName && lastName && email && phoneNumber) {
                console.log('Form submitted successfully!');
                const formData = {
                    firstName,
                    lastName,
                    email,
                    phoneNumber,
                    isChecked,
                };

                await saveFormDataToOtherForm(formData);

                Swal.fire({
                    icon: 'success',
                    title: 'Your info has been sent',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    onClose();
                });
            } else {
                setErrorMessage('Please fill in all the required fields.');
            }
        } else {
            setErrorMessage(t('ModalOverlayBusinesses.errorMessage'));
        }
    };

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
                    <h2>{t('ModalOverlayBusinesses.title')}</h2>
                    <p>{t('ModalOverlayBusinesses.description')}</p>
                    <br /><br />
                    <button className="close-icon" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="name-inputs">
                            <input
                                className='input'
                                type="text"
                                id="firstName"
                                placeholder={t('ModalOverlayBusinesses.firstName')}
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                            <input
                                className='input'
                                type="text"
                                id="lastName"
                                placeholder={t('ModalOverlayBusinesses.lastName')}
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
                            placeholder={t('ModalOverlayBusinesses.email')}
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
                            placeholder={t('ModalOverlayBusinesses.phoneNumber')}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
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
                            {t('ModalOverlayBusinesses.Terms and Conditions')}
                        </label>
                    </div>
                    {errorMessage && <p className={`error-message ${isChecked ? '' : 'red-text'}`}>{errorMessage}</p>}
                    <br />
                    <div className="form-group button-container">
                        <button type="submit" className="modal-overlay-btn">
                            <span>{t('ModalOverlayBusinesses.button')}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalOverlayBusinesses;
