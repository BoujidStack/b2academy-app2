import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './ModalOverlayEnrollStyles.css';
import { saveFormDataToFirestore } from '../firebase/FirebaseUtils';
import { useTranslation } from 'react-i18next';


function ModalOverlayEnroll({ onClose }) {
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
    
                await saveFormDataToFirestore(formData);
    
                Swal.fire({
                    icon: 'success',
                    title: 'Proceeding to payment...',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    window.location.href = "/Subscription";
                });
            } else {
                setErrorMessage('Please fill in all the required fields.');
            }
        } else {
            setErrorMessage(t('ModalOverlayEnroll.errorMessage'));
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
                    <h2>{t('ModalOverlayEnroll.title')}</h2>
                    <p>{t('ModalOverlayEnroll.description')}</p>
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
                        <button type="submit" className="modal-overlay-btn">
                            <span>{t('ModalOverlayEnroll.button')}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalOverlayEnroll;
